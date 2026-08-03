// --- 1. Navigasi ---
function switchMainTab(tabId, element, title) {
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
    
    document.querySelectorAll('.view-pane').forEach(el => el.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');

    document.getElementById('top-normal').style.display = 'flex';
    document.getElementById('top-module').style.display = 'none';
    document.getElementById('btn-back').style.display = 'none';
}

function openModule(moduleId, moduleTitle) {
    const targetModule = document.getElementById(moduleId);
    if (!targetModule) return;

    document.querySelectorAll('.view-pane').forEach(el => el.classList.remove('active'));
    targetModule.classList.add('active');
    document.getElementById('bottom-nav').classList.add('hide');

    document.getElementById('top-normal').style.display = 'none';
    document.getElementById('top-module').style.display = 'flex';
    document.getElementById('module-title').innerText = moduleTitle;
    document.getElementById('btn-back').style.display = 'block';

    if (moduleId === 'modul-lap-instalasi') { setTimeout(resizeCanvas, 50); }
}

function goBackToMenu() {
    document.querySelectorAll('.view-pane').forEach(el => el.classList.remove('active'));
    document.getElementById('tab-tools').classList.add('active');
    document.getElementById('bottom-nav').classList.remove('hide');

    document.getElementById('top-normal').style.display = 'flex';
    document.getElementById('top-module').style.display = 'none';
    document.getElementById('btn-back').style.display = 'none';
    
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    document.getElementById('nav-alat').classList.add('active');
}

// --- 2. OPM Calculator ---
function calculateOPM() {
    const tx = parseFloat(document.getElementById('tx-power').value) || 0;
    const split = parseFloat(document.getElementById('splitter').value) || 0;
    const cab = parseFloat(document.getElementById('cable-len').value) || 0;
    const sp = parseInt(document.getElementById('splice-count').value) || 0;
    const con = parseInt(document.getElementById('connector-count').value) || 0;

    const totalLoss = split + ((cab/1000)*0.35) + (sp*0.1) + (con*0.25);
    const rx = tx - totalLoss;

    document.getElementById('res-rx').innerText = rx.toFixed(2);
    const box = document.getElementById('result-box');
    box.style.display = 'block'; box.className = 'result-box';

    if(rx >= -24) { box.classList.add('normal'); } 
    else if(rx < -24 && rx >= -27) { box.classList.add('warning'); } 
    else { box.classList.add('danger'); }
}

// --- 3. Speed Test ---
const meterProgress = document.getElementById('meter-progress');
if(meterProgress) { meterProgress.style.strokeDasharray = 345.5; meterProgress.style.strokeDashoffset = 345.5; }

function startRealTest() {
    const btn = document.getElementById('start-btn');
    btn.innerText = "TESTING"; btn.disabled = true;
    
    setTimeout(() => {
        document.getElementById('val-ping').innerText = "15";
        document.getElementById('val-jitter').innerText = "2";
        document.getElementById('val-dl').innerText = "45.20";
        document.getElementById('val-ul').innerText = "12.50";
        btn.innerText = "ULANGI"; btn.disabled = false;
        if(meterProgress) meterProgress.style.strokeDashoffset = 200;
    }, 2000);
}

// --- 4. Perhitungan ODP ---
function calculateODP() {
    const total = parseInt(document.getElementById('odp-total').value) || 8;
    const used = parseInt(document.getElementById('odp-used').value) || 0;
    const perc = (used/total)*100;
    
    document.getElementById('odp-percent').innerText = Math.round(perc);
    document.getElementById('odp-result-box').style.display = 'block';
}

// --- 5. Checklist ---
function updateChecklist() {
    const chk = document.querySelectorAll('.chk-item');
    let cnt = 0; chk.forEach(c => { if(c.checked) cnt++; });
    const perc = (cnt/chk.length)*100;
    document.getElementById('checklist-text').innerText = `${cnt}/${chk.length} Selesai`;
    document.getElementById('checklist-bar').style.width = `${perc}%`;
}
function saveChecklist() { alert('Tersimpan!'); goBackToMenu(); }

// --- 6. Pelanggan ---
function searchCustomer() {
    document.getElementById('loading-cust').style.display = 'block';
    document.getElementById('customer-result').style.display = 'none';
    setTimeout(() => {
        document.getElementById('loading-cust').style.display = 'none';
        document.getElementById('customer-result').style.display = 'block';
    }, 1000);
}

// --- 7. Profil ---
function previewProfileImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        document.getElementById('profile-img-preview').src = reader.result;
        const topAv = document.getElementById('top-avatar-container');
        topAv.innerHTML = `<img src="${reader.result}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">`;
        topAv.style.background = 'transparent';
    }
    if(event.target.files[0]) reader.readAsDataURL(event.target.files[0]);
}
function saveProfile() {
    const name = document.getElementById('input-profile-name').value;
    document.getElementById('profile-display-name').innerText = name;
    document.getElementById('top-bar-name').innerText = name;
    alert('Profil disimpan');
}
function logoutApp() {
    if(confirm("Yakin keluar?")) document.body.innerHTML = `<div style="padding:50px; text-align:center;"><h2>Logout Berhasil</h2></div>`;
}

// --- 8. Laporan Instalasi (Foto & TTD) ---
function previewInstPhoto(event, imgId, placeholderId) {
    const reader = new FileReader();
    reader.onload = function() {
        document.getElementById(imgId).src = reader.result;
        document.getElementById(imgId).style.display = 'block';
        document.getElementById(placeholderId).style.display = 'none';
    }
    if(event.target.files[0]) reader.readAsDataURL(event.target.files[0]);
}

const canvas = document.getElementById('signature-pad');
const ctx = canvas ? canvas.getContext('2d') : null;
let isDrawing = false;

function resizeCanvas() {
    if(!canvas) return;
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    ctx.scale(ratio, ratio);
    ctx.strokeStyle = '#000'; ctx.lineWidth = 2.5; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
}

function startDraw(e) { isDrawing = true; draw(e); }
function endDraw() { isDrawing = false; ctx.beginPath(); }
function draw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left; const y = clientY - rect.top;
    ctx.lineTo(x, y); ctx.stroke(); ctx.beginPath(); ctx.moveTo(x, y);
}

if(canvas) {
    canvas.addEventListener('mousedown', startDraw); canvas.addEventListener('mouseup', endDraw); canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('touchstart', startDraw, {passive: false}); canvas.addEventListener('touchend', endDraw); canvas.addEventListener('touchmove', draw, {passive: false});
}
function clearSignature() { if(ctx) ctx.clearRect(0, 0, canvas.width, canvas.height); }
function submitInstalasi(btn) { btn.innerText="Loading..."; setTimeout(()=>{ alert('Sukses Upload!'); btn.innerText="Upload Laporan"; goBackToMenu(); }, 1000); }
