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
## Dependensi Tambahan baru yang Digunakan
```bash
npm install swiper
npm install react-router-dom
npm install -D tailwindcss@3.4.1
npm install framer-motion lucide-react (X)
npm install react-feather
npm install react-icons
```
# 3. Jalankan di Lokal
```bash
npm run dev
```