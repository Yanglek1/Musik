// --- KONFIGURASI ---
// Masukkan URL Web App Google Apps Script Anda di sini
const scriptURL = 'https://script.google.com/macros/s/AKfycbwElJut3SlBQM78Ej1ZbfLvIXEVbWmaNXl2i5qAb25R0Gvt88wTX9GHjgrK9QlJm3hq/exec';

// Set Current Date & Hidden Inputs for Google Sheets
const now = new Date();
const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('currentDate').innerText = now.toLocaleDateString('id-ID', dateOptions);

// Format YYYY-MM-DD untuk input tersembunyi
document.getElementById('tanggal').value = now.toISOString().split('T')[0];
document.getElementById('hari').value = now.toLocaleDateString('id-ID', { weekday: 'long' });

// Form Handling Variables
const form = document.getElementById('reportForm');
const recentLogs = document.getElementById('recentLogs');
const emptyState = document.getElementById('emptyState');
const toast = document.getElementById('toast');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Ubah tombol jadi status loading
    const btnSubmit = form.querySelector('button[type="submit"]');
    const originalBtnText = btnSubmit.innerHTML;
    btnSubmit.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin mr-2"></i> Mengirim...';
    btnSubmit.disabled = true;

    // Ambil data untuk tampilan UI sebelum form di-reset
    const tiket = document.getElementById('tiket').value;
    const pelanggan = document.getElementById('pelanggan').value;
    const pekerjaan = document.getElementById('pekerjaan').value;
    const status = document.querySelector('input[name="status"]:checked').value;

    // Proses kirim ke Google Sheet
    fetch(scriptURL, { method: 'POST', body: new FormData(form), mode: 'no-cors' })
        .then(response => {
            // Kembalikan tombol ke semula
            btnSubmit.innerHTML = originalBtnText;
            btnSubmit.disabled = false;
            
            // Logika Warna Status UI
            let statusColor = 'bg-slate-100 text-slate-700 border-slate-200';
            let icon = 'fa-circle-info';
            if(status === 'Selesai') { statusColor = 'bg-emerald-50 text-emerald-600 border-emerald-200'; icon = 'fa-check-circle text-emerald-500'; }
            if(status === 'Pending') { statusColor = 'bg-amber-50 text-amber-600 border-amber-200'; icon = 'fa-clock text-amber-500'; }
            if(status === 'Kendala') { statusColor = 'bg-rose-50 text-rose-600 border-rose-200'; icon = 'fa-triangle-exclamation text-rose-500'; }

            // Render Kartu Riwayat di bawah form
            const logCard = document.createElement('div');
            logCard.className = 'bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-3 animation-fade-in transition-all hover:shadow-md';
            logCard.innerHTML = `
                <div class="mt-0.5">
                    <i class="fa-solid ${icon} text-lg drop-shadow-sm"></i>
                </div>
                <div class="flex-1">
                    <div class="flex justify-between items-start mb-1">
                        <h4 class="font-bold text-slate-800 text-sm">${tiket}</h4>
                        <span class="text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider border ${statusColor}">${status}</span>
                    </div>
                    <p class="text-xs text-slate-500 mb-1 font-medium"><i class="fa-solid fa-location-dot text-[10px] mr-1"></i> ${pelanggan}</p>
                    <p class="text-[11px] text-slate-400 font-medium bg-slate-50 inline-block px-2 py-0.5 rounded border border-slate-100">${pekerjaan}</p>
                </div>
            `;

            if(emptyState) emptyState.style.display = 'none';
            recentLogs.prepend(logCard);

            // Animasi Toast Sukses
            toast.classList.remove('hidden');
            toast.classList.remove('toast-enter');
            toast.classList.add('toast-enter-active');
            
            setTimeout(() => {
                toast.classList.remove('toast-enter-active');
                toast.classList.add('toast-enter');
                setTimeout(() => toast.classList.add('hidden'), 400);
            }, 3000);

            // Reset form
            form.reset();

            // Isi ulang tanggal otomatis karena ikut ter-reset
            document.getElementById('tanggal').value = now.toISOString().split('T')[0];
            document.getElementById('hari').value = now.toLocaleDateString('id-ID', { weekday: 'long' });
        })
        .catch(error => {
            btnSubmit.innerHTML = originalBtnText;
            btnSubmit.disabled = false;
            alert('Gagal mengirim laporan. Pastikan koneksi internet stabil.');
            console.error('Error!', error.message);
        });
});
