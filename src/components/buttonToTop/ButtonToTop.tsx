'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import btn_top from '@/assets/images/buttonToTop/btn_top.svg';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = () => {
    if (window.scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisibility);
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }
  }, []);

  return (
    <div
      className={`fixed bottom-[28vw] right-[5vw] transition-all duration-700 ease-in-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <button
        className="w-[12vw] h-[12vw] rounded-full bg-white shadow-lg flex items-center justify-center opacity-75 hover:opacity-100 transition-opacity duration-300"
        onClick={scrollToTop}
      >
        <Image src={btn_top} alt="Scroll to top" className="w-[8vw] h-[8vw]" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
