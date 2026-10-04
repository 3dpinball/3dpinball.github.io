==============================================================
  ROAD RASH (Windows 95) - BAN CHOI TREN WEB / DIEN THOAI
==============================================================

Road Rash (EA, 1996) chay trong Windows 95 gia lap bang js-dos 8
(DOSBox-X), choi ngay tren trinh duyet may tinh hoac dien thoai,
co joystick va nut cam ung.


--------------------------------------------------------------
1. CAC FILE TRONG THU MUC
--------------------------------------------------------------

  index.html          Trang choi game (joystick + nut cam ung).
  roadrash-v5.jsdos   Goi game: Windows 95 + Road Rash cai san
                      (~78 MB).
  js-dos.js           Thu vien js-dos 8.
  js-dos.css          Giao dien js-dos.
  emulators\          Trinh gia lap (DOSBox-X ban WebAssembly).
  CHAY-SERVER.bat     Nhap dup de bat server choi tren may / qua Wi-Fi.
  serve.ps1           Server web nho (CHAY-SERVER.bat goi file nay).
  README.txt          File nay.

  Phai giu nguyen tat ca file trong cung mot thu muc.


--------------------------------------------------------------
2. CACH CHAY
--------------------------------------------------------------

  QUAN TRONG: KHONG nhap dup mo thang index.html (dia chi
  file:///...). Trinh duyet se chan tai game -> man hinh den.
  Luon mo qua server (http://...).

  a) Choi tren may tinh
     1. Nhap dup CHAY-SERVER.bat.
     2. Mo trinh duyet (Chrome / Edge), vao:
            http://localhost:8080/
     3. Doi tai ~78 MB, Windows 95 khoi dong, game tu bat.

  b) Choi tren dien thoai (cung mang Wi-Fi voi may tinh)
     1. Nhap dup CHAY-SERVER.bat tren may tinh.
     2. Cua so server hien dia chi dang:
            http://192.168.x.x:8080/
     3. Mo dia chi do tren dien thoai, xoay ngang de choi.

     Neu dien thoai khong vao duoc:
       - Khi Windows Firewall hoi, chon "Allow access".
       - Hoac doi Wi-Fi sang Private:
         Settings > Network & internet > Wi-Fi > (ten mang)
         > Network profile type > Private.

  c) Dua len mang (choi khong can may tinh)
     Upload ca thu muc len GitHub Pages / Netlify / hosting bat ky.
     File roadrash-v5.jsdos (~78 MB) van duoi gioi han 100 MB/file
     cua GitHub.

  Tat server: dong cua so CHAY-SERVER.

  Doi cong (port): sua dong cuoi CHAY-SERVER.bat thanh
      powershell -ExecutionPolicy Bypass -File "%~dp0serve.ps1" -Port 9000


--------------------------------------------------------------
3. DIEU KHIEN CAM UNG
--------------------------------------------------------------

  JOYSTICK (nua trai man hinh)
    Dat ngon tay o dau trong nua trai, joystick hien ra o do.
      Day len      = GA (tang toc)
      Keo xuong    = PHANH
      Trai / Phai  = LAI XE
    Day cheo duoc (vi du vua ga vua lai).

  3 NUT BEN PHAI
      DANH  = Swing  (dam / vung gay)
      DA    = Kick   (da)
      TAT   = Backhand (tat nguoc)

  THANH TREN
      ENTER = chon / xac nhan trong menu
      ESC   = quay lai / tam dung
      TAB   = chuyen muc trong menu

  Bam nhieu ngon cung luc duoc (giu joystick + danh).
  Cham vao man hinh game = click chuot (dung cho menu).


--------------------------------------------------------------
4. BAN PHIM (KHI CHOI TREN MAY TINH)
--------------------------------------------------------------

  Phim mac dinh cua game (doc tu code game):

      Mui ten Len      Tang ga
      Mui ten Xuong    Phanh
      Mui ten Trai/Phai Lai
      Home / Page Up   Nghieng nguoi (Lean)
      N                Nitro
      Insert           Danh (Swing)
      Enter            Da (Kick)
      Space            Tat nguoc (Backhand)
      D                Xuong xe (Dismount)

  Co the doi phim trong game: Options > Controls.
  Luu y: neu doi phim trong game thi nut cam ung se khong con
  khop (nut cam ung gui dung cac phim mac dinh o tren).


--------------------------------------------------------------
5. LUU Y
--------------------------------------------------------------

  - Khong co nhac nen: ban RIP nay da bo thu muc nhac
    (Audio\Music). Tieng hieu ung (dong co, dam, la het...) van co.
  - Cac thong bao loi "DirectDraw driver", "Bad or missing file",
    "MIDI Error" da duoc tat san.
  - Bam "Go Home" trong game se thoat ra desktop Windows 95.
    Tai lai trang (F5) de vao lai game.
  - Lan dau tai lau (~78 MB). Neu thay ban cu sau khi cap nhat,
    nhan Ctrl+F5 hoac mo cua so an danh.
  - iPhone / Safari: khong tu toan man hinh duoc. Dung
    "Them vao Man hinh chinh" (Add to Home Screen) de gon hon.
  - Choi muot nhat tren Chrome / Edge, may co CPU manh.


--------------------------------------------------------------
6. XU LY SU CO
--------------------------------------------------------------

  Man hinh den ngay tu dau
    -> Ban dang mo file truc tiep. Mo qua http://localhost:8080/.

  Dien thoai khong vao duoc
    -> Kiem tra cung Wi-Fi, cho phep Firewall / doi mang Private
       (muc 2b).

  Nut bam khong tac dung
    -> Doi game chay han (sau man hinh Windows 95), cham vao
       man hinh game mot lan roi thu lai.

  Bao "You need to install RoadRash"
    -> Lan khoi dong dau, registry chua kip nhap. Tai lai trang.


--------------------------------------------------------------
7. THONG TIN KY THUAT (cho nguoi chinh sua)
--------------------------------------------------------------

  Trong roadrash-v5.jsdos:
    - .jsdos/dosbox.conf : cau hinh DOSBox-X, tu "boot c:",
      gan roadrash.iso lam o CD D: (game can co o CD-ROM moi chay).
    - system-win95-v1.qcow2 : o C: Windows 95.
        C:\ROADRASH\            game (da cai san).
        C:\ROADRASH\ROADRASH.REG  registry game
                                (Path = C:\ROADRASH).
        C:\AUTOEXEC.BAT         nhap registry o lan khoi dong dau.
        C:\WINDOWS\WIN.INI      run=C:\ROADRASH\ROADRASH.EXE
                                (tu chay game khi vao Windows).
    - roadrash.iso : o CD D: (ban sao game).

  ROADRASH.EXE trong o C: da duoc va 7 byte de tat thong bao loi
  (file RoadRash.exe goc o thu muc Road_Rash khong bi sua):
      0x48B7E  74    -> EB      bo canh bao DirectDraw
      0x3305A  68 50 -> EB 37   bo "Bad or missing file" (nhac)
      0x33076  A1 78 -> EB 1B   bo "MIDI Error"
      0x01BF4  56 A1 -> EB 13   bo "Bad or missing file" (MCI)

  index.html:
    - Gui phim vao game qua ci.sendKeyEvent(ma_phim, nhan/nha)
      cua js-dos. Bang ma phim nam o bien KEYS.
    - Muon doi phim cho nut: sua thuoc tinh data-key cua nut
      (vi du data-key="insert") va bang KEYS.
    - Neu doi ten file .jsdos: sua dong url: "./roadrash-v5.jsdos".
    - pathPrefix tro ve thu muc emulators\ cuc bo
      (khong bo dong nay, neu khong js-dos se tai tu trang khac).
