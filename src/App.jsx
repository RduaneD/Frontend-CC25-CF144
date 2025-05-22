import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import RagamTanaman from "./components/Landing/RagamTanaman";
import AboutHydroSmart from "./components/Landing/AboutHydroSmart";
import GaleriFoto from "./components/Landing/GaleriFoto";
import ArtikelEdukasi from "./components/Landing/ArtikelEdukasi";

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Hero />

      {/* Bagian About */}
      <section id="tentang" className="bg-white px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 md:mb-10">Apa itu Hidroponik?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Hidroponik adalah metode menanam tanpa menggunakan tanah, melainkan menggunakan air dan nutrisi.
            Dengan sistem ini, tanaman tumbuh lebih cepat, sehat, dan ramah lingkungan. Platform kami
            membantu Anda mengelola tanaman hidroponik dengan efisien.
          </p>
          <img src="/assets/hidroponik.jpg" alt="Ilustrasi Hidroponik" className="w-full rounded-xl shadow-lg" />
        </div>
      </section>
      <RagamTanaman />
      <AboutHydroSmart />
      <GaleriFoto />
      <ArtikelEdukasi />
      <CTA />
      <FAQ />
    </div>
  );
}

export default App;