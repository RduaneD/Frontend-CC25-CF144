export default function RagamTanaman() {
  const plants = ['selada', 'kemangi', 'seledri', 'pakcoy', 'kangkung'];

  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 bg-[#F4F7ED]">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Ragam Tanaman Hidroponik</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center">
        {plants.map((plant, idx) => (
          <button key={idx} onClick={() => alert(`Info tentang ${plant}`)}>
            <img src={`/assets/plants/${plant}.png`} alt={plant} className="w-24 h-24 object-contain hover:scale-105 transition" />
          </button>
        ))}
      </div>
    </section>
  );
}
