import React, { useState } from "react";
import DiagnosisNavbar from "./components/Diagnosis/DiagnosisNavbar";
import DiagnosisFooter from "./components/Diagnosis/DiagnosisFooter";
import DiagnosisResult from "./components/Diagnosis/DiagnosisResult";
import DiagnosisBrandInfo from "./components/Diagnosis/DiagnosisBrandInfo";

export default function DiagnosisPage() {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImage(URL.createObjectURL(file));
    }
  };

  const handleDiagnosis = async () => {
    setLoading(true);

    // Ganti dengan backend sebenarnya
    setTimeout(() => {
      setResult([
        {
          nama: "Busuk Buah (Phytophthora spp.)",
          gejala: "Buah membusuk basah, berlendir, dan berbau.",
          umum_pada: "Terjadi pada buah mangga, durian saat musim hujan.",
          penanganan: "Tingkatkan drainase, gunakan fungisida sistemik.",
        },
        {
          nama: "Antraknosa (Colletotrichum spp.)",
          gejala: "Bercak hitam cekung di kulit buah.",
          umum_pada: "Pepaya, cabai, mangga.",
          penanganan: "Semprot fungisida berbahan mancozeb atau tembaga.",
        },
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <DiagnosisNavbar />

      <main className="flex-grow py-10 px-4 md:px-8">
        <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
          Deteksi Penyakit Tanaman
        </h1>

        <div className="max-w-xl mx-auto bg-white shadow-lg p-6 rounded-xl space-y-4 transition-all duration-300">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
          {image && (
            <img
              src={image}
              alt="Preview"
              className="mx-auto max-h-64 w-full object-contain rounded-md"
            />
          )}
          <button
            onClick={handleDiagnosis}
            disabled={loading || !imageFile}
            className={`w-full py-2 px-6 rounded-lg text-white font-semibold transition-all duration-200 ${
              loading || !imageFile
                ? "bg-green-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? "Mendiagnosa..." : "Ambil Gambar / Diagnosa Sekarang"}
          </button>
        </div>

        {result && <DiagnosisResult diagnosisList={result} />}
      </main>

      {/* Informasi Branding dan Footer */}
      <DiagnosisBrandInfo />
      <DiagnosisFooter />
    </div>
  );
}
