// Import Firebase SDK (Versi Latest)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// --- CONFIG FIREBASE KAU ---
const firebaseConfig = {
    apiKey: "AIzaSyA1c1Q2Sl-ARdY3GxV2UJRKFSb2R_AW1DE",
    authDomain: "sistem-aduan-asrama-ikm.firebaseapp.com",
    projectId: "sistem-aduan-asrama-ikm",
    storageBucket: "sistem-aduan-asrama-ikm.firebasestorage.app",
    messagingSenderId: "1070757792008",
    appId: "1:1070757792008:web:40388ffb7f994ee0e044bd",
    measurementId: "G-HQ2SG9489R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// --- 🤖 FUNGSI TELEGRAM BOT ---
async function hantarKeTelegram(nama, noMatrik, blok, bilik, kategori, butiran) {
    // Token & ID kau (JANGAN UBAH DAH, NI BETUL)
    const token = "8523939341:AAEL-XO2nyYV6svViT8O-mANejQymUsFnYU";
    const chat_id = "1076607714"; 
    
    // Susun mesej cantik-cantik untuk Telegram
    const mesej = `
🚨 *ADUAN BARU (IKM BESUT)* 🚨
--------------------------------
👤 *Pengadu:* ${nama} (${noMatrik})
🏢 *Lokasi:* ${blok} - Bilik ${bilik}
🛠️ *Kategori:* ${kategori}
📝 *Masalah:* ${butiran}
--------------------------------
Login sistem untuk tindakan.
    `;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(mesej)}&parse_mode=Markdown`;

    try {
        await fetch(url);
        console.log("Mesej Telegram berjaya dihantar!");
    } catch (err) {
        console.error("Gagal hantar ke Telegram:", err);
    }
}

// --- LOGIC BILA TEKAN SUBMIT ---
// (Pastikan ID ni sama dengan HTML kau: 'borangAduan')
const form = document.getElementById('borangAduan');

if (form) {
    form.addEventListener('submit', async function(e) {
        e.preventDefault(); // Halang reload page

        // Ubah butang jadi loading
        const btn = document.querySelector('.btn-submit');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sedang Hantar...';
        btn.disabled = true;

        try {
            // 1. AMBIL SEMUA DATA DARI HTML
            const nama = document.getElementById('nama').value;
            const noMatrik = document.getElementById('noMatrik').value;
            const telefon = document.getElementById('telefon').value; // Field Baru
            const program = document.getElementById('program').value; // Field Baru
            const blok = document.getElementById('blok').value;
            const noBilik = document.getElementById('noBilik').value;
            const kategori = document.getElementById('kategori').value;
            const butiran = document.getElementById('butiran').value;

            // 2. SIMPAN KE DATABASE (FIRESTORE)
            await addDoc(collection(db, "aduan"), {
                nama: nama,
                noMatrik: noMatrik,
                telefon: telefon,
                program: program,
                blok: blok,
                noBilik: noBilik,
                kategori: kategori,
                butiran: butiran,
                status: "Baru",
                tarikh: new Date().toLocaleString("ms-MY"),
                timestamp: serverTimestamp()
            });

            // 3. HANTAR NOTIFIKASI TELEGRAM
            // (Kita tak perlu tunggu ni siap baru alert user, biar dia jalan kat background)
            hantarKeTelegram(nama, noMatrik, blok, noBilik, kategori, butiran);

            // 4. BERJAYA!
            alert("✅ Aduan berjaya dihantar! Warden akan dimaklumkan.");
            window.location.reload(); 

        } catch (error) {
            // KALAU ERROR
            console.error("Error:", error);
            alert("❌ Gagal hantar: " + error.message);
            
            // Reset butang supaya boleh tekan balik
            btn.innerHTML = originalText;
            btn.disabled = false;
        }
    });
} else {
    console.error("Error: Borang aduan tidak dijumpai! Check ID HTML.");
}