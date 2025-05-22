import UserNavbar from "./components/UserDashboard/UserNavbar";
import SearchBar from "./components/UserDashboard/SearchBar";
import ArticleCard from "./components/UserDashboard/ArticleCard";
import RecommendationSection from "./components/UserDashboard/RecommendationSection";
import DiagnosisSection from "./components/UserDashboard/DiagnosisSection";
import Footer from "./components/UserDashboard/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <UserNavbar />

      {/* Welcome Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-b from-green-50 via-white to-green-50">
        <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-4">
          Selamat Datang
        </h1>
        <p className="text-green-600 mb-6 max-w-xl mx-auto">
          Temukan informasi dan fitur yang mendukung perawatan tanaman hidroponikmu.
        </p>
        <SearchBar />
      </section>

      {/* Rawat Tanamanmu */}
      <section className="px-6 md:px-20 py-14 bg-gradient-to-b from-white via-green-50 to-white">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-4">
          Rawat Tanamanmu
        </h2>
        <p className="text-center text-green-600 mb-10 max-w-xl mx-auto">
          Informasi seputar urban farming, perawatan tanaman, dan lainnya.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((num) => (
            <ArticleCard
              key={num}
              title={`Artikel ${num}`}
              excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod."
              image={`https://source.unsplash.com/600x400/?hydroponic,plants,${num}`}
            />
          ))}
        </div>
      </section>

      {/* Rekomendasi Tanaman */}
      <RecommendationSection />

      {/* Diagnosis Penyakit */}
      <DiagnosisSection />

      <Footer />
    </div>
  );
}
