'use client';
import HeaderLink from './header-link';
import { useState } from 'react';

const SubHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="h-[52px] leading-[52px] pl-[46px]">
        <h1 className="text-[17px] font-bold">
          <button onClick={() => setIsOpen(!isOpen)}>요고 다이렉트</button>
        </h1>
      </div>
      <HeaderLink isOpen={isOpen} />
    </>
  );
};
export default SubHeader;
