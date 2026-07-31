// --- KONFIGURASI ---
const scriptURL = 'https://script.google.com/macros/s/AKfycbwElJut3SlBQM78Ej1ZbfLvIXEVbWmaNXl2i5qAb25R0Gvt88wTX9GHjgrK9QlJm3hq/exec';

// Set Current Date
const now = new Date();
const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('currentDate').innerText = now.toLocaleDateString('id-ID', dateOptions);

// Format YYYY-MM-DD
document.getElementById('tanggal').value = now.toISOString().split('T')[0];
document.getElementById('hari').value = now.toLocaleDateString('id-ID', { weekday: 'long' });

const form = document.getElementById('reportForm');
const recentLogs = document.getElementById('recentLogs');
const emptyState = document.getElementById('emptyState');
const toast = document.getElementById('toast');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const btnSubmit = form.querySelector('button[type="submit"]');
    const originalBtnText = btnSubmit.innerHTML;
    btnSubmit.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin mr-2"></i> MENGIRIM...';
    btnSubmit.disabled = true;

    const tiket = document.getElementById('tiket').value;
    // Gabungkan data pelanggan dengan data GPS (jika ada)
let pelanggan = document.getElementById('pelanggan').value;
const koordinatGPS = document.getElementById('koordinat').value;
if (koordinatGPS) {
    pelanggan = pelanggan + ' (GPS: ' + koordinatGPS + ')';
}

// Update nilai di dalam form sebelum dikirim ke Google Sheet
document.getElementById('pelanggan').value = pelanggan;

    const pekerjaan = document.getElementById('pekerjaan').value;
    const status = document.querySelector('input[name="status"]:checked').value;

    fetch(scriptURL, { method: 'POST', body: new FormData(form), mode: 'no-cors' })
        .then(response => {
            btnSubmit.innerHTML = originalBtnText;
            btnSubmit.disabled = false;
            
            // Logika Warna Status UI untuk Tema Gelap (Dark Mode)
            let statusColor = 'text-white border-[#444]';
            if(status === 'Selesai') { statusColor = 'text-green-400 border-green-900 bg-green-950/30'; }
            if(status === 'Pending') { statusColor = 'text-yellow-400 border-yellow-900 bg-yellow-950/30'; }
            if(status === 'Kendala') { statusColor = 'text-red-400 border-red-900 bg-red-950/30'; }

            const logCard = document.createElement('div');
            logCard.className = 'bg-[#0a0a0a] p-4 rounded-2xl border border-[#222222] flex items-start space-x-3 animation-fade-in transition-all';
            logCard.innerHTML = `
                <div class="flex-1">
                    <div class="flex justify-between items-start mb-1">
                        <h4 class="font-bold text-white text-sm">${tiket}</h4>
                        <span class="text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider border ${statusColor}">${status}</span>
                    </div>
                    <p class="text-xs text-[#888888] mb-1 font-medium">${pelanggan}</p>
                    <p class="text-[11px] text-[#aaaaaa] font-medium bg-black inline-block px-2 py-0.5 rounded border border-[#222222]">${pekerjaan}</p>
                </div>
            `;

            if(emptyState) emptyState.style.display = 'none';
            recentLogs.prepend(logCard);

            toast.classList.remove('hidden');
            toast.classList.remove('toast-enter');
            toast.classList.add('toast-enter-active');
            
            setTimeout(() => {
                toast.classList.remove('toast-enter-active');
                toast.classList.add('toast-enter');
                setTimeout(() => toast.classList.add('hidden'), 400);
            }, 3000);

            form.reset();
            document.getElementById('tanggal').value = now.toISOString().split('T')[0];
            document.getElementById('hari').value = now.toLocaleDateString('id-ID', { weekday: 'long' });
        })
        .catch(error => {
            btnSubmit.innerHTML = originalBtnText;
            btnSubmit.disabled = false;
            alert('Gagal mengirim laporan. Pastikan koneksi internet stabil.');
        });
    
// --- FITUR MENGAMBIL LOKASI GPS ---
const btnLokasi = document.getElementById('btn-lokasi');
const inputKoordinat = document.getElementById('koordinat');

btnLokasi.addEventListener('click', () => {
    if (navigator.geolocation) {
        // Ubah ikon jadi loading
        btnLokasi.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i>';
        
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                // Masukkan hasil ke kolom input
                inputKoordinat.value = `${lat}, ${lng}`;
                
                // Ubah ikon jadi centang hijau sebentar
                btnLokasi.innerHTML = '<i class="fa-solid fa-check text-green-400"></i>';
                setTimeout(() => {
                    btnLokasi.innerHTML = '<i class="fa-solid fa-location-crosshairs"></i>';
                }, 2000);
            },
            (error) => {
                alert('Gagal mengambil lokasi! Pastikan GPS HP Anda menyala dan izinkan browser mengakses lokasi.');
                btnLokasi.innerHTML = '<i class="fa-solid fa-location-crosshairs"></i>';
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
    } else {
        alert('Browser Anda tidak mendukung fitur lokasi GPS.');
    }
});
