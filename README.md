<div align="center">
  <h1>SISTEM ADUAN ASRAMA IKM BESUT</h1>
  <p><strong>From a reported hostel problem to a visible status.</strong></p>
  <p>Sistem pengurusan aduan fasiliti & kerosakan asrama berasaskan teknologi awan (Cloud Native Serverless), dibangunkan untuk pelajar dan warden Institut Kemahiran MARA (IKM) Besut.</p>

  <p>
    <a href="https://sistemaduanasrama.syahmiaof.my"><img src="https://img.shields.io/badge/Demo-Live-60E1B5?style=for-the-badge&logoColor=60E1B5&labelColor=101713" alt="Demo Live" /></a>
    <a href="https://github.com/syahmiaof/sistem-aduan-asrama-ikm"><img src="https://img.shields.io/badge/Source-GitHub-60E1B5?style=for-the-badge&logo=github&logoColor=60E1B5&labelColor=101713" alt="GitHub Source" /></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-All_Rights_Reserved-60E1B5?style=for-the-badge&logoColor=60E1B5&labelColor=101713" alt="License: All Rights Reserved" /></a>
    <a href="https://github.com/syahmiaof/sistem-aduan-asrama-ikm/actions"><img src="https://img.shields.io/badge/CI-Passing-60E1B5?style=for-the-badge&logo=githubactions&logoColor=60E1B5&labelColor=101713" alt="CI Passing" /></a>
    <a href="https://syahmiaof.my"><img src="https://img.shields.io/badge/Author-syahmiaof-60E1B5?style=for-the-badge&logo=vercel&logoColor=60E1B5&labelColor=101713" alt="Author" /></a>
  </p>

  <img src="public/preview.png" alt="Portal E-Aduan Asrama IKM Besut Preview" width="100%" style="border-radius: 8px; box-shadow: 0 0 30px rgba(96,225,181,0.2);" />

  <br/><br/>

  <p><a href="https://sistemaduanasrama.syahmiaof.my">Live Portal</a> • <a href="#-project-overview">Overview</a> • <a href="#-sorotan--ciri-utama">Ciri Utama</a> • <a href="#%EF%B8%8F-seni-bina-sistem">Seni Bina</a> • <a href="#-tech-stack">Tech Stack</a></p>
</div>

---

## 💎 Project Overview

- **Functionality**: Cloud-native student hostel facility maintenance ticketing system connecting a progressive web application (PWA) with Firebase Firestore realtime storage, warden dashboard analytics, and instant Telegram Bot alerts.
- **Aesthetic Value**: Clean institutional dark-mode interface with Chart.js analytics breakdown, transparent student status tracking, and fluid state notifications.
- **Business Value**: Eliminates manual paper logging at Institut Kemahiran MARA Besut, accelerating contractor repair turnaround time and enhancing campus safety accountability.

---

## 🌟 Sorotan & Ciri Utama

* 📱 **PWA Ready (Progressive Web App):** Boleh dipasang terus ke skrin utama peranti Android dan iOS tanpa muat turun stor aplikasi, menyokong pengalaman seakan aplikasi natif.
* 🤖 **Notifikasi Telegram Segera:** Setiap laporan baharu yang dihantar akan serta-merta memaklumkan warden bertugas melalui Telegram Bot API.
* 📊 **Dashboard Warden & Analitik:** Paparan papan pemuka interaktif dengan carta statistik kerosakan mengikut kategori dan blok asrama dikuasakan oleh Chart.js.
* 🔍 **Semakan Status Telus:** Pelajar boleh menyemak status terkini aduan mereka (Baru, Dalam Tindakan, Selesai) pada bila-bila masa menggunakan No. Matrik / NDP.
* 🌙 **Antaramuka Moden & Dark Mode:** Reka bentuk mesra pengguna dengan tipografi bersih, pengesahan borang dinamik, dan sokongan mod gelap.

---

## 🏗️ Seni Bina Sistem

```text
┌─────────────────┐       ┌──────────────────────┐       ┌────────────────────────┐
│  Pelajar (PWA)  │ ────> │  Cloud Firestore DB  │ <───> │  Admin Dashboard       │
│  Isi Borang     │       │  Penyimpanan Realtime│       │  Warden Urus & Kemas   │
└────────┬────────┘       └──────────────────────┘       │  Kini Status Aduan     │
         │                                               └────────────────────────┘
         │ (Trigger Notifikasi)
         v
┌────────────────────────┐
│  Telegram Bot API      │ ────> Warden Bertugas (Alert serta-merta)
└────────────────────────┘
```

---

## 🛠️ Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/Firebase_Firestore-101713?style=for-the-badge&logo=firebase&logoColor=60E1B5&labelColor=101713" alt="Firebase Firestore" />
  <img src="https://img.shields.io/badge/Firebase_Hosting-101713?style=for-the-badge&logo=firebase&logoColor=60E1B5&labelColor=101713" alt="Firebase Hosting" />
  <img src="https://img.shields.io/badge/Vanilla_JavaScript_ES6+-101713?style=for-the-badge&logo=javascript&logoColor=60E1B5&labelColor=101713" alt="JavaScript ES6+" />
  <img src="https://img.shields.io/badge/Telegram_Bot_API-101713?style=for-the-badge&logo=telegram&logoColor=60E1B5&labelColor=101713" alt="Telegram Bot API" />
  <img src="https://img.shields.io/badge/Chart.js-101713?style=for-the-badge&logo=chartdotjs&logoColor=60E1B5&labelColor=101713" alt="Chart.js" />
  <img src="https://img.shields.io/badge/PWA-101713?style=for-the-badge&logo=pwa&logoColor=60E1B5&labelColor=101713" alt="PWA" />
</p>

---

## 📌 Status Projek

Projek pelajar berfungsi sepenuhnya. Repositori awam mendokumentasikan aliran aplikasi dan integrasi awan serverless; ketersediaan operasi institusi dan penghantaran notifikasi bergantung kepada konfigurasi persekitaran warden.

---

## 📜 Lesen & Hak Cipta

Hak cipta terpelihara (c) 2026 **Muhammad Syahmi (syahmiaof)**. Dilesenkan di bawah [Proprietary All Rights Reserved](LICENSE).

---

## 👤 Pembangun

* **Nama:** [Muhammad Syahmi (syahmiaof)](https://github.com/syahmiaof)
* **Peranan:** Pelajar Diploma Teknologi Komputer (Cloud Computing), Institut Kemahiran MARA (IKM) Besut
* **Portfolio:** [syahmiaof.my](https://syahmiaof.my)
* **Live Portal:** [sistemaduanasrama.syahmiaof.my](https://sistemaduanasrama.syahmiaof.my)

---

<div align="center">
  <p>© 2026 <strong>Muhammad Syahmi (syahmiaof)</strong>. Hak Cipta Terpelihara.</p>
</div>
