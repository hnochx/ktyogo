'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import btn_top from '@/assets/images/buttonToTop/btn_top.svg';
import { icon_chatbot } from '@/assets/images/images';

const ScrollToTopButton: React.FC = () => {
  const [showBtnTop, setShowBtnTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowBtnTop(true);
      } else {
        setShowBtnTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div
        className={`z-20 fixed bottom-[8vw] right-[5vw] w-[3rem] h-[3rem] rounded-full flex items-center justify-center transition-all duration-300 transform ${
          showBtnTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <button
          onClick={scrollToTop}
          className="w-[3rem] h-[3rem] rounded-full bg-white shadow-lg flex items-center justify-center opacity-75"
        >
          <Image src={btn_top} alt="Scroll to top" className="w-[2rem] h-[2rem]" />
        </button>
      </div>
      <Link
        href={'/chatbot'}
        className={`z-20 fixed right-[5vw] w-[3rem] h-[3rem] rounded-full flex items-center justify-center border-[2px] border-black bg-red-50 shadow-lg transition-all duration-300 ${
          showBtnTop ? 'bottom-[12%]' : 'bottom-[8vw]'
        }`}
      >
        <Image src={icon_chatbot} alt="chatbot" className="w-[2rem] h-[2rem]" />
      </Link>
    </div>
  );
};

export default ScrollToTopButton;
