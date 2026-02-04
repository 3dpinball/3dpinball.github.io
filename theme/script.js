let themeData = {};
let oldColors = {};
let oldIcons = {};

let globalFillColor = null;
let globalStrokeColor = null;

fileInput.addEventListener("change", e=>{
  const reader = new FileReader();
  reader.onload = ()=>{
    themeData = JSON.parse(reader.result);
    oldColors = JSON.parse(JSON.stringify(themeData.colors));
    oldIcons = JSON.parse(JSON.stringify(themeData.icons));
    renderForm();
  };
  reader.readAsText(e.target.files[0]);
});

globalFillColorInput = document.getElementById("globalFillColor");
globalStrokeColorInput = document.getElementById("globalStrokeColor");

fontInput = document.getElementById("fontInput");

fontInput.addEventListener("change", e=>{
  themeData.fontFamily = e.target.value;
  renderPreview(); // hoặc renderForm();
});
nameInput = document.getElementById("nameInput");

nameInput.addEventListener("input", e=>{
  themeData.name = e.target.value;
  renderPreview();
});

globalFillColorInput.addEventListener("change", e=>{
  globalFillColor = e.target.value;
  renderForm();
});

globalStrokeColorInput.addEventListener("change", e=>{
  globalStrokeColor = e.target.value;
  renderForm();
});

function clearGlobalSvgColor(){
  globalFillColor = null;
  globalStrokeColor = null;
  renderForm();
}

function renderForm(){
  nameInput.value = themeData.name || "";
  fontInput.value = themeData.fontFamily || "";

  colors.innerHTML="";
  for(let k in themeData.colors){
    colors.innerHTML += `
      <div class="color-row">
        <label style="width:150px">${k}</label>
        <div class="color-preview" style="background:${oldColors[k]}"></div>
        <input type="color" value="${themeData.colors[k]}"
          onchange="updateColor('${k}',this.value)">
        <input type="text" value="${themeData.colors[k]}"
          oninput="updateColor('${k}',this.value)">
      </div>`;
  }
  updateBulkBox();

  icons.innerHTML="";
  for(let k in themeData.icons){
    if(["defaultSize","strokeWidth","color"].includes(k)){
      icons.innerHTML += `
        <div class="color-row">
          <label style="width:150px">${k}</label>
          <input value="${themeData.icons[k]}"
            oninput="themeData.icons['${k}']=this.value">

            </div>`;
    } else {
      const newSvg = applyGlobalColor(themeData.icons[k]);
      icons.innerHTML += `
        <div class="icon-row">
          <label style="width:140px">${k}</label>
          <div class="compare-box">
            <div class="icon-preview">${oldIcons[k]||""}</div>
            <div class="icon-preview">${newSvg}</div>
          </div>
          <button class="btn-create" onclick="openSvgCreator('${k}')">Create</button>

<button class="btn-upload" onclick="document.getElementById('file_${k}').click()">
  Upload SVG
</button>

<input 
  type="file" 
  id="file_${k}" 
  accept=".svg" 
  style="display:none"
  onchange="uploadIcon(event,'${k}')">

       

          </div>`;
    }
  }

  renderPreview();
}

function applyGlobalColor(svgText){
  if(!svgText) return svgText;
  svgText = svgText.replace(/<\?xml.*?\?>/g,"");

  const parser = new DOMParser();
  const doc = parser.parseFromString(svgText,"image/svg+xml");
  const svg = doc.querySelector("svg");
  if(!svg) return svgText;

 doc.querySelectorAll("*").forEach(el=>{
  const fill = el.getAttribute("fill");
  const stroke = el.getAttribute("stroke");

  if(globalFillColor && fill && fill !== "none"){
    el.setAttribute("fill", globalFillColor);
  }

  if(globalStrokeColor && stroke && stroke !== "none"){
    el.setAttribute("stroke", globalStrokeColor);
  }
});


  return svg.outerHTML.replace(/"/g,"'").replace(/\r?\n|\r/g,"");
}

function updateColor(key,value){
  themeData.colors[key]=value;
  renderForm();
}

function updateBulkBox(){
  let text="";
  for(let k in themeData.colors){
    text += `"${k}": "${themeData.colors[k]}",\n`;
  }
  bulkColors.value=text.trim();
}

function applyBulkColors(){
  const lines = bulkColors.value.split("\n");
  lines.forEach(line=>{
    const match = line.match(/"(.+?)"\s*:\s*"(#?[0-9a-fA-F]{3,6})"/);
    if(match && themeData.colors[match[1]]){
      themeData.colors[match[1]] = match[2];
    }
  });
  renderForm();
}

function cleanSVG(svgText){
  svgText = svgText.replace(/<\?xml.*?\?>/g,"");
  const doc = new DOMParser().parseFromString(svgText,"image/svg+xml");
  const svg = doc.querySelector("svg");
  if(!svg) return null;
  return svg.outerHTML.replace(/"/g,"'").replace(/\r?\n|\r/g,"");
}

function uploadIcon(e,key){
  const reader = new FileReader();
  reader.onload = ()=>{
    const cleaned = cleanSVG(reader.result);
    if(cleaned){
      themeData.icons[key] = cleaned;
      renderForm();
    }
  };
  reader.readAsText(e.target.files[0]);
}

function slugify(text){
  return text.toLowerCase().trim()
    .replace(/[^a-z0-9\s]/g,"")
    .replace(/\s+/g,"_");
}

function downloadJSON(){
 themeData.name = nameInput.value;
  themeData.fontFamily = fontInput.value;

  const exportTheme = JSON.parse(JSON.stringify(themeData));
  // clone object để không phá themeData gốc

  if(globalFillColor || globalStrokeColor){
    for(let k in exportTheme.icons){
      if(!["defaultSize","strokeWidth","color"].includes(k)){
        exportTheme.icons[k] = applyGlobalColor(exportTheme.icons[k]);
      }
    }
  }

  const blob = new Blob(
    [JSON.stringify(exportTheme, null, 2)],
    { type: "application/json" }
  );

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = slugify(exportTheme.name || "theme") + ".json";
  a.click();
}


function renderPreview(){
  if(!themeData.colors || !themeData.icons) return;

  const c = themeData.colors;
  const i = themeData.icons;

  const toolIcons = Object.keys(i)
    .filter(k=>!["defaultSize","strokeWidth","color"].includes(k))
    .slice(0,12)
    .map(k=>`<div class="tool">${applyGlobalColor(i[k])}</div>`)
    .join("");

  const palette = Object.values(c)
    .slice(0,12)
    .map(col=>`<div class="color" style="background:${col}"></div>`)
    .join("");

  preview.innerHTML = `
    <div class="titlebar">
      <div class="dot red"></div>
      <div class="dot yellow"></div>
      <div class="dot green"></div>
<strong style="font-family:'${themeData.fontFamily || "sans-serif"}'">
  ${themeData.name || "Paint"}
</strong>
    </div>

   <div class="toolbar" style="background:${c.panelBackground}">
  <div class="toolbar-left">
    ${applyGlobalColor(i.arrow_back||"")}
  </div>

  <div class="toolbar-spacer"></div>

  <div class="toolbar-right">
    ${applyGlobalColor(i.undo||"")}
    ${applyGlobalColor(i.redo||"")}
    ${applyGlobalColor(i.save||"")}
    ${applyGlobalColor(i.image||"")}
    ${applyGlobalColor(i.paste||"")}
    ${applyGlobalColor(i.refresh||"")}
  </div>
</div>


    <div class="body">
<div class="toolbox"
 style="
   --panel-bg:${c.panelBackground};
   --border-light:${c.toolButtonBorderLight};
   --border-dark:${c.toolButtonBorderDark};
   --toolbar-header:${c.toolbarHeader};
   --tool-face:${c.toolButtonFace};
 ">
        <div class="toolbox-header" 
     style="background:${c.toolbarHeader}; font-family:'${themeData.fontFamily || "sans-serif"}'">
  Tools
</div>

<div class="toolbox-grid">${toolIcons}</div>

<div class="more" style="font-family:'${themeData.fontFamily || "sans-serif"}'">
  More
</div>

      </div>

      <div class="canvas"></div>

      <div class="slider">
        <div>-</div>
        <div class="track"><div class="thumb"></div></div>
        <div>+</div>
      </div>
    </div>

    <div class="colorbar" style="background:${c.panelBackground}">
      ${palette}
      <div class="tool">${applyGlobalColor(i.palette||"")}</div>
    </div>
  `;
}


function openSvgCreator(key){
  SvgCreator.open(key);
}


