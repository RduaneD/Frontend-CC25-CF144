import React, { useState } from "react";

export default function DiagnosisSection() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300); // reset animasi
    // logika navigasi/diagnosis bisa dimasukkan di sini
  };

  return (
    <section className="relative text-center px-6 py-24 bg-green-50 overflow-hidden">
      {/* Background SVG Leaf Illustration */}
      <svg
        className="absolute top-0 left-0 w-40 md:w-64 opacity-10 -z-0"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#16a34a"
          d="M51.6,-69.7C63.2,-61.6,66.3,-42.2,68.3,-25.3C70.3,-8.3,71.1,6.3,63.6,17.9C56,29.6,40,38.2,25.1,46.9C10.1,55.5,-3.9,64.2,-15.5,61C-27,57.8,-36.1,42.7,-45.3,28.9C-54.5,15.1,-63.7,2.6,-63.8,-10.4C-63.9,-23.4,-55.1,-36.9,-43.6,-46.4C-32.2,-55.9,-18.1,-61.3,0.4,-61.8C19,-62.3,38,-57.7,51.6,-69.7Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-4">
          Cek Kondisi Tanamanmu
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-8">
          Gunakan fitur diagnosis untuk mengetahui apakah tanamanmu sedang sakit
          atau mengalami kerusakan. Sistem kami akan membantu menganalisis gejala
          dan memberikan solusi terbaik.
        </p>
        <button
          onClick={handleClick}
          className={`bg-green-600 text-white px-8 py-3 rounded-full text-sm md:text-base font-semibold transition duration-300 shadow-lg hover:bg-green-700 hover:shadow-xl active:scale-95 ${
            isClicked ? "animate-pingOnce" : ""
          }`}
        >
          Cek Penyakit / Diagnosis
        </button>
      </div>

      {/* Custom animation class */}
      <style>{`
        .animate-pingOnce {
          animation: pingOnce 0.4s ease-out;
        }

        @keyframes pingOnce {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
      `}</style>
    </section>
  );
}