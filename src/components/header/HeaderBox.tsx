'use client';
import { useEffect, useState } from 'react';
import MainHeader from './MainHeader';
import SubHeader from './SubHeader';

const HeaderBox = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 150);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="fixed z-[99]">{isScrolled ? <SubHeader /> : <MainHeader />}</div>;
};

export default HeaderBox;
