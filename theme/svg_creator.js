// svg_creator.js
const SvgCreator = (function(){

  let currentIconKey = null;
  let canvas, ctx;
  let drawing = false;

  const CANVAS_SIZE = 256;
  const GRID =32;
  const CELL = CANVAS_SIZE / GRID;

  let brushColor = "#000000";
  let brushType = "pixel"; // pen | pixel

  let paths = [];   // pen strokes
  let pixels = {}; // pixel grid { "x_y": color }

  /* ================= INIT ================= */

  function init(){
    canvas = document.getElementById("svgCanvas");
    ctx = canvas.getContext("2d");

    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;
    canvas.style.touchAction = "none";
    canvas.style.imageRendering = "pixelated";

    canvas.addEventListener("pointerdown", startDraw);
    canvas.addEventListener("pointermove", drawMove);
    canvas.addEventListener("pointerup", endDraw);
    canvas.addEventListener("pointercancel", endDraw);

    const colorInput = document.getElementById("svgBrushColor");
    if(colorInput){
      colorInput.addEventListener("input", e=>{
        brushColor = e.target.value;
      });
    }

    const imgInput = document.getElementById("svgImageInput");
    if(imgInput){
      imgInput.addEventListener("change", handleImageUpload);
    }

    redraw();
  }

  function open(key){
    currentIconKey = key;
    document.getElementById("svgCreatorModal").classList.remove("hidden");
    clear();
  }

  function close(){
    document.getElementById("svgCreatorModal").classList.add("hidden");
  }

  /* ================= BRUSH ================= */

  function setBrush(type){
    brushType = type;
    redraw();
  }

  /* ================= DRAW ================= */

  function startDraw(e){
    e.preventDefault();
    drawing = true;
    canvas.setPointerCapture(e.pointerId);
    drawAtEvent(e);
  }

  function drawMove(e){
    if(!drawing) return;
    drawAtEvent(e);
  }

  function endDraw(e){
    drawing = false;
    try{ canvas.releasePointerCapture(e.pointerId); }catch{}
  }

  function drawAtEvent(e){
    const pos = getPos(e);

    if(brushType === "pixel"){
      const gx = Math.floor(pos.x / CELL);
      const gy = Math.floor(pos.y / CELL);
      const key = `${gx}_${gy}`;
      pixels[key] = brushColor;
    } else {
      let last = paths[paths.length-1];
      if(!drawing || !last){
        paths.push({
          color: brushColor,
          points:[pos]
        });
      } else {
        last.points.push(pos);
      }
    }

    redraw();
  }

  /* ================= RENDER ================= */

  function redraw(){
    ctx.clearRect(0,0,CANVAS_SIZE,CANVAS_SIZE);

    if(brushType === "pixel"){
      drawGrid();
      drawPixels();
    } else {
      drawPaths();
    }
  }

  function drawGrid(){
    ctx.strokeStyle = "#ddd";
    ctx.lineWidth = 1;

    for(let i=0;i<=GRID;i++){
      let p = i * CELL;

      ctx.beginPath();
      ctx.moveTo(p,0);
      ctx.lineTo(p,CANVAS_SIZE);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0,p);
      ctx.lineTo(CANVAS_SIZE,p);
      ctx.stroke();
    }
  }

  function drawPixels(){
    for(let key in pixels){
      const [x,y] = key.split("_").map(Number);
      ctx.fillStyle = pixels[key];
      ctx.fillRect(x*CELL, y*CELL, CELL, CELL);
    }
  }

  function drawPaths(){
    paths.forEach(p=>{
      ctx.strokeStyle = p.color;
      ctx.lineWidth = 6;
      ctx.lineCap = "round";

      ctx.beginPath();
      ctx.moveTo(p.points[0].x,p.points[0].y);
      p.points.forEach(pt=>ctx.lineTo(pt.x,pt.y));
      ctx.stroke();
    });
  }

  function getPos(e){
    const rect = canvas.getBoundingClientRect();
    return {
      x:(e.clientX-rect.left)*(CANVAS_SIZE/rect.width),
      y:(e.clientY-rect.top)*(CANVAS_SIZE/rect.height)
    };
  }

  /* ================= IMAGE UPLOAD ================= */

  function handleImageUpload(e){
    const file = e.target.files[0];
    if(!file) return;

    const img = new Image();
    img.onload = ()=>{
      drawImageFit(img);
    };
    img.src = URL.createObjectURL(file);
  }

  function drawImageFit(img){
    const cw = CANVAS_SIZE;
    const ch = CANVAS_SIZE;

    const iw = img.width;
    const ih = img.height;

    const scale = Math.min(cw/iw, ch/ih);

    const nw = iw * scale;
    const nh = ih * scale;

    const x = (cw - nw) / 2;
    const y = (ch - nh) / 2;

    ctx.clearRect(0,0,cw,ch);
    ctx.drawImage(img, x, y, nw, nh);

    importImageToPixels();
  }

  function importImageToPixels(){
    const imgData = ctx.getImageData(0,0,CANVAS_SIZE,CANVAS_SIZE).data;
    pixels = {};

    for(let y=0;y<GRID;y++){
      for(let x=0;x<GRID;x++){
        const px = Math.floor(x*CELL + CELL/2);
        const py = Math.floor(y*CELL + CELL/2);

        const i = (py*CANVAS_SIZE + px)*4;
        const r = imgData[i];
        const g = imgData[i+1];
        const b = imgData[i+2];
        const a = imgData[i+3];

        if(a > 50){
          const color = `rgb(${r},${g},${b})`;
          pixels[`${x}_${y}`] = color;
        }
      }
    }

    redraw();
  }

  /* ================= ACTIONS ================= */

  function clear(){
    paths = [];
    pixels = {};
    redraw();
  }

  function undo(){
    if(brushType==="pixel"){
      const keys = Object.keys(pixels);
      delete pixels[keys[keys.length-1]];
    } else {
      paths.pop();
    }
    redraw();
  }

  function confirm(){
    let svg = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">`;
    const scale = 64 / CANVAS_SIZE;

    for(let key in pixels){
      const [x,y] = key.split("_").map(Number);
      svg += `<rect x="${x*CELL*scale}" y="${y*CELL*scale}" width="${CELL*scale}" height="${CELL*scale}" fill="${pixels[key]}" />`;
    }

    paths.forEach(p=>{
      let d = `M ${p.points[0].x*scale} ${p.points[0].y*scale}`;
      p.points.forEach(pt=>{
        d+=` L ${pt.x*scale} ${pt.y*scale}`;
      });
      svg += `<path d="${d}" fill="none" stroke="${p.color}" stroke-width="2" stroke-linecap="round"/>`;
    });

    svg += `</svg>`;

    themeData.icons[currentIconKey] = svg.replace(/"/g,"'");
    close();
    renderForm();
  }

  return {
    init,
    open,
    close,
    clear,
    undo,
    confirm,
    setBrush
  };

})();
