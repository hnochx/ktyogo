'use client';

import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image, { StaticImageData } from 'next/image';

import { useState } from 'react';
import { arrowNext, arrowPrev, sliderImgArr, stopImg, startImg } from '@/assets/images/slider/sliderImg';
import SwiperCore from 'swiper';

export const MainSlider = () => {
  const [swiperIndex, setSwiperIndex] = useState<number>(0);
  const [controlImg, setControlImg] = useState<StaticImageData>(stopImg);
  const [mainSwiper, setMainSwiper] = useState<SwiperCore>();

  const movePrev = () => {
    mainSwiper?.slidePrev();
  };

  const moveNext = () => {
    mainSwiper?.slideNext();
  };

  const swiperStop = () => {
    if (mainSwiper?.autoplay.running) {
      mainSwiper?.autoplay.stop();
      setControlImg(startImg);
    } else {
      mainSwiper?.autoplay.start();
      setControlImg(stopImg);
    }
  };

  return (
    <div className="py-3">
      <Swiper
        loop={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setSwiperIndex(swiper.realIndex)}
        onSwiper={setMainSwiper}
        navigation={false}
      >
        <div className="absolute bottom-[1vw] left-[6.6vw] z-[1] rounded-xl border-[1px] border-[#D9D9D9] flex items-center pr-[8vw] py-[0.7vw]">
          <div className="pl-[2vw] text-[3.4vw] font-bold text-black whitespace-nowrap ">
            {swiperIndex + 1} / {sliderImgArr.length}
          </div>
          <button
            className="rounded-[10px] border border-[#D9D9D9] bg-white absolute bottom-[-1px] right-[-1px]"
            onClick={swiperStop}
          >
            <Image src={controlImg} alt="stop_button" className="w-[6.4vw] h-[6.4vw]" priority />
          </button>
        </div>

        <div className="absolute z-[1] top-1/2 transform -translate-y-1/2 left-[1.5vw]">
          <button onClick={movePrev}>
            <Image src={arrowPrev} alt="arrow_prev" className="w-[3vw] h-[3vw]" priority />
          </button>
        </div>

        <div className="absolute z-[1] top-1/2 transform -translate-y-1/2 right-[1.5vw]">
          <button onClick={moveNext}>
            <Image src={arrowNext} alt="arrow_next" className="w-[3vw] h-[3vw]" priority />
          </button>
        </div>

        {sliderImgArr.map((item, index) => (
          <SwiperSlide key={index}>
            <Image src={item} alt="" priority />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
