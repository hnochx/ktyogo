'use client';
import { header_arrow } from '@/assets/images/images';
import HeaderLink from './HeaderLink';
import { useState } from 'react';

const SubHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="h-[52px] leading-[52px] pl-[46px] bg-white w-[100vw]">
        <h1 className="text-[17px] font-bold">
          <button onClick={() => setIsOpen(!isOpen)}>요고 다이렉트</button>
          <i
            className="w-[13px] h-[13px] inline-block"
            style={{ backgroundImage: `url(${header_arrow.src})`, backgroundSize: '13px 13px' }}
          ></i>
        </h1>
      </div>
      {isOpen && <HeaderLink isOpen={isOpen} />}
    </>
  );
};
export default SubHeader;
