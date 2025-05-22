# 🌿 HydroSmart Frontend

Ini adalah proyek frontend dari aplikasi **HydroSmart**, sebuah platform pintar untuk membantu pengguna dalam memantau dan mendiagnosis kondisi tanaman, serta mengelola progres pertumbuhan.

---

## 🚀 Fitur Saat Ini

- ✅ **Halaman Landing Page** dengan desain responsif (Hero section, Carousel)
- ✅ **Navbar dan Footer** dinamis untuk public page dan dashboard user
-    **Autentikasi Pengguna** (Login/Register)
- ✅ **Halaman Home (User Dashboard)** dengan layout modular
- ✅ **Halaman Diagnosis Penyakit Tanaman**
  - Upload gambar tanaman
  - Diagnosis berbasis dummy data (simulasi API ML)
  - Tampilkan hasil diagnosis
  - Komponen hasil diagnosis dan rekomendasi gambar
- ✅ **Komponen Terstruktur:**
  - `DiagnosisNavbar.jsx`
  - `DiagnosisFooter.jsx`
  - `DiagnosisBrandInfo.jsx`
  - `DiagnosisResult.jsx`

  ---

### 🛠 Instalasi
1. Clone Repo
```bash
git clone https://github.com/username/hydrosmart-frontend.git
cd hydrosmart-frontend
```
# 2. Install Dependensi
```bash
npm install
```
## Dependensi baru Digunakan
Aplikasi ini menggunakan dependensi tambahan berikut:
``` bash
npm install swiper
npm install react-router-dom
npm install -D tailwindcss@3.4.1
npm install react-feather
npm install react-icons
```
Catatan: framer-motion dan lucide-react tidak dipakai saat ini. Gunakan react-feather dan react-icons sesuai yang telah diterapkan.
# 3. Jalankan di Lokal
```bash
npm run dev
```

---

# HydroSmart Frontend

Repositori ini berisi kode sumber proyek frontend *HydroSmart*, termasuk fitur utama seperti Diagnosis Penyakit Tanaman, tampilan responsif, dan integrasi dengan API deteksi penyakit berbasis Machine Learning (ML).

---

## 🔼 Upload ke GitHub (Push Pertama)

Jika kamu ingin mengunggah seluruh isi folder proyek ke GitHub untuk pertama kali, lakukan langkah berikut:

```bash
git init
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git add .
git commit -m "feat: upload awal proyek HydroSmart"
git branch -M main     # opsional, jika belum di 'main'
git push -u origin main
```
## 🔄 Update Hanya Beberapa File
Jika kamu hanya mengubah beberapa file (bukan semuanya), cukup lakukan:

```bash
git status                 # Lihat file apa yang berubah
git add path/to/fileA.jsx path/to/fileB.css
git commit -m "fix: perbaiki layout di DiagnosisResult dan Navbar"
git push origin main
```
Keterangan:
git add path/to/file bisa satu file atau lebih
Jangan pakai git add . jika tidak ingin semua file ikut ter-stage

## 🆕 Menambahkan File Baru
Jika kamu menambahkan file baru (tanpa mengganti file lainnya), caranya:

```bash
git add src/components/FiturBaru.jsx
git commit -m "feat: tambah komponen FiturBaru untuk tampilan beranda"
git push origin main
```

## 📌 Tips Git Tambahan
Cek perubahan sebelum commit:
```bash
git status
```

Lihat isi perubahan:
```bash
git diff
```

Batalkan file yang tidak sengaja di-stage:
```bash
git restore --staged path/to/file
```
