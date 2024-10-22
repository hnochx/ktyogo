'use client';

import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

import { useState } from 'react';
import { arrowNext, arrowPrev, sliderImgArr } from '@/assets/images/brandstory/images';
import SwiperCore from 'swiper';

export const BrandstorySlider = () => {
  const [swiperIndex, setSwiperIndex] = useState<number>(0);
  const [mainSwiper, setMainSwiper] = useState<SwiperCore>();

  const movePrev = () => {
    mainSwiper?.slidePrev();
  };
  const moveNext = () => {
    mainSwiper?.slideNext();
  };

  return (
    <div className="h-full">
      <Swiper
        loop={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setSwiperIndex(swiper.realIndex)}
        onSwiper={setMainSwiper}
        navigation={false}
      >
        {sliderImgArr.map((item, index) => (
          <SwiperSlide key={index} style={{ backgroundColor: 'transparent' }}>
            <Image src={item} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute w-full top-[590px] flex items-center justify-center">
        <button onClick={movePrev} className="mr-5">
          <Image src={arrowPrev} alt="arrow_prev" className="w-full h-full" />
        </button>

        <div className="w-[80px] h-[35px] text-center rounded-full bg-white flex items-center justify-center">
          <div className="text-[20px] font-normal text-black">
            {swiperIndex + 1} / {sliderImgArr.length}
          </div>
        </div>

        <button onClick={moveNext} className="ml-5">
          <Image src={arrowNext} alt="arrow_next" className="w-full h-full" />
        </button>
      </div>
    </div>
  );
};

export default BrandstorySlider;
