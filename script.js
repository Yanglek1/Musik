
/* ============================================================
   ICONS
============================================================ */
const ICO = {};
function svgw(inner, vb='0 0 24 24'){return `<svg viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;}
ICO.home = svgw(`<path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9h5v-5h2v5h5v-9"/>`);
ICO.users = svgw(`<circle cx="8.5" cy="8" r="3"/><path d="M2.5 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M14.2 20c.3-2.8 2.3-5 4.8-5 2.7 0 5 2.5 5 5.5"/>`);
ICO.calendar = svgw(`<rect x="3" y="5" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/>`);
ICO.map = svgw(`<path d="M4 6.5 9 4l6 2 5-2v13.5l-5 2-6-2-5 2z"/><line x1="9" y1="4" x2="9" y2="17.5"/><line x1="15" y1="6" x2="15" y2="19.5"/>`);
ICO.clock = svgw(`<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>`);
ICO.camera = svgw(`<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13.3" r="3.4"/>`);
ICO.alert = svgw(`<path d="M12 3 2 20h20z"/><line x1="12" y1="9.5" x2="12" y2="14"/><circle cx="12" cy="17" r="0.5" fill="currentColor"/>`);
ICO.check = svgw(`<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 12.5 10.7 15 16 9.5"/>`);
ICO.image = svgw(`<rect x="3" y="4.5" width="18" height="15" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M4 16.5l4.5-4.5 3.5 3.5 2.5-2.5 5 5"/>`);
ICO.mic = svgw(`<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="8.5" y1="22" x2="15.5" y2="22"/>`);
ICO.history = svgw(`<path d="M3.5 12a8.5 8.5 0 1 0 2.8-6.3"/><path d="M3 4.5v4.5h4.5"/><path d="M12 7.5v5l3.5 2"/>`);
ICO.gauge = svgw(`<path d="M4 15.5a8 8 0 1 1 16 0"/><path d="M12 15.5 15.5 10"/><circle cx="12" cy="15.5" r="1.1" fill="currentColor"/>`);
ICO.zap = svgw(`<path d="M13 2 4.5 14h5.7l-1.2 8L18 10h-5.7z"/>`);
ICO.grid = svgw(`<rect x="3" y="3" width="7.5" height="7.5" rx="1.3"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.3"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.3"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.3"/>`);
ICO.calc = svgw(`<rect x="5" y="3" width="14" height="18" rx="2"/><line x1="8" y1="7.5" x2="16" y2="7.5"/><line x1="8" y1="12" x2="8" y2="12"/><line x1="12" y1="12" x2="12" y2="12"/><line x1="16" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="12" y1="16" x2="12" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/>`);
ICO.qr = svgw(`<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14.5" y="14.5" width="2.5" height="2.5"/><rect x="18.5" y="14.5" width="2.5" height="2.5"/><rect x="14.5" y="18.5" width="2.5" height="2.5"/><rect x="18.5" y="18.5" width="2.5" height="2.5"/>`);
ICO.activity = svgw(`<path d="M3 12h4l2.2 6.5L13 6l2.2 6H21"/>`);
ICO.network = svgw(`<circle cx="6" cy="6" r="2.2"/><circle cx="18" cy="6" r="2.2"/><circle cx="12" cy="18" r="2.2"/><line x1="7.4" y1="7.8" x2="10.8" y2="15.8"/><line x1="16.6" y1="7.8" x2="13.2" y2="15.8"/><line x1="8.2" y1="6" x2="15.8" y2="6"/>`);
ICO.box = svgw(`<path d="M3 8 12 3.5 21 8"/><path d="M3 8v9l9 4.5 9-4.5V8"/><line x1="12" y1="12.5" x2="12" y2="21.5"/><line x1="3" y1="8" x2="12" y2="12.5"/><line x1="21" y1="8" x2="12" y2="12.5"/>`);
ICO.package = ICO.box;
ICO.chat = svgw(`<path d="M4 5h16v11.5H8.5L4 20.5z"/>`);
ICO.bell = svgw(`<path d="M6 10.5a6 6 0 0 1 12 0c0 4.7 1.8 6 1.8 6H4.2s1.8-1.3 1.8-6z"/><path d="M10 20a2 2 0 0 0 4 0"/>`);
ICO.book = svgw(`<path d="M4 5.2c3-1.6 6-1.6 8 0v14c-2-1.6-5-1.6-8 0z"/><path d="M20 5.2c-3-1.6-6-1.6-8 0v14c2-1.6 5-1.6 8 0z"/>`);
ICO.user = svgw(`<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7"/>`);
ICO.coin = svgw(`<circle cx="12" cy="12" r="9"/><path d="M9.3 15c.4 1 1.5 1.6 2.9 1.6 1.7 0 3-1 3-2.3 0-1.4-1.3-1.9-3-2.3-1.7-.4-3-1-3-2.3 0-1.3 1.3-2.3 3-2.3 1.4 0 2.5.6 2.9 1.6"/><line x1="12" y1="6.3" x2="12" y2="7.7"/><line x1="12" y1="16.3" x2="12" y2="17.7"/>`);
ICO.close = svgw(`<line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>`);
ICO.search = svgw(`<circle cx="11" cy="11" r="6.5"/><line x1="20.5" y1="20.5" x2="16" y2="16"/>`);
ICO.chevleft = svgw(`<path d="M15 5 8 12l7 7"/>`);
ICO.chevright = svgw(`<path d="M9 5l7 7-7 7"/>`);
ICO.send = svgw(`<path d="M4 12 20 4l-6 16-3-6.5z"/><path d="M20 4 10.5 13.5"/>`);
ICO.cloud = svgw(`<path d="M6.7 17.5a3.7 3.7 0 0 1 0-7.4A5.3 5.3 0 0 1 17 8.2a3.7 3.7 0 0 1 .8 7.3z"/>`);
ICO.settings = svgw(`<circle cx="12" cy="12" r="3.1"/><line x1="19.5" y1="12" x2="21.5" y2="12"/><line x1="17.3" y1="17.3" x2="18.7" y2="18.7"/><line x1="12" y1="19.5" x2="12" y2="21.5"/><line x1="6.7" y1="17.3" x2="5.3" y2="18.7"/><line x1="4.5" y1="12" x2="2.5" y2="12"/><line x1="6.7" y1="6.7" x2="5.3" y2="5.3"/><line x1="12" y1="4.5" x2="12" y2="2.5"/><line x1="17.3" y1="6.7" x2="18.7" y2="5.3"/>`);
ICO.sun = svgw(`<circle cx="12" cy="12" r="4.3"/><line x1="18" y1="12" x2="21" y2="12"/><line x1="16.2" y1="16.2" x2="18.4" y2="18.4"/><line x1="12" y1="18" x2="12" y2="21"/><line x1="7.8" y1="16.2" x2="5.6" y2="18.4"/><line x1="6" y1="12" x2="3" y2="12"/><line x1="7.8" y1="7.8" x2="5.6" y2="5.6"/><line x1="12" y1="6" x2="12" y2="3"/><line x1="16.2" y1="7.8" x2="18.4" y2="5.6"/>`);
ICO.moon = svgw(`<path d="M20 14.2A8.2 8.2 0 1 1 9.8 4a6.4 6.4 0 0 0 10.2 10.2z"/>`);
ICO.sync = svgw(`<path d="M4 12a8 8 0 0 1 14-5.2M20 12a8 8 0 0 1-14 5.2"/><path d="M18 3v4h-4"/><path d="M6 21v-4h4"/>`);
ICO.wallet = svgw(`<rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M3 10h18"/><circle cx="16.5" cy="14" r="1"/>`);
ICO.doc = svgw(`<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><line x1="9.5" y1="12" x2="14.5" y2="12"/><line x1="9.5" y1="15.5" x2="14.5" y2="15.5"/>`);

/* ============================================================
   DATA
============================================================ */
const CUSTOMERS = [
 {name:'Budi Santoso', phone:'0812-3456-7890', paket:'Home Fiber 50 Mbps', alamat:'Jl. Melati No. 12, Kartoharjo', koor:'-7.6298, 111.5239', status:'aktif', riwayat:['12 Jun 2026 — Internet lambat, selesai ditangani','2 Mar 2026 — Instalasi baru, selesai']},
 {name:'Siti Aminah', phone:'0813-2211-4455', paket:'Home Fiber 100 Mbps', alamat:'Jl. Kenanga No. 5, Manguharjo', koor:'-7.6187, 111.5301', status:'gangguan', riwayat:['30 Jul 2026 — Redaman tinggi, dalam proses']},
 {name:'Warkop Setia Kawan', phone:'0821-9988-7766', paket:'Business Fiber 200 Mbps', alamat:'Jl. Pahlawan No. 88, Taman', koor:'-7.6301, 111.5185', status:'aktif', riwayat:['15 Jan 2026 — Penggantian ONU, selesai']},
 {name:'Rudi Hartono', phone:'0857-1122-3344', paket:'Home Fiber 30 Mbps', alamat:'Jl. Diponegoro No. 21, Kartoharjo', koor:'-7.6255, 111.5340', status:'aktif', riwayat:[]},
 {name:'Toko Elektronik Jaya', phone:'0811-5566-7788', paket:'Business Fiber 100 Mbps', alamat:'Jl. Sudirman No. 45, Manguharjo', koor:'-7.6320, 111.5220', status:'aktif', riwayat:['20 Feb 2026 — Maintenance rutin, selesai']}
];

const SCHEDULE = [
 {time:'08:00', name:'Rudi Hartono', type:'Instalasi', priority:'sedang', alamat:'Jl. Diponegoro No. 21', estimasi:'60 menit'},
 {time:'10:30', name:'Siti Aminah', type:'Gangguan', priority:'tinggi', alamat:'Jl. Kenanga No. 5', estimasi:'45 menit'},
 {time:'13:30', name:'Budi Santoso', type:'Maintenance', priority:'rendah', alamat:'Jl. Melati No. 12', estimasi:'30 menit'},
 {time:'15:30', name:'Toko Elektronik Jaya', type:'Instalasi', priority:'sedang', alamat:'Jl. Sudirman No. 45', estimasi:'90 menit'}
];

const INVENTORY = [
 {name:'Kabel Dropcore', unit:'meter', stock:340, max:500},
 {name:'Fast Connector', unit:'pcs', stock:18, max:200},
 {name:'Patchcord', unit:'pcs', stock:64, max:100},
 {name:'ONU', unit:'unit', stock:7, max:50},
 {name:'Router', unit:'unit', stock:12, max:50},
 {name:'Clamp', unit:'pcs', stock:120, max:150},
 {name:'Baut', unit:'pcs', stock:400, max:500},
 {name:'Tiang', unit:'batang', stock:3, max:20}
];

const CHECKLIST_ITEMS = ['ONT aktif','LOS mati','PON hijau','WiFi normal','Speed sesuai paket','TV IPTV','VoIP','Edukasi pelanggan'];
let checkState = CHECKLIST_ITEMS.map(()=>false);

const SPEED_HISTORY = [
 {d:'3 Agu 2026, 16:20', down:'182.4', up:'64.1', ping:'6'},
 {d:'2 Agu 2026, 09:05', down:'94.8', up:'40.2', ping:'9'},
 {d:'31 Jul 2026, 14:40', down:'210.6', up:'71.9', ping:'5'}
];

/* Feature catalog — categories with sub-items exactly per spesifikasi */
const FEATURES = [
 {cat:'Operasional', items:[
   {id:'pelanggan', title:'Data Pelanggan', icon:'users', built:true, desc:'Cari & kelola data pelanggan'},
   {id:'jadwal', title:'Jadwal Teknisi', icon:'calendar', built:true, desc:'Kalender & daftar pekerjaan'},
   {id:'navigasi', title:'Navigasi', icon:'map', desc:'Rute ke lokasi pelanggan', sub:['Buka Google Maps','Rute tercepat','Estimasi perjalanan','Titik pelanggan']},
   {id:'absensi', title:'Absensi Teknisi', icon:'clock', desc:'Check in / check out harian', sub:['Check In','Check Out','GPS','Selfie']},
 ]},
 {cat:'Laporan Lapangan', items:[
   {id:'lapinstalasi', title:'Laporan Instalasi', icon:'camera', desc:'Dokumentasi hasil instalasi', sub:['Foto sebelum','Foto sesudah','SN ONU','MAC Address','Redaman','Kecepatan Speedtest','Catatan','Tanda tangan pelanggan','Upload otomatis']},
   {id:'lapgangguan', title:'Laporan Gangguan', icon:'alert', desc:'Catatan penanganan gangguan', sub:['Jenis gangguan','Penyebab','Solusi','Material dipakai','Lama pengerjaan','Foto bukti']},
   {id:'checklist', title:'Checklist Instalasi', icon:'check', built:true, desc:'Verifikasi kelengkapan instalasi'},
   {id:'fotodok', title:'Foto Dokumentasi', icon:'image', desc:'Dokumentasi visual per kategori', sub:['Sebelum','Sesudah','ODP','Tiang','Rumah','Modem']},
   {id:'catatanlapangan', title:'Catatan Lapangan', icon:'mic', desc:'Catatan cepat di lokasi', sub:['Voice Note','Teks','Foto']},
   {id:'riwayat', title:'Riwayat Pekerjaan', icon:'history', desc:'Log seluruh pekerjaan', sub:['Instalasi','Gangguan','Maintenance','Survey']},
 ]},
 {cat:'Alat Teknisi', items:[
   {id:'speedtest', title:'Speed Test', icon:'gauge', built:true, desc:'Uji kecepatan koneksi'},
   {id:'optical', title:'Optical Power Calculator', icon:'zap', built:true, desc:'Hitung redaman jalur fiber'},
   {id:'odp', title:'Perhitungan ODP', icon:'grid', built:true, desc:'Kapasitas & penggunaan port'},
   {id:'kalkulatorteknisi', title:'Kalkulator Teknisi', icon:'calc', desc:'dBm ke mW, loss fiber, panjang kabel', sub:['dBm ke mW','Loss Fiber','Panjang Kabel','Estimasi Material']},
   {id:'qr', title:'QR Scanner', icon:'qr', desc:'Pindai barcode & QR material', sub:['Barcode ONU','SN Modem','QR Material']},
   {id:'monitoringonu', title:'Monitoring ONU', icon:'activity', desc:'Status perangkat pelanggan', sub:['Online','Offline','LOS','Power Rx','Uptime']},
   {id:'petajaringan', title:'Peta Jaringan', icon:'network', desc:'Topologi OLT hingga pelanggan', sub:['OLT','ODP','ODC','Pelanggan','Jalur Fiber']},
 ]},
 {cat:'Inventaris & Pengajuan', items:[
   {id:'inventory', title:'Inventory', icon:'box', built:true, desc:'Stok material teknisi'},
   {id:'pengajuanmaterial', title:'Pengajuan Material', icon:'package', desc:'Ajukan kebutuhan material', sub:['ONU','Dropcore','Fast Connector','Router','Adapter']},
   {id:'pengajuancuti', title:'Pengajuan Cuti', icon:'calendar', desc:'Ajukan cuti / izin', sub:['Pilih tanggal','Alasan','Upload surat']},
 ]},
 {cat:'Tim & Panduan', items:[
   {id:'chat', title:'Chat Internal', icon:'chat', built:true, desc:'Komunikasi dengan tim'},
   {id:'pengingatmaintenance', title:'Pengingat Maintenance', icon:'bell', desc:'Jadwal perawatan rutin', sub:['Bersihkan ODP','Cek Joint Closure','Ganti Connector']},
   {id:'sop', title:'SOP Teknisi', icon:'book', desc:'Panduan & prosedur kerja', sub:['SOP Instalasi','SOP Gangguan','SOP K3','Video Tutorial']},
 ]},
 {cat:'Akun', items:[
   {id:'profil', title:'Profil Teknisi', icon:'user', built:true, desc:'Data diri & sertifikasi'},
   {id:'penghasilan', title:'Penghasilan', icon:'coin', desc:'Target, bonus & insentif', sub:['Target','Bonus','Insentif','Total pekerjaan']},
   {id:'pengaturan', title:'Pengaturan', icon:'settings', built:true, desc:'Preferensi aplikasi'},
 ]},
];
const FEATURE_INDEX = {};
FEATURES.forEach(c=>c.items.forEach(i=>FEATURE_INDEX[i.id]=i));

/* ============================================================
   NAV ENGINE
============================================================ */
const TABS = [
 {id:'dashboard', label:'Beranda', icon:'home'},
 {id:'jadwal', label:'Jadwal', icon:'calendar'},
 {id:'menu', label:'Menu', icon:'grid'},
 {id:'chat', label:'Chat', icon:'chat'},
 {id:'profil', label:'Profil', icon:'user'},
];
let navStack = ['dashboard'];

function renderBottomNav(){
  const el = document.getElementById('bottomnav');
  el.innerHTML = TABS.map(t=>`
    <button class="navbtn ${navStack[0]===t.id && navStack.length===1 ? 'active':''}" onclick="openTab('${t.id}')">
      ${ICO[t.icon]}<span>${t.label}</span>
    </button>`).join('');
}

function openTab(id){ navStack=[id]; render(); }
function openScreen(id){ navStack.push(id); render(); }
function goBack(){ if(navStack.length>1){ navStack.pop(); render(); } }

const TITLES = {
  dashboard:['WhusNet','Technician', true],
  jadwal:['Jadwal Teknisi','Rencana kerja hari ini'],
  menu:['Semua Fitur','26 modul aplikasi'],
  chat:['Chat Internal','Tim & SPV'],
  profil:['Profil Teknisi','Data & sertifikasi'],
  pelanggan:['Data Pelanggan','Cari & kelola pelanggan'],
  custdetail:['Detail Pelanggan',''],
  speedtest:['Speed Test','Uji kecepatan koneksi'],
  optical:['Optical Power Calc.','Hitung redaman jalur'],
  odp:['Perhitungan ODP','Kapasitas port'],
  checklist:['Checklist Instalasi','Verifikasi kelengkapan'],
  inventory:['Inventory','Stok material'],
  pengaturan:['Pengaturan','Preferensi aplikasi'],
  feature:['','']
};

function render(){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  const cur = navStack[navStack.length-1];
  document.getElementById('screen-'+cur).classList.add('active');
  document.getElementById('backBtn').style.display = navStack.length>1 ? 'flex' : 'none';
  document.getElementById('backBtn').innerHTML = ICO.chevleft;
  document.getElementById('brandmark').style.display = (cur==='dashboard') ? 'flex' : 'none';
  document.getElementById('appbarAction').style.display = 'none';
  document.getElementById('appbarAction').onclick = null;

  let t = TITLES[cur] || ['',''];
  if(cur==='feature'){
    const f = FEATURE_INDEX[currentFeature];
    t = [f.title, f.desc];
  }
  if(cur==='custdetail'){
    t = [currentCustomer.name, currentCustomer.paket];
  }
  document.getElementById('appbarTitle').textContent = t[0];
  document.getElementById('appbarSub').textContent = t[1];

  if(cur==='pengaturan'){
    document.getElementById('appbarAction').style.display='flex';
    document.getElementById('appbarAction').innerHTML = ICO.close;
    document.getElementById('appbarAction').onclick = ()=>openTab('dashboard');
  }

  renderBottomNav();
  window.scrollTo(0,0);
}

/* ============================================================
   SCREEN BUILDERS
============================================================ */
const screensEl = document.getElementById('screens');
function addScreen(id, html){
  const s = document.createElement('div');
  s.className='screen'; s.id='screen-'+id; s.innerHTML=html;
  screensEl.appendChild(s);
}

/* ---------- DASHBOARD ---------- */
const initials = n => n.split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase();
const priColor = p => p==='tinggi'?'bad':p==='sedang'?'warn':'good';
const typeColor = t => t==='Gangguan'?'bad':t==='Instalasi'?'good':'warn';

addScreen('dashboard', `
  <div class="greet-row">
    <div>
      <h1>Selamat pagi, Dedi</h1>
      <p>Selasa, 4 Agustus 2026</p>
    </div>
    <div class="weather-chip">${ICO.cloud}<span>29°C</span></div>
  </div>

  <div class="net-status">
    <div class="dot good pulse"></div>
    <div class="txt"><b>Jaringan Perusahaan: Online</b><span>Semua layanan backend normal</span></div>
  </div>

  <div class="stat-grid">
    <div class="stat-card"><div class="num">4</div><div class="lbl">Instalasi selesai</div></div>
    <div class="stat-card"><div class="num">2</div><div class="lbl">Gangguan selesai</div></div>
  </div>

  <div class="next-card">
    <div class="top">
      <div><div class="name">Budi Santoso</div><div class="addr">Jl. Melati No. 12, Kartoharjo</div></div>
      <span class="pill warn">Maintenance</span>
    </div>
    <div class="meta">
      <div><b>13:30</b>Jadwal berikutnya</div>
      <div><b>3.2 km</b>Jarak lokasi</div>
      <div><b>30 mnt</b>Estimasi</div>
    </div>
    <a class="btn primary" href="https://www.google.com/maps?q=-7.6298,111.5239" target="_blank" style="text-decoration:none;">${ICO.map} Buka Rute</a>
  </div>

  <div class="section-title">Alat Cepat</div>
  <div class="quick-row">
    <div class="quick-item" onclick="openScreen('speedtest')"><div class="ic">${ICO.gauge}</div><span>Speed Test</span></div>
    <div class="quick-item" onclick="openScreen('optical')"><div class="ic">${ICO.zap}</div><span>Kalkulator Optik</span></div>
    <div class="quick-item" onclick="openScreen('checklist')"><div class="ic">${ICO.check}</div><span>Checklist</span></div>
    <div class="quick-item" onclick="openFeature('qr')"><div class="ic">${ICO.qr}</div><span>Scan QR</span></div>
  </div>

  <div class="section-title">Pelanggan Terdekat</div>
  <div class="card" style="padding:6px 16px;">
    ${CUSTOMERS.slice(0,3).map((c,i)=>`
      <div class="mini-cust">
        <div class="av">${initials(c.name)}</div>
        <div class="info"><b>${c.name}</b><span>${c.alamat}</span></div>
        <div class="dist">${(1.1+i*0.9).toFixed(1)} km</div>
      </div>`).join('')}
  </div>
`);

/* ---------- JADWAL ---------- */
addScreen('jadwal', `
  <div class="seg">
    <button class="active">Hari Ini</button>
    <button onclick="toast('Tampilan kalender bulanan — segera hadir')">Kalender</button>
  </div>
  <div class="card">
    ${SCHEDULE.map(j=>`
      <div class="job-card">
        <div class="job-time"><b>${j.time}</b><span>WIB</span></div>
        <div class="job-line"><i></i></div>
        <div class="job-body">
          <div class="top"><b>${j.name}</b><span class="pill ${typeColor(j.type)}">${j.type}</span></div>
          <div class="addr">${j.alamat} · Estimasi ${j.estimasi}</div>
          <div class="job-tags"><span class="pill ${priColor(j.priority)}">Prioritas ${j.priority}</span><span class="pill neutral">🔔 Reminder aktif</span></div>
        </div>
      </div>`).join('')}
  </div>
`);

/* ---------- DATA PELANGGAN ---------- */
addScreen('pelanggan', `
  <div class="search-wrap">${ICO.search}<input class="input" id="custSearch" placeholder="Cari nama pelanggan..." oninput="renderCustList()"></div>
  <div class="card" style="padding:2px 16px;" id="custList"></div>
`);
function statusDot(s){ return s==='aktif' ? '<span class="dot good"></span>' : '<span class="dot bad"></span>'; }
function renderCustList(){
  const q = (document.getElementById('custSearch').value||'').toLowerCase();
  const filtered = CUSTOMERS.filter(c=>c.name.toLowerCase().includes(q));
  const el = document.getElementById('custList');
  el.innerHTML = filtered.length ? filtered.map((c,i)=>`
    <div class="cust-row" onclick="openCustomer(${CUSTOMERS.indexOf(c)})">
      <div class="av">${initials(c.name)}</div>
      <div class="info"><b>${c.name}</b><span>${statusDot(c.status)} &nbsp;${c.paket}</span></div>
      ${ICO.chevright.replace('<svg ','<svg class="chev" ')}
    </div>`).join('') : `<div class="empty-note">Tidak ada pelanggan yang cocok dengan pencarian.</div>`;
}
let currentCustomer = CUSTOMERS[0];
function openCustomer(idx){
  currentCustomer = CUSTOMERS[idx];
  renderCustDetail();
  openScreen('custdetail');
}
addScreen('custdetail', `<div id="custDetailBody"></div>`);
function renderCustDetail(){
  const c = currentCustomer;
  document.getElementById('custDetailBody').innerHTML = `
    <div class="detail-hero">
      <div class="av">${initials(c.name)}</div>
      <div><h2>${c.name}</h2><p>${c.status==='aktif'?'Status: Aktif':'Status: Ada gangguan'}</p></div>
    </div>
    <div class="card">
      <div class="info-row"><span class="k">Nomor HP</span><span class="v">${c.phone}</span></div>
      <div class="info-row"><span class="k">Paket internet</span><span class="v">${c.paket}</span></div>
      <div class="info-row"><span class="k">Alamat</span><span class="v">${c.alamat}</span></div>
      <div class="info-row"><span class="k">Koordinat</span><a class="v link-row" style="text-decoration:none" href="https://www.google.com/maps?q=${c.koor.replace(' ','')}" target="_blank">${c.koor} ↗</a></div>
    </div>
    <div class="section-title">Riwayat Gangguan</div>
    <div class="card">
      ${c.riwayat.length ? c.riwayat.map(r=>`<div class="hist-row"><div class="b"></div><span>${r}</span></div>`).join('') : '<div class="empty-note">Belum ada riwayat gangguan tercatat.</div>'}
    </div>
    <div class="section-title">Catatan Teknisi</div>
    <div class="field"><textarea class="input" placeholder="Tulis catatan kunjungan di sini...">${c.catatan||''}</textarea></div>
    <button class="btn primary" style="width:100%;" onclick="toast('Catatan tersimpan')">Simpan Catatan</button>
  `;
}

/* ---------- SPEED TEST ---------- */
addScreen('speedtest', `
  <div class="st-ring-wrap"><div class="st-ring" id="stRing" style="background:conic-gradient(var(--accent) 0deg, var(--surface-2) 0deg);">
    <div class="hole"><div class="v" id="stMain">—</div><div class="u">Mbps Download</div><div class="s" id="stStatus">Tekan mulai untuk menguji</div></div>
  </div></div>
  <button class="btn primary" style="width:100%;" id="stBtn" onclick="runSpeedtest()">${ICO.gauge} Mulai Test</button>
  <div class="st-mini-grid">
    <div class="st-mini"><div class="n" id="stUp">—</div><div class="l">Upload Mbps</div></div>
    <div class="st-mini"><div class="n" id="stPing">—</div><div class="l">Ping ms</div></div>
    <div class="st-mini"><div class="n" id="stJitter">—</div><div class="l">Jitter ms</div></div>
  </div>
  <div class="st-meta"><span>Server: Madiun-01</span><span>ISP: WhusNet Fiber</span></div>
  <div class="section-title">Riwayat Hasil</div>
  <div class="card" id="stHistory"></div>
  <button class="btn ghost" style="width:100%; margin-top:12px;" onclick="toast('Menyiapkan PDF hasil speedtest...')">${ICO.doc} Export PDF</button>
`);
function renderStHistory(){
  document.getElementById('stHistory').innerHTML = SPEED_HISTORY.map(h=>`
    <div class="hist-item"><div><b>${h.down}</b> / ${h.up} Mbps<div class="d">${h.d}</div></div><span class="pill neutral mono">${h.ping} ms</span></div>
  `).join('');
}
let stRunning = false;
function runSpeedtest(){
  if(stRunning) return;
  stRunning = true;
  const btn = document.getElementById('stBtn');
  btn.textContent = 'Menguji...'; btn.disabled = true;
  const ring = document.getElementById('stRing');
  const main = document.getElementById('stMain');
  const status = document.getElementById('stStatus');
  const upEl = document.getElementById('stUp'), pingEl = document.getElementById('stPing'), jitEl = document.getElementById('stJitter');
  status.textContent = 'Mengukur ping...';
  let progress = 0;
  const finalDown = (60 + Math.random()*220).toFixed(1);
  const finalUp = (15 + Math.random()*80).toFixed(1);
  const finalPing = Math.round(3+Math.random()*12);
  const finalJitter = (Math.random()*2.5).toFixed(1);
  pingEl.textContent = finalPing; jitEl.textContent = finalJitter;
  const iv = setInterval(()=>{
    progress += 5;
    const deg = Math.min(360, progress/100*360);
    const curVal = (finalDown * Math.min(1,progress/100)).toFixed(1);
    ring.style.background = `conic-gradient(var(--accent) ${deg}deg, var(--surface-2) ${deg}deg)`;
    main.textContent = curVal;
    status.textContent = progress<50 ? 'Mengukur download...' : (progress<100?'Mengukur upload...':'Selesai');
    upEl.textContent = progress>=50 ? (finalUp*Math.min(1,(progress-50)/50)).toFixed(1) : '—';
    if(progress>=100){
      clearInterval(iv);
      main.textContent = finalDown;
      upEl.textContent = finalUp;
      status.textContent = 'Tes selesai';
      btn.textContent = 'Ulangi Test'; btn.disabled = false;
      SPEED_HISTORY.unshift({d:'Baru saja', down:finalDown, up:finalUp, ping:finalPing});
      renderStHistory();
      stRunning = false;
    }
  }, 100);
}

/* ---------- OPTICAL POWER CALCULATOR ---------- */
addScreen('optical', `
  <div class="card">
    <div class="field"><label>Tx Power (dBm)</label><input class="input" type="number" step="0.1" id="opTx" value="-7" oninput="calcOptical()"></div>
    <div class="row">
      <div class="field"><label>Jumlah Connector</label><input class="input" type="number" min="0" id="opConn" value="2" oninput="calcOptical()"></div>
      <div class="field"><label>Splitter</label>
        <select class="input" id="opSplit" onchange="calcOptical()">
          <option value="0">Tidak ada</option>
          <option value="3.5">1:2 (3.5 dB)</option>
          <option value="7" selected>1:4 (7.0 dB)</option>
          <option value="10.5">1:8 (10.5 dB)</option>
          <option value="14">1:16 (14.0 dB)</option>
          <option value="17.5">1:32 (17.5 dB)</option>
        </select>
      </div>
    </div>
  </div>
  <div class="result-box">
    <div class="lbl">Rx Power Estimasi</div>
    <div class="big" id="opRx" style="color:var(--accent);">—</div>
    <span class="pill good" id="opStatus">Normal</span>
    <div class="power-scale"><div class="marker" id="opMarker" style="left:50%;"></div></div>
    <div class="scale-labels"><span>-30</span><span>-27</span><span>-8</span><span>0 dBm</span></div>
    <div class="res-mini-row">
      <div class="res-mini"><div class="n" id="opConnLoss">—</div><div class="l">Loss Connector</div></div>
      <div class="res-mini"><div class="n" id="opSplitLoss">—</div><div class="l">Loss Splitter</div></div>
      <div class="res-mini"><div class="n" id="opTotalLoss">—</div><div class="l">Total Redaman</div></div>
    </div>
  </div>
  <div class="empty-note">Standar redaman ideal GPON: Rx antara -8 dBm hingga -27 dBm. Loss connector diasumsikan 0.5 dB per titik.</div>
`);
function calcOptical(){
  const tx = parseFloat(document.getElementById('opTx').value)||0;
  const conn = parseFloat(document.getElementById('opConn').value)||0;
  const split = parseFloat(document.getElementById('opSplit').value)||0;
  const connLoss = conn*0.5;
  const totalLoss = connLoss+split;
  const rx = tx-totalLoss;
  document.getElementById('opConnLoss').textContent = connLoss.toFixed(1)+' dB';
  document.getElementById('opSplitLoss').textContent = split.toFixed(1)+' dB';
  document.getElementById('opTotalLoss').textContent = totalLoss.toFixed(1)+' dB';
  document.getElementById('opRx').textContent = rx.toFixed(1)+' dBm';
  const statusEl = document.getElementById('opStatus');
  let normal = rx <= -8 && rx >= -27;
  let warning = !normal && rx <= -6 && rx >= -29;
  if(normal){ statusEl.className='pill good'; statusEl.textContent='Normal'; }
  else if(warning){ statusEl.className='pill warn'; statusEl.textContent='Mendekati batas'; }
  else { statusEl.className='pill bad'; statusEl.textContent='Tidak Normal'; }
  const pct = Math.min(100, Math.max(0, ((rx+30)/30)*100));
  document.getElementById('opMarker').style.left = pct+'%';
}

/* ---------- PERHITUNGAN ODP ---------- */
addScreen('odp', `
  <div class="card">
    <div class="row">
      <div class="field"><label>Jumlah Port</label>
        <select class="input" id="odpTotal" onchange="calcOdp()">
          <option value="8">8 Port</option>
          <option value="16" selected>16 Port</option>
          <option value="24">24 Port</option>
        </select>
      </div>
      <div class="field"><label>Port Terpakai</label><input class="input" type="number" min="0" id="odpUsed" value="11" oninput="calcOdp()"></div>
    </div>
  </div>
  <div class="donut-wrap"><div class="donut" id="odpDonut"><div class="hole"><b id="odpPct">—</b><span>TERPAKAI</span></div></div></div>
  <div class="res-mini-row">
    <div class="res-mini"><div class="n" id="odpTotalOut">—</div><div class="l">Total Port</div></div>
    <div class="res-mini"><div class="n" id="odpUsedOut">—</div><div class="l">Terpakai</div></div>
    <div class="res-mini"><div class="n" id="odpFreeOut">—</div><div class="l">Kosong</div></div>
  </div>
`);
function calcOdp(){
  const total = parseInt(document.getElementById('odpTotal').value);
  let used = parseInt(document.getElementById('odpUsed').value)||0;
  used = Math.min(used, total);
  document.getElementById('odpUsed').value = used;
  const free = total-used;
  const pct = Math.round((used/total)*100);
  const color = pct>90?'var(--bad)':pct>70?'var(--warn)':'var(--good)';
  document.getElementById('odpDonut').style.background = `conic-gradient(${color} ${pct*3.6}deg, var(--surface-2) 0deg)`;
  document.getElementById('odpPct').textContent = pct+'%';
  document.getElementById('odpPct').style.color = color;
  document.getElementById('odpTotalOut').textContent = total;
  document.getElementById('odpUsedOut').textContent = used;
  document.getElementById('odpFreeOut').textContent = free;
}

/* ---------- CHECKLIST ---------- */
addScreen('checklist', `
  <div class="progress-track"><div class="progress-fill" id="chkFill"></div></div>
  <div class="card" style="padding:2px 16px;" id="chkList"></div>
  <button class="btn primary" style="width:100%; margin-top:18px;" id="chkFinish" disabled onclick="finishChecklist()">Selesaikan Instalasi</button>
`);
function renderChecklist(){
  document.getElementById('chkList').innerHTML = CHECKLIST_ITEMS.map((label,i)=>`
    <div class="chk-item ${checkState[i]?'checked':''}" onclick="toggleCheck(${i})">
      <div class="chk-box">${ICO.check.replace('viewBox="0 0 24 24"','viewBox="0 0 24 24" style="stroke-width:2.5"')}</div>
      <span>${label}</span>
    </div>`).join('');
  const done = checkState.filter(Boolean).length;
  document.getElementById('chkFill').style.width = (done/CHECKLIST_ITEMS.length*100)+'%';
  document.getElementById('chkFinish').disabled = done < CHECKLIST_ITEMS.length;
  document.getElementById('chkFinish').textContent = done < CHECKLIST_ITEMS.length ? `Selesaikan Instalasi (${done}/${CHECKLIST_ITEMS.length})` : 'Selesaikan Instalasi';
}
function toggleCheck(i){ checkState[i] = !checkState[i]; renderChecklist(); }
function finishChecklist(){ toast('Instalasi tercatat selesai ✓'); }

/* ---------- INVENTORY ---------- */
addScreen('inventory', `
  <div class="card" style="padding:2px 16px;">
    ${INVENTORY.map(it=>{
      const pct = Math.round(it.stock/it.max*100);
      const low = pct<15;
      return `<div class="inv-row">
        <div class="inv-top"><b>${it.name}</b><span class="qty">${it.stock} ${it.unit}${low?' · <span style=\"color:var(--bad)\">stok menipis</span>':''}</span></div>
        <div class="inv-bar ${low?'low':''}"><i style="width:${pct}%;"></i></div>
      </div>`;
    }).join('')}
  </div>
  <div class="empty-note">Stok otomatis berkurang setiap material digunakan pada laporan instalasi atau gangguan.</div>
`);

/* ---------- PROFIL ---------- */
addScreen('profil', `
  <div class="profile-hero">
    <div class="av">DA</div>
    <h2>Dedi Ariyanto</h2>
    <p>ID Teknisi: WN-2214 · Divisi Instalasi &amp; Maintenance</p>
    <div class="badge-row"><span class="chip">Sertifikat FTTH</span><span class="chip">Sertifikat K3</span><span class="chip">Splicing Pro</span></div>
  </div>
  <div class="card">
    <div class="info-row"><span class="k">Nomor HP</span><span class="v">0813-2299-1177</span></div>
    <div class="info-row"><span class="k">Divisi</span><span class="v">Instalasi &amp; Maintenance</span></div>
    <div class="info-row"><span class="k">Masa kerja</span><span class="v">3 tahun 2 bulan</span></div>
  </div>
  <div class="section-title">Lainnya</div>
  <div class="card" style="padding:2px 16px;">
    <div class="cust-row" onclick="openFeature('penghasilan')"><div class="av" style="color:var(--accent);">${ICO.coin}</div><div class="info"><b>Penghasilan</b><span>Target, bonus & insentif</span></div>${ICO.chevright.replace('<svg ','<svg class="chev" ')}</div>
    <div class="cust-row" onclick="openFeature('pengajuancuti')"><div class="av" style="color:var(--accent);">${ICO.calendar}</div><div class="info"><b>Pengajuan Cuti</b><span>Ajukan cuti / izin</span></div>${ICO.chevright.replace('<svg ','<svg class="chev" ')}</div>
    <div class="cust-row" onclick="openScreen('pengaturan')"><div class="av" style="color:var(--accent);">${ICO.settings}</div><div class="info"><b>Pengaturan</b><span>Preferensi aplikasi</span></div>${ICO.chevright.replace('<svg ','<svg class="chev" ')}</div>
  </div>
`);

/* ---------- PENGATURAN ---------- */
addScreen('pengaturan', `
  <div class="card" style="padding:2px 16px;">
    <div class="set-row"><div class="icon-chip" style="width:32px;height:32px;border-radius:9px;">${ICO.moon}</div><div class="txt"><b>Mode Gelap</b><span>Nyaman untuk kerja luar ruangan</span></div><div class="switch on" id="darkSwitch" onclick="toggleDark()"></div></div>
    <div class="set-row"><div class="icon-chip" style="width:32px;height:32px;border-radius:9px;">🌐</div><div class="txt"><b>Bahasa</b><span>Indonesia</span></div>
      <select class="input" style="width:110px; height:38px;"><option>Indonesia</option><option>English</option></select>
    </div>
    <div class="set-row"><div class="icon-chip" style="width:32px;height:32px;border-radius:9px;">${ICO.sync}</div><div class="txt"><b>Sinkronisasi</b><span id="syncLabel">Terakhir sync: 2 menit lalu</span></div>
      <button class="btn ghost" style="height:38px; padding:0 12px;" onclick="doSync()">Sync</button>
    </div>
    <div class="set-row"><div class="icon-chip" style="width:32px;height:32px;border-radius:9px;">${ICO.box}</div><div class="txt"><b>Backup Data</b><span>Cadangkan data lokal ke server</span></div>
      <button class="btn ghost" style="height:38px; padding:0 12px;" onclick="toast('Backup data dimulai')">Backup</button>
    </div>
  </div>
  <button class="btn danger" style="width:100%; margin-top:20px;" onclick="toast('Sesi teknisi diakhiri')">Logout</button>
`);
function toggleDark(){
  document.documentElement.classList.toggle('light');
  document.getElementById('darkSwitch').classList.toggle('on');
}
function doSync(){
  document.getElementById('syncLabel').textContent = 'Menyinkronkan...';
  setTimeout(()=>{ document.getElementById('syncLabel').textContent = 'Terakhir sync: baru saja'; }, 900);
}

/* ---------- CHAT ---------- */
addScreen('chat', `
  <div class="chat-scroll" id="chatScroll">
    <div class="bubble them">Pak Dedi, tolong prioritaskan gangguan di Jl. Kenanga dulu ya, pelanggan sudah komplain 2x.<div class="bubble-meta">SPV Area — 08:12</div></div>
    <div class="bubble me">Siap Pak, saya ke sana setelah instalasi di Diponegoro selesai.<div class="bubble-meta">Anda — 08:14</div></div>
    <div class="bubble them">Oke, kirim foto redaman kalau sudah sampai.<div class="bubble-meta">SPV Area — 08:15</div></div>
  </div>
  <div style="height:64px;"></div>
  <div class="chat-inputbar">
    <input class="input" id="chatInput" placeholder="Tulis pesan..." onkeydown="if(event.key==='Enter')sendChat()">
    <button onclick="sendChat()">${ICO.send}</button>
  </div>
`);
function sendChat(){
  const inp = document.getElementById('chatInput');
  const txt = inp.value.trim();
  if(!txt) return;
  const scroll = document.getElementById('chatScroll');
  const time = new Date().toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'});
  scroll.insertAdjacentHTML('beforeend', `<div class="bubble me">${txt}<div class="bubble-meta">Anda — ${time}</div></div>`);
  inp.value='';
  scroll.scrollTop = scroll.scrollHeight;
  setTimeout(()=>{
    scroll.insertAdjacentHTML('beforeend', `<div class="bubble them">Diterima, lanjutkan ya.<div class="bubble-meta">SPV Area — ${time}</div></div>`);
    scroll.scrollTop = scroll.scrollHeight;
  }, 1000);
}

/* ---------- MENU (grid semua fitur) ---------- */
addScreen('menu', `
  <div class="search-wrap">${ICO.search}<input class="input" id="menuSearch" placeholder="Cari fitur..." oninput="renderMenu()"></div>
  <div id="menuBody"></div>
`);
function renderMenu(){
  const q = (document.getElementById('menuSearch').value||'').toLowerCase();
  const body = document.getElementById('menuBody');
  body.innerHTML = FEATURES.map(cat=>{
    const items = cat.items.filter(i=>i.title.toLowerCase().includes(q));
    if(!items.length) return '';
    return `<div class="cat-block"><div class="section-title">${cat.cat}</div><div class="feat-grid">
      ${items.map(i=>`
        <div class="feat-card" onclick="${i.built?`openScreen('${i.id}')`:`openFeature('${i.id}')`}">
          <div class="ic">${ICO[i.icon]}</div>
          <b>${i.title}</b>
        </div>`).join('')}
    </div></div>`;
  }).join('') || `<div class="empty-note">Tidak ada fitur yang cocok.</div>`;
}

/* ---------- GENERIC FEATURE SCREEN ---------- */
addScreen('feature', `<div id="featureBody"></div>`);
let currentFeature = null;
function openFeature(id){
  currentFeature = id;
  renderFeature();
  openScreen('feature');
}
function renderFeature(){
  const f = FEATURE_INDEX[currentFeature];
  let extra = '';
  if(f.id==='qr'){
    extra = `<div class="qr-frame"><i></i><i></i><i></i><i></i><div class="scanline"></div></div><div class="empty-note">Arahkan kamera ke barcode ONU, SN modem, atau QR material.</div>`;
  } else if(f.id==='kalkulatorteknisi'){
    extra = `<div class="card">
      <div class="field"><label>dBm</label><input class="input" type="number" id="dbmIn" value="-15" oninput="calcDbm()"></div>
      <div class="result-box"><div class="lbl">Setara Daya</div><div class="big" id="mwOut" style="color:var(--accent);">—</div></div>
    </div>`;
  } else if(f.id==='monitoringonu'){
    const devices = [
      {name:'ONU — Budi Santoso', s:'online', rx:'-19.2 dBm', up:'12h 40m'},
      {name:'ONU — Siti Aminah', s:'los', rx:'—', up:'0m'},
      {name:'ONU — Warkop Setia Kawan', s:'online', rx:'-21.5 dBm', up:'3d 4h'},
      {name:'ONU — Rudi Hartono', s:'offline', rx:'—', up:'1h 12m lalu'},
    ];
    extra = `<div class="card" style="padding:2px 16px;">${devices.map(d=>`
      <div class="net-node">
        <div class="dot ${d.s==='online'?'good':d.s==='los'?'bad':'warn'} ${d.s==='online'?'pulse':''}"></div>
        <div style="flex:1;"><b style="display:block;">${d.name}</b><span style="color:var(--text-faint); font-size:11px;">Rx ${d.rx} · Uptime ${d.up}</span></div>
        <span class="pill ${d.s==='online'?'good':d.s==='los'?'bad':'warn'}">${d.s==='online'?'Online':d.s==='los'?'LOS':'Offline'}</span>
      </div>`).join('')}</div>`;
  } else if(f.id==='petajaringan'){
    extra = `<div class="card" style="padding:2px 16px;">
      <div class="net-node"><div class="sq" style="background:var(--accent-dim); color:var(--accent);">OLT</div><div style="flex:1;"><b>OLT Madiun-Core-01</b><br><span style="color:var(--text-faint);">128 port aktif</span></div><span class="dot good"></span></div>
      <div class="net-node"><div class="sq" style="background:var(--warn-dim); color:var(--warn);">ODC</div><div style="flex:1;"><b>ODC Kartoharjo-04</b><br><span style="color:var(--text-faint);">Kapasitas 288 core</span></div><span class="dot good"></span></div>
      <div class="net-node"><div class="sq" style="background:var(--surface-3); color:var(--text-dim);">ODP</div><div style="flex:1;"><b>ODP-KRT-021</b><br><span style="color:var(--text-faint);">11/16 port terpakai</span></div><span class="dot warn"></span></div>
      <div class="net-node"><div class="sq" style="background:var(--good-dim); color:var(--good);">PLG</div><div style="flex:1;"><b>5 pelanggan aktif</b><br><span style="color:var(--text-faint);">Terhubung ke ODP-KRT-021</span></div><span class="dot good"></span></div>
    </div>`;
  }
  document.getElementById('featureBody').innerHTML = `
    <div class="gen-hero"><div class="ic">${ICO[f.icon]}</div><div><h2>${f.title}</h2><p>${f.desc}</p></div></div>
    ${extra}
    ${f.sub ? `<div class="section-title">Komponen Modul</div><div class="card" style="padding:2px 16px;">
      ${f.sub.map((s,i)=>`<div class="sub-row"><div class="n">${String(i+1).padStart(2,'0')}</div><span>${s}</span></div>`).join('')}
    </div>` : ''}
    ${!f.sub && !extra ? `<div class="empty-note">Modul ini akan ditampilkan lebih rinci di iterasi berikutnya.</div>` : ''}
  `;
  if(f.id==='kalkulatorteknisi') calcDbm();
}
function calcDbm(){
  const el = document.getElementById('dbmIn');
  if(!el) return;
  const dbm = parseFloat(el.value)||0;
  const mw = Math.pow(10, dbm/10);
  document.getElementById('mwOut').textContent = (mw<0.01? mw.toExponential(2) : mw.toFixed(3))+' mW';
}

/* ============================================================
   TOAST
============================================================ */
function toast(msg){
  let t = document.getElementById('toastEl');
  if(!t){
    t = document.createElement('div');
    t.id='toastEl';
    t.style.cssText = 'position:absolute; left:20px; right:20px; bottom:98px; background:var(--surface-3); color:var(--text); font-size:12.5px; font-weight:600; padding:12px 16px; border-radius:12px; text-align:center; z-index:100; box-shadow:0 10px 30px rgba(0,0,0,.4); border:1px solid var(--border); opacity:0; transition:opacity .25s;';
    document.getElementById('device').appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(()=>{ t.style.opacity='0'; }, 1900);
}

/* ============================================================
   INIT
============================================================ */
renderCustList();
renderStHistory();
renderChecklist();
renderMenu();
render();

function tickClock(){
  document.getElementById('clock').textContent = new Date().toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'});
}
tickClock();
setInterval(tickClock, 30000);

