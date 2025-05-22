export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-500 text-white text-center py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Siap Memulai Perjalanan Hidroponik Anda?
      </h2>
      <p className="text-lg md:text-xl mb-8 opacity-90">
        Buat langkah pertama untuk bercocok tanam cerdas dan ramah lingkungan.
      </p>
      <a
        href="#login"
        className="inline-block bg-white text-green-700 px-8 md:px-10 py-4 md:py-5 rounded-full text-lg md:text-xl font-bold shadow-lg hover:scale-105 hover:bg-green-100 transition-transform duration-300"
      >
        Daftar Sekarang
      </a>
    </section>
  );
}