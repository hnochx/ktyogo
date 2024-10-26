'use client';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

interface FeeSelectionProps {
  onFeeSelect: (fee: string) => void;
  onPrevious: () => void;
}

export const FeeRangeOptions: Record<string, string[]> = {
  '2만원대': ['22000', '27000'],
  '3만원대': ['30000', '32000', '34000', '34500', '35000', '36000', '37500', '38000'],
  '4만원대': ['40000', '42000', '44000', '45000', '46000', '47500', '48000', '49000'],
  '5만원대': ['51000', '55000', '59000'],
  '6만원대': ['61000', '62000', '65000', '69000'],
};
const FeeSelection = ({ onFeeSelect, onPrevious }: FeeSelectionProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleFeeSelect = (fee: string) => {
    setIsVisible(false);
    setTimeout(() => {
      onFeeSelect(fee);
    }, 300);
  };

  return (
    <div className={`p-3 bg-gray-100 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-center flex flex-col gap-8 m-2 pt-5 pb-20 px-5 bg-white rounded-xl shadow-lg  h-[665px]">
        <div className="flex flex-col gap-5">
          <ChevronLeftIcon className="size-6" onClick={onPrevious} />
          <p className="text-2xl text-start">
            월 요금을 <br /> 얼마 내고 있나요?
          </p>
        </div>
        <div className="flex flex-row gap-2">
          <span className="w-1/3 h-1.5 bg-yogoGreen rounded-sm" />
          <span className="w-1/3 h-1.5 rounded-sm bg-yogoGreen" />
          <span className="w-1/3 h-1.5 rounded-sm bg-yogoGreen" />
        </div>
        <div className="flex flex-col gap-4 text-start">
          <div
            className="border border-lightGray rounded-xl p-4 cursor-pointer hover:bg-yogoGreen hover:bg-opacity-25 transition duration-300 ease-in-out"
            onClick={() => handleFeeSelect('2만원대')}
          >
            <p>2만원대</p>
          </div>
          <div
            className="border border-lightGray rounded-xl p-4 cursor-pointer hover:bg-yogoGreen hover:bg-opacity-25  transition duration-300 ease-in-out"
            onClick={() => handleFeeSelect('3만원대')}
          >
            <p>3만원대</p>
          </div>
          <div
            className="border border-lightGray rounded-xl p-4 cursor-pointer hover:bg-yogoGreen hover:bg-opacity-25 transition duration-300 ease-in-out"
            onClick={() => handleFeeSelect('4만원대')}
          >
            <p>4만원대</p>
          </div>
          <div
            className="border border-lightGray rounded-xl p-4 cursor-pointer hover:bg-yogoGreen hover:bg-opacity-25 transition duration-300 ease-in-out"
            onClick={() => handleFeeSelect('5만원대')}
          >
            <p>5만원대</p>
          </div>
          <div
            className="border border-lightGray rounded-xl p-4 cursor-pointer hover:bg-yogoGreen hover:bg-opacity-25 transition duration-300 ease-in-out"
            onClick={() => handleFeeSelect('6만원대')}
          >
            <p>6만원대</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeSelection;
