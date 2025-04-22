import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const slides = [
  {
    date: 'Četvrtak 23. siječnja',
    time: '20:00',
    location: 'Multimedijalna dvorana zgrade Palacina',
  },
  {
    date: 'Petak 24. siječnja',
    time: '21:00',
    location: 'Galerija Sikirica',
  },
  {
    date: 'Subota 25. siječnja',
    time: '19:30',
    location: 'Gradsko kazalište Sinj',
  },
];

export default function Carousel() {
  return (
    <div className="w-full h-full group relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={100}
        slidesPerView={1.3}
        centeredSlides={true}
        initialSlide={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full px-6 py-12 text-white text-center border border-neutral-700 rounded-2xl bg-black">
              <p className="text-2xl font-semibold mb-4">{slide.date}</p>
              <p className="text-3xl font-bold mb-2">{slide.time}</p>
              <p className="text-base opacity-80">{slide.location}</p>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev absolute top-1/2 left-0 z-10 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="text-white text-3xl"></button>
        </div>
        <div className="swiper-button-next absolute top-1/2 right-0 z-10 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="text-white text-3xl"></button>
        </div>
      </Swiper>
    </div>
  );
}
