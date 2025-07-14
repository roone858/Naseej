"use client";
import Header from "./Header";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from "next/image";
import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Hero() {

  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] flex items-center overflow-hidden"
    >
      {/* Background Slides */}
      <Header /> 
      <div className=" absolute  w-full h-full">
        <CustomSlides />
      </div>
      
      {/* Gradient Overlay */}
    
      {/* Header */}


    </section>
  );
}

interface CustomSlideProps {
  index: number;
  img: string;
}

function CustomSlide({ index, img }: CustomSlideProps) {
  return (
    <div className="h-screen w-full relative">
      <Image 
        src={img} 
        fill
        style={{ objectFit: "cover" }}
        alt={`Slide ${index}`}
        priority={index === 1}
        quality={100}
      />
            {/* Hero Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          متجر الرياض للمراتب والمفروشات الفاخرة
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-white mb-8"
        >
          نوفر لكم أفضل أنواع المراتب والمفروشات التي تضمن لكم الراحة والنوم الهانئ
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button
            // onClick={() => scrollTo('products')}
            className="bg-primary hover:bg-transparent border-2 border-primary text-white hover:text-primary py-3 px-8 rounded-full font-medium transition-colors duration-300"
            aria-label="استكشف منتجاتنا"
          >
            استكشف منتجاتنا
          </button>
          <button
            // onClick={() => scrollTo('contact')}
            className="bg-transparent hover:bg-primary border-2 border-primary text-primary hover:text-white py-3 px-8 rounded-full font-medium transition-colors duration-300"
            aria-label="تواصل معنا"
          >
            تواصل معنا
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        // onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-2xl animate-bounce focus:outline-none"
        aria-label="انتقل إلى القسم التالي"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </button>
    </div>
  );
}

function CustomSlides() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      spaceBetween={0}
      slidesPerView={1}
      effect="fade"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="h-full w-full"
    >
      <SwiperSlide>
        <CustomSlide img="/hero-img.jpg" index={1} />
      </SwiperSlide>
      <SwiperSlide>
        <CustomSlide img="/hero-img-back-1.jpg" index={2} />
      </SwiperSlide>
      <SwiperSlide>
        <CustomSlide img="/hero-img-back-2.jpg" index={3} />
      </SwiperSlide>
    </Swiper>
  );
}