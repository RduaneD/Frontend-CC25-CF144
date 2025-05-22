export default function FAQ() {
  const data = [
    {
      question: "Apa itu hidroponik?",
      answer:
        "Hidroponik adalah metode menanam tanpa tanah, menggunakan air dan nutrisi untuk pertumbuhan tanaman yang optimal."
    },
    {
      question: "Apakah saya perlu pengalaman khusus?",
      answer:
        "Tidak. HydroSmart dirancang untuk pemula sekalipun. Aplikasi kami memandu Anda langkah demi langkah."
    },
    {
      question: "Bagaimana saya memulai dengan HydroSmart?",
      answer:
        "Anda hanya perlu mendaftar akun dan mulai menambahkan data tanaman Anda. Kami akan bantu monitoring dan memberikan rekomendasi."
    }
  ];

  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-12 text-center">Pertanyaan Umum</h2>
      <div className="space-y-6 max-w-4xl mx-auto">
        {data.map((item, index) => (
          <div key={index} className="p-6 rounded-xl bg-green-50 shadow-md">
            <h4 className="text-lg font-semibold text-primary mb-2">{item.question}</h4>
            <p className="text-gray-700 leading-relaxed">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}