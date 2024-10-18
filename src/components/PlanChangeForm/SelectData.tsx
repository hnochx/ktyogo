'use client';

import Image from 'next/image';
import { useState } from 'react';
import images from '@/assets/images/planChange/selectDataImage';

export const dataRangeOptions: Record<string, string[]> = {
  '1GB ~ 10GB': ['1.8GB', '2.5GB', '5GB', '6GB', '8GB', '10GB'],
  '11GB ~ 40GB': ['11GB', '15GB', '20GB', '24GB', '25GB', '30GB', '35GB', '36GB', '40GB'],
  '80GB ~ 300GB': ['80GB', '100GB', '110GB', '120GB', '160GB', '200GB', '250GB', '300GB'],
  무제한: ['무제한'],
};

const dataOptions = ['1GB ~ 10GB', '11GB ~ 40GB', '80GB ~ 300GB', '무제한'];

interface ISelectData {
  onSelect: (option: string) => void;
}

export default function DataPlanSelect({ onSelect }: ISelectData) {
  const [selectedPlan, setSelectedPlan] = useState<string>('전체 용량');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (option: string) => {
    setSelectedPlan(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative">
      <div
        className="flex flex-row border border-gray-300 rounded-lg w-full h-[50px] items-center justify-between px-5 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-row gap-3 items-center">
          <Image src={images.graph} alt="graph" width={20} height={20} />
          <p className="text-sm text-medium_gray">월 데이터</p>
          <p className="font-bold ">{selectedPlan}</p>
        </div>

        <div className="flex items-center">
          {isOpen ? (
            <Image src={images.up} alt="상승" width={15} height={15} />
          ) : (
            <Image src={images.down} alt="하락" width={15} height={15} />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-lg w-full shadow-lg">
          {dataOptions.map((option: string, index: number) => (
            <div
              key={index}
              className="px-4 py-2 cursor-pointer border-b border-neutral-200"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
