'use client';

import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface DataAmountSelectionProps {
  onDataAmountSelect: (amount: string) => void; // onDataAmountSelect의 타입 정의
  onPrevious: () => void;
}

const DataAmountSelection = ({ onDataAmountSelect, onPrevious }: DataAmountSelectionProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDataAmountSelect = (amount: string) => {
    setIsVisible(false);
    setTimeout(() => {
      onDataAmountSelect(amount);
    }, 300);
  };

  const optionArr = [
    {
      text: '주로 와이파이를 사용해요.',
      dataRange: '1GB ~ 10GB',
    },
    {
      text: '가끔 웹 서핑하고 메시지를 주고받아요.',
      dataRange: '11GB ~ 20GB',
    },
    {
      text: '주로 소셜 미디어와 스트리밍을 즐겨요.',
      dataRange: '21GB ~ 40GB',
    },
    {
      text: '이동 중에 영화를 자주 봐요.',
      dataRange: '80GB ~ 300GB',
    },
    {
      text: '매일 게임과 영상을 즐겨해요.',
      dataRange: '무제한',
    },
  ];

  return (
    <div className={`p-3 bg-gray-100 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-center flex flex-col gap-8 m-2 pt-5 pb-20 px-5 bg-white rounded-xl shadow-lg  h-[665px]">
        <div className="flex flex-col gap-5">
          <ChevronLeftIcon className="size-6" onClick={onPrevious} />
          <p className="text-2xl text-start">
            평소에 데이터를
            <br />
            얼마나 사용하시나요?
          </p>
        </div>
        <div className="flex flex-row gap-2">
          <span
            className="w-1/3 h-1.5 bg-yogoGreen
          rounded-sm"
          />
          <span className="w-1/3 h-1.5 rounded-sm bg-yogoGreen" />
          <span className="w-1/3 h-1.5 rounded-sm bg-gray-200" />
        </div>
        <div className="flex flex-col gap-2 text-start">
          {optionArr.map((option, index) => (
            <div
              key={index}
              className="border border-lightGray rounded-xl p-4 cursor-pointer hover:bg-yogoGreen hover:bg-opacity-25 transition duration-300 ease-in-out"
              onClick={() => handleDataAmountSelect(option.dataRange)}
            >
              <p>{option.text}</p>
              <p className="text-sm text-lightGray font-semibold ">{option.dataRange}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataAmountSelection;
