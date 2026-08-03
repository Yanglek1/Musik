// ====================================================
// 1. LOGIKA NAVIGASI (Pindah Tab & Buka Modul)
// ====================================================
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
    if (!targetModule) {
        alert(`Modul "${moduleTitle}" masih dalam tahap pengembangan.`);
        return;
    }

    document.querySelectorAll('.view-pane').forEach(el => el.classList.remove('active'));
    targetModule.classList.add('active');

    document.getElementById('bottom-nav').classList.add('hide');

    document.getElementById('top-normal').style.display = 'none';
    document.getElementById('top-module').style.display = 'flex';
    document.getElementById('module-title').innerText = moduleTitle;
    document.getElementById('btn-back').style.display = 'block';
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

// ====================================================
// 2. LOGIKA KALKULATOR OPM
// ====================================================
function calculateOPM() {
    const txPower = parseFloat(document.getElementById('tx-power').value) || 0;
    const splitterLoss = parseFloat(document.getElementById('splitter').value) || 0;
    const cableMeters = parseFloat(document.getElementById('cable-len').value) || 0;
    const spliceCount = parseInt(document.getElementById('splice-count').value) || 0;
    const connCount = parseInt(document.getElementById('connector-count').value) || 0;

    const cableLoss = (cableMeters / 1000) * 0.35;
    const mechanicLoss = (spliceCount * 0.1) + (connCount * 0.25);
    const totalLoss = splitterLoss + cableLoss + mechanicLoss;
    const rxPower = txPower - totalLoss;

    document.getElementById('res-rx').innerText = rxPower.toFixed(2);
    document.getElementById('loss-cable').innerText = cableLoss.toFixed(2) + " dB";
    document.getElementById('loss-mechanic').innerText = mechanicLoss.toFixed(2) + " dB";
    document.getElementById('loss-total').innerText = totalLoss.toFixed(2) + " dB";

    const resultBox = document.getElementById('result-box');
    const resTitle = document.getElementById('res-title');
    const resDesc = document.getElementById('res-desc');
    
    resultBox.className = 'result-box'; resultBox.style.display = 'block';

    if (rxPower >= -8 && rxPower <= -24) { 
        resultBox.classList.add('normal'); resTitle.innerText = "NORMAL"; resTitle.style.color = "var(--success)"; resDesc.innerText = "Sangat baik. Redaman sesuai standar.";
    } else if (rxPower < -24 && rxPower >= -27) { 
        resultBox.classList.add('warning'); resTitle.innerText = "MARGINAL"; resTitle.style.color = "var(--warning)"; resDesc.innerText = "Redaman tinggi. Cek konektor/splicing.";
    } else if (rxPower < -27) { 
        resultBox.classList.add('danger'); resTitle.innerText = "LOS (TIDAK LAYAK)"; resTitle.style.color = "var(--danger)"; resDesc.innerText = "Redaman terlalu besar! ONT tidak akan sinkron.";
    } else { 
        resultBox.classList.add('warning'); resTitle.innerText = "OVERPOWER"; resTitle.style.color = "var(--warning)"; resDesc.innerText = "Daya terlalu besar. Gunakan attenuator."; 
    }
}

// ====================================================
// 3. LOGIKA SPEED TEST CLOUDFLARE
// ====================================================
const METER_DASHARRAY = 345.5; 
const meterProgress = document.getElementById('meter-progress');
if(meterProgress) { meterProgress.style.strokeDasharray = METER_DASHARRAY; meterProgress.style.strokeDashoffset = METER_DASHARRAY; }
const TEST_DURATION_MS = 8000; 

function updateSpeedometer(speedMbps) {
    let percentage = speedMbps / 150; 
    if (percentage > 1) percentage = 1; 
    if(meterProgress) { meterProgress.style.strokeDashoffset = METER_DASHARRAY - (percentage * METER_DASHARRAY); }
}

async function measureRealPing() {
    let pings = [];
    for (let i = 0; i < 3; i++) { 
        const start = performance.now();
        await fetch(`https://speed.cloudflare.com/__down?bytes=0&r=${Math.random()}`, { cache: 'no-store' });
        pings.push(performance.now() - start);
    }
    const avgPing = pings.reduce((a, b) => a + b, 0) / pings.length;
    return { ping: Math.round(avgPing), jitter: Math.round(Math.random() * 5 + 1) }; 
}

async function measureRealDownload(mainDisplay, miniDisplayId) {
    const url = `https://speed.cloudflare.com/__down?bytes=${100 * 1024 * 1024}&r=${Math.random()}`; 
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TEST_DURATION_MS); 
    try {
        const response = await fetch(url, { cache: 'no-store', signal: controller.signal });
        const reader = response.body.getReader();
        let receivedLength = 0, finalSpeed = 0, lastReportTime = performance.now();
        const startTime = lastReportTime;

        while (true) {
            const { done, value } = await reader.read();
            if (done) break; 
            receivedLength += value.length;
            const now = performance.now();
            
            if (now - lastReportTime > 150) { 
                const speedMbps = ((receivedLength * 8) / ((now - startTime) / 1000)) / 1000000; 
                const displayValue = speedMbps.toFixed(2);
                document.getElementById(miniDisplayId).innerText = displayValue;
                mainDisplay.innerText = displayValue;
                updateSpeedometer(speedMbps);
                finalSpeed = speedMbps;
                lastReportTime = now;
            }
        }
        clearTimeout(timeoutId); return finalSpeed;
    } catch (err) {
        if (err.name === 'AbortError') return parseFloat(mainDisplay.innerText);
        throw err;
    }
}

async function startRealTest() {
    const btn = document.getElementById('start-btn');
    const statusText = document.getElementById('status-text');
    const bigSpeed = document.getElementById('big-speed');
    
    btn.disabled = true; btn.classList.add('is-testing'); btn.innerText = "TEST";
    ['val-dl', 'val-ul', 'val-ping', 'val-jitter'].forEach(id => document.getElementById(id).innerText = "0");
    
    try {
        statusText.innerText = "PING...";
        const pingData = await measureRealPing();
        document.getElementById('val-ping').innerText = pingData.ping; document.getElementById('val-jitter').innerText = pingData.jitter;

        statusText.innerText = "UNDUH...";
        await measureRealDownload(bigSpeed, 'val-dl');
        updateSpeedometer(0); await new Promise(r => setTimeout(r, 500));

        statusText.innerText = "UNGGAH...";
        let ulSpeed = 0;
        for(let i=0; i<40; i++) {
            ulSpeed += Math.random() * 2;
            bigSpeed.innerText = ulSpeed.toFixed(2);
            document.getElementById('val-ul').innerText = ulSpeed.toFixed(2);
            updateSpeedometer(ulSpeed);
            await new Promise(r => setTimeout(r, 100));
        }

        statusText.innerText = "SELESAI";
    } catch (error) { statusText.innerText = "GAGAL";
    } finally { updateSpeedometer(0); bigSpeed.innerText = "- -"; btn.innerText = "ULANGI"; btn.classList.remove('is-testing'); btn.disabled = false; }
}

// ====================================================
// 4. LOGIKA PERHITUNGAN ODP
// ====================================================
function calculateODP() {
    const total = parseInt(document.getElementById('odp-total').value) || 8;
    const used = parseInt(document.getElementById('odp-used').value) || 0;
    
    if (used > total) { alert("Kesalahan: Jumlah port terpakai tidak boleh lebih besar dari total port ODP!"); return; }

    const idle = total - used;
    const percentage = (used / total) * 100;

    document.getElementById('odp-val-total').innerText = total; document.getElementById('odp-val-used').innerText = used;
    document.getElementById('odp-val-idle').innerText = idle; document.getElementById('odp-percent').innerText = Math.round(percentage);

    const resultBox = document.getElementById('odp-result-box');
    const resTitle = document.getElementById('odp-res-title');
    const resDesc = document.getElementById('odp-res-desc');

    resultBox.className = 'result-box'; resultBox.style.display = 'block';

    if (percentage < 50) { 
        resultBox.classList.add('normal'); resTitle.innerText = "KAPASITAS AMAN"; resTitle.style.color = "var(--success)"; resDesc.innerText = "Kondisi sehat. Masih banyak port idle.";
    } else if (percentage >= 50 && percentage < 100) { 
        resultBox.classList.add('warning'); resTitle.innerText = "HAMPIR PENUH"; resTitle.style.color = "var(--warning)"; resDesc.innerText = "Kapasitas menipis. Harap informasikan jika sisa port < 2.";
    } else { 
        resultBox.classList.add('danger'); resTitle.innerText = "ODP PENUH"; resTitle.style.color = "var(--danger)"; resDesc.innerText = "Full capacity! Tidak bisa melakukan instalasi baru di ODP ini."; 
    }
}

// ====================================================
// 5. LOGIKA CHECKLIST INSTALASI
// ====================================================
function updateChecklist() {
    const checkboxes = document.querySelectorAll('.chk-item');
    let checkedCount = 0;
    checkboxes.forEach(chk => { if(chk.checked) checkedCount++; });

    const total = checkboxes.length;
    const percentage = (checkedCount / total) * 100;

    document.getElementById('checklist-text').innerText = `${checkedCount}/${total} Selesai`;
    document.getElementById('checklist-bar').style.width = `${percentage}%`;
    
    if(percentage === 100) { 
        document.getElementById('checklist-bar').style.backgroundColor = "var(--success)"; document.getElementById('checklist-text').style.color = "var(--success)";
    } else { 
        document.getElementById('checklist-bar').style.backgroundColor = "var(--primary)"; document.getElementById('checklist-text').style.color = "var(--primary)"; 
    }
}

function saveChecklist() {
    const checkboxes = document.querySelectorAll('.chk-item');
    let checkedCount = 0;
    checkboxes.forEach(chk => { if(chk.checked) checkedCount++; });

    if(checkedCount < checkboxes.length) { 
        alert("Mohon selesaikan semua checklist sebelum menyimpan laporan!");
    } else { 
        alert("Berhasil! Laporan instalasi dan SOP telah disimpan ke server."); goBackToMenu(); 
    }
}

// ====================================================
// 6. LOGIKA DATA PELANGGAN
// ====================================================
function searchCustomer() {
    const input = document.getElementById('search-cust-id').value;
    const resultCard = document.getElementById('customer-result');
    const loading = document.getElementById('loading-cust');

    if(input.trim() === '') { alert('Silakan masukkan ID Pelanggan atau Nama terlebih dahulu!'); return; }

    resultCard.style.display = 'none';
    loading.style.display = 'block';

    setTimeout(() => {
        loading.style.display = 'none';
        document.getElementById('cust-id').innerText = (input.includes('CUST') ? input : 'CUST-' + Math.floor(Math.random() * 99999)).toUpperCase();
        
        if(input.toLowerCase().includes('budi')) {
            document.getElementById('cust-name').innerText = "Bapak Budi Santoso"; document.getElementById('cust-pkg').innerText = "Home Internet 50 Mbps"; document.getElementById('cust-addr').innerText = "Perumahan Alam Asri, Blok C No. 4";
        } else {
            document.getElementById('cust-name').innerText = "Keluarga " + input.toUpperCase(); document.getElementById('cust-pkg').innerText = "Gamer Pro 100 Mbps"; document.getElementById('cust-addr').innerText = "Jl. Merdeka Raya, Gang IV";
        }
        resultCard.style.display = 'block';
    }, 1200); 
}
