import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Hero() {
  const cards = [
    {
      title: "Hidup Hijau Di Kota",
      description: "Tanaman hidroponik kini bisa dilakukan bahkan di tengah kota dengan efisien.",
      image: "/images/card1.jpg",
    },
    {
      title: "Teknologi Cerdas",
      description: "Pantau pertumbuhan tanaman dengan sensor pintar langsung dari aplikasi.",
      image: "/images/card2.jpg",
    },
    {
      title: "Solusi Berkelanjutan",
      description: "Kurangi jejak karbon dengan hidroponik modern yang hemat air dan lahan.",
      image: "/images/card3.jpg",
    },
    {
      title: "Untuk Semua Orang",
      description: "Mulai dari pemula hingga ahli, sistem kami dirancang untuk kemudahan semua kalangan.",
      image: "/images/card4.jpg",
    },
  ];

  return (
    <>
      {/* Auto Carousel Section (muncul di atas saat mobile/tablet) */}
      <section className="md:hidden px-4 pt-10 pb-4 bg-white order-first">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={1200}
          pagination={{ clickable: true }}
          className="max-w-md mx-auto"
        >
          {cards.map((card, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-md h-[250px] transition-all duration-700 ease-in-out">
                <div className="w-full h-40 bg-cover bg-center" style={{ backgroundImage: `url(${card.image})` }} />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Hero Section */}
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-10 py-20 bg-gradient-to-r from-green-200 via-white to-white overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-green-100 opacity-30 rounded-full blur-3xl pointer-events-none z-0"></div>

        {/* Text Content */}
        <div className="relative z-10 max-w-xl text-center md:text-left animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 transition-all duration-700">
            Kelola Tanaman Hidroponik Anda dengan Mudah
          </h1>
          <p className="text-gray-700 mb-6 text-base md:text-lg">
            Pantau, rawat, dan dapatkan rekomendasi terbaik untuk tanaman hidroponik Anda.
          </p>
          <a
            href="#mulai"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition duration-300 shadow-md hover:scale-105"
          >
            Mulai Sekarang
          </a>
        </div>

        {/* Hero Image (hidden on tablet & mobile) */}
        <img
          src="/HydroSmart.webp"
          alt="Logo HydroSmart"
          className="hidden lg:block relative z-10 w-1/2 mb-10 md:mb-0 animate-fade-in-up transition-transform duration-700 hover:scale-105"
        />
      </section>

      {/* Auto Carousel Section (tampil di bawah hanya untuk desktop) */}
      <section className="hidden md:block px-6 md:px-10 py-16 bg-white">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={1500}
          pagination={{ clickable: true }}
          navigation={true}
          className="max-w-6xl mx-auto"
        >
          {cards.map((card, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-md h-[300px] md:h-[280px] transition-all duration-700 ease-in-out">
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
                <div
                  className="w-full md:w-1/2 h-48 md:h-auto bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}