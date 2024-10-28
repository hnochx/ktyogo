'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { back_img, promo_btn } from '@/assets/images/brandStory/images';
import BrandstoryScrollBtn from '@/components/brandStory/BrandstoryScrollBtn';
import BrandstorySlider from '@/components/brandStory/BrandstorySlider';

const Brandstory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div>
      <div
        className="w-full h-[190vw] relative"
        style={{
          backgroundImage: `url(${back_img.src})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
        }}
      >
        <div className="relative top-[14vw]">
          <BrandstorySlider />
        </div>
      </div>

      <div className="relative bg-[#030612]">
        <div
          className={`transition duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[55px] opacity-0'}`}
          style={{ transitionProperty: 'transform, opacity' }}
          ref={sectionRef}
        >
          <div className="relative h-[160vw]">
            <div className="absolute w-[60vw] h-[8vw] text-center text-[3.8vw] font-bold bg-gradient-to-r from-[#01d1ba] text-white to-[#00afa4] top-[14vw] left-1/2 transform -translate-x-1/2 rounded-full flex items-center justify-center">
              요고를 영상으로 만나보세요.
            </div>
            <div className="absolute top-[30vw] left-1/2 transform -translate-x-1/2">
              <iframe
                className="w-[90vw] h-[130vw] rounded-[5vw]"
                src="https://www.youtube.com/embed/EEKovGsbLWg"
              ></iframe>
              <h1 className="text-white text-center text-[4.5vw] mt-[6vw] tracking-[-0.05em]">
                요금은 줄이고 혜택은 가득한 요고!!
              </h1>
            </div>
          </div>

          <div className="bg-black h-[145vw] flex justify-evenly">
            <div className="flex flex-wrap justify-center gap-[2vw] mt-[28vw]">
              <div className="w-[44vw] h-[82vw]">
                <iframe
                  className="w-full h-full rounded-[5vw]"
                  src="https://www.youtube.com/embed/RStVl4lilxM"
                ></iframe>
                <h2 className="text-white text-center text-[4.5vw] mt-[6vw]">요고 69 (시즌2)</h2>
              </div>
              <div className="w-[44vw] h-[82vw] rounded-[5vw]">
                <iframe
                  className="w-full h-full rounded-[5vw]"
                  src="https://www.youtube.com/embed/bxFI64dzg1E"
                ></iframe>
                <h2 className="text-white text-center text-[4.5vw] mt-[6vw]">요고 30 (시즌2)</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed top-[120px] right-0 z-10">
        <Link href="/yogoBenefit">
          <div className="w-[27vw] h-[27vw]">
            <Image src={promo_btn} alt="promo_btn" layout="fill" />
          </div>
        </Link>
      </div>

      <BrandstoryScrollBtn />
    </div>
  );
};

export default Brandstory;
