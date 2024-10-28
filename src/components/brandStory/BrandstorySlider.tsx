'use client';

import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

import { useState } from 'react';
import { arrowNext, arrowPrev, sliderImgArr } from '@/assets/images/brandStory/images';
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
        onSlideChange={(swiper) => setSwiperIndex(swiper.realIndex)}
        onSwiper={setMainSwiper}
        navigation={false}
      >
        {sliderImgArr.map((item, index) => (
          <SwiperSlide key={index} style={{ backgroundColor: 'transparent' }}>
            <Image src={item} alt="" />
          </SwiperSlide>
        ))}

        <div className="w-full flex items-center justify-center mt-[3vw]">
          <button onClick={movePrev} className="mr-[5vw]">
            <Image src={arrowPrev} alt="arrow_prev" className="w-[10vw] h-[12vw]" />
          </button>

          <div className="w-[22vw] h-[10vw] text-center rounded-full bg-white flex items-center justify-center">
            <div className="text-[5.5vw] font-medium text-black">
              {swiperIndex + 1} / {sliderImgArr.length}
            </div>
          </div>

          <button onClick={moveNext} className="ml-[5vw]">
            <Image src={arrowNext} alt="arrow_next" className="w-[10vw] h-[12vw]" />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default BrandstorySlider;
