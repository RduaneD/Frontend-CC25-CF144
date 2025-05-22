export default function GaleriFoto() {
  const photos = [1, 2, 3, 4];

  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Galeri Kegiatan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((i) => (
          <img key={i} src={`/assets/kebun${i}.jpg`} alt={`Galeri ${i}`} className="rounded-xl shadow-md" />
        ))}
      </div>
    </section>
  );
}
