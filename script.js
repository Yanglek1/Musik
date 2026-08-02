const METER_DASHARRAY = 345.5; 
const meterProgress = document.getElementById('meter-progress');

meterProgress.style.strokeDasharray = METER_DASHARRAY;
meterProgress.style.strokeDashoffset = METER_DASHARRAY;

const TEST_DURATION_MS = 10000; // TES BERJALAN TEPAT 10 DETIK

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// FUNGSI PENCARIAN INFO JARINGAN
async function fetchNetworkInfo() {
    try {
        const response = await fetch('https://ipinfo.io/json');
        const data = await response.json();
        let providerName = data.org || "Tidak Diketahui";
        providerName = providerName.replace(/^AS\d+\s/, ''); 
        document.getElementById('net-isp').innerText = providerName;
        document.getElementById('net-ip').innerText = data.ip || "-";
        document.getElementById('net-server').innerText = data.city ? `${data.city}, ${data.country}` : "Server Publik";
    } catch (error) {
        try {
            const cfRes = await fetch('https://1.1.1.1/cdn-cgi/trace');
            const cfText = await cfRes.text();
            const ipMatch = cfText.match(/ip=(.*)/);
            const coloMatch = cfText.match(/colo=(.*)/);
            document.getElementById('net-ip').innerText = ipMatch ? ipMatch[1] : "-";
            document.getElementById('net-isp').innerText = "Koneksi Langsung";
            document.getElementById('net-server').innerText = `Cloudflare Server (${coloMatch ? coloMatch[1] : 'Global'})`;
        } catch (err2) {
            document.getElementById('net-isp').innerText = "Diblokir Browser";
            document.getElementById('net-ip').innerText = "Koneksi Pribadi";
            document.getElementById('net-server').innerText = "Tidak dapat dijangkau";
        }
    }
}

function updateSpeedometer(speedMbps) {
    const maxSpeed = 200; // Skala maksimal jarum meter
    let percentage = speedMbps / maxSpeed;
    if (percentage > 1) percentage = 1; 
    const offset = METER_DASHARRAY - (percentage * METER_DASHARRAY);
    meterProgress.style.strokeDashoffset = offset;
}

function popMetric(id) {
    const el = document.getElementById(id);
    el.style.transform = 'scale(1.05)';
    el.style.backgroundColor = '#1a1a1a';
    setTimeout(() => {
        el.style.transform = 'scale(1)';
        el.style.backgroundColor = '#0a0a0a';
    }, 300);
}

// ANIMASI BOOT-UP SPEEDOMETER SEBELUM TEST
async function bootAnimation() {
    updateSpeedometer(200); 
    await sleep(400);
    updateSpeedometer(0);   
    await sleep(400);
}

// 1. PING & JITTER
async function measureRealPing() {
    let pings = [];
    for (let i = 0; i < 5; i++) {
        const start = performance.now();
        await fetch(`https://speed.cloudflare.com/__down?bytes=0&r=${Math.random()}`, { cache: 'no-store' });
        const end = performance.now();
        pings.push(end - start);
    }
    
    const avgPing = pings.reduce((a, b) => a + b, 0) / pings.length;
    let jitter = 0;
    for (let i = 1; i < pings.length; i++) {
        jitter += Math.abs(pings[i] - pings[i - 1]);
    }
    jitter = pings.length > 1 ? jitter / (pings.length - 1) : 0;
    return { ping: Math.round(avgPing), jitter: Math.round(jitter) };
}

// 2. DOWNLOAD (BERBASIS WAKTU)
async function measureRealDownload(mainDisplay, miniDisplayId) {
    const bytesToDownload = 200 * 1024 * 1024; 
    const url = `https://speed.cloudflare.com/__down?bytes=${bytesToDownload}&r=${Math.random()}`;
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TEST_DURATION_MS); 

    try {
        const response = await fetch(url, { cache: 'no-store', signal: controller.signal });
        const reader = response.body.getReader();
        
        let receivedLength = 0;
        const startTime = performance.now();
        let lastReportTime = startTime;
        let finalSpeed = 0;

        while (true) {
            const { done, value } = await reader.read();
            if (done) break; 
            
            receivedLength += value.length;
            const now = performance.now();
            
            if (now - lastReportTime > 150) { 
                const durationInSeconds = (now - startTime) / 1000;
                const bitsLoaded = receivedLength * 8;
                const speedMbps = (bitsLoaded / durationInSeconds) / (1000 * 1000); 
                
                const displayValue = speedMbps.toFixed(2);
                document.getElementById(miniDisplayId).innerText = displayValue;
                mainDisplay.innerText = displayValue;
                updateSpeedometer(speedMbps);
                
                finalSpeed = speedMbps;
                lastReportTime = now;
            }
        }
        clearTimeout(timeoutId);
        return finalSpeed;
    } catch (err) {
        if (err.name === 'AbortError') {
            return parseFloat(mainDisplay.innerText);
        }
        throw err;
    }
}

// 3. UPLOAD (BERBASIS WAKTU)
function measureRealUpload(mainDisplay, miniDisplayId) {
    return new Promise((resolve) => {
        const payloadSize = 30 * 1024 * 1024; 
        const payload = new Uint8Array(payloadSize); 
        
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `https://speed.cloudflare.com/__up?r=${Math.random()}`, true);
        xhr.setRequestHeader('Content-Type', 'application/octet-stream');
        
        const startTime = performance.now();
        let lastReportTime = startTime;
        let finalSpeed = 0;

        const timeoutId = setTimeout(() => {
            xhr.abort();
        }, TEST_DURATION_MS);

        xhr.upload.onprogress = function(e) {
            const now = performance.now();
            const durationInSeconds = (now - startTime) / 1000;
            
            if (now - lastReportTime > 150) {
                const bitsLoaded = e.loaded * 8;
                const speedMbps = (bitsLoaded / durationInSeconds) / (1000 * 1000);
                
                const displayValue = speedMbps.toFixed(2);
                document.getElementById(miniDisplayId).innerText = displayValue;
                mainDisplay.innerText = displayValue;
                updateSpeedometer(speedMbps);
                
                finalSpeed = speedMbps;
                lastReportTime = now;
            }
        };
        
        xhr.onload = function() {
            clearTimeout(timeoutId);
            resolve(finalSpeed);
        };
        
        xhr.onabort = function() { resolve(finalSpeed); };
        xhr.onerror = function() { clearTimeout(timeoutId); resolve(finalSpeed); };
        
        xhr.send(payload);
    });
}

// LOGIKA UTAMA SAAT TOMBOL DIKLIK
async function startRealTest() {
    const btn = document.getElementById('start-btn');
    const statusText = document.getElementById('status-text');
    const bigSpeed = document.getElementById('big-speed');
    
    btn.disabled = true;
    btn.classList.add('is-testing'); 
    btn.innerText = "MENGUJI";
    
    ['val-dl', 'val-ul', 'val-ping', 'val-jitter'].forEach(id => document.getElementById(id).innerText = "0");
    bigSpeed.innerText = "0.00";
    
    await bootAnimation();

    try {
        statusText.innerText = "PING";
        const pingData = await measureRealPing();
        document.getElementById('val-ping').innerText = pingData.ping;
        popMetric('box-ping');
        document.getElementById('val-jitter').innerText = pingData.jitter;
        popMetric('box-jitter');

        statusText.innerText = "UNDUH";
        await measureRealDownload(bigSpeed, 'val-dl');
        popMetric('box-dl');

        updateSpeedometer(0); 
        await sleep(500);

        statusText.innerText = "UNGGAH";
        await measureRealUpload(bigSpeed, 'val-ul');
        popMetric('box-ul');

        statusText.innerText = "SELESAI";
    } catch (error) {
        console.error("Test Error:", error);
        statusText.innerText = "GAGAL";
    } finally {
        updateSpeedometer(0); 
        bigSpeed.innerText = "- -"; 
        btn.innerText = "ULANGI";
        
        btn.classList.remove('is-testing');
        btn.disabled = false;
    }
}

// Jalankan fetch saat halaman pertama kali dimuat
window.onload = fetchNetworkInfo;
