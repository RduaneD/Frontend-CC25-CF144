export default function ArtikelEdukasi() {
  const articles = [
    { title: "Tips Merawat Hidroponik di Rumah", image: "/assets/artikel1.jpg" },
    { title: "Jenis Nutrisi Penting untuk Tanaman", image: "/assets/artikel2.jpg" },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Edukasi & Artikel</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {articles.map((a, idx) => (
          <div key={idx} className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
            <img src={a.image} alt={a.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{a.title}</h3>
              <a href="#" className="text-primary text-sm mt-2 inline-block">Baca selengkapnya →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
