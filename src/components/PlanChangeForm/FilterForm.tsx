'use client';
import { useState, useEffect } from 'react';
import { ArrowPathIcon, XMarkIcon } from '@heroicons/react/24/outline';
import CheckBox from './CustomCheckBox';

interface IFilterProps {
  toggleFilter: () => void;
}

const priceOptions = ['2만원대', '3만원대', '4만원대', '5만원대', '6만원대'];
const mobileDataTotal = ['0~10GB', '10GB ~ 100GB', '110GB ~ 300GB', '무제한'];
const netOptions = ['5G', 'LTE'];

const FilterForm = ({ toggleFilter }: IFilterProps) => {
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [selectedNets, setSelectedNets] = useState<string[]>([]);
  const [selectedData, setSelectedData] = useState<string[]>([]);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const onClick = () => {
    setIsMounted(false);
    setTimeout(() => {
      toggleFilter();
    }, 500);
  };

  const handleCheckboxChange = (setSelected: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    setSelected((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  };

  const handleReset = () => {
    setSelectedPrices([]);
    setSelectedNets([]);
    setSelectedData([]);
  };

  // const handleApply = () => {
  //   console.log('선택한 기본 요금:', selectedPrices);
  //   console.log('선택한 망 종류:', selectedNets);
  //   console.log('선택한 데이터 용량:', selectedData);
  // };

  return (
    <>
      <div className="mx-auto h-full px-5 fixed inset-0 z-10 bg-gray-800 bg-opacity-50" onClick={onClick} />
      <div
        className={`fixed top-0  mx-auto left-0 z-20 h-screen w-full  bg-white transform transition-transform duration-500 ease-in-out ${
          isMounted ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center">
            <div className="flex-1 text-center">
              <h1 className="font-bold text-lg">필터</h1>
            </div>
            <XMarkIcon className="size-8" onClick={onClick} />
          </div>
          <div className="border-t border-medium_gray mt-3 mb-5" />

          <div className="space-y-2">
            <h1 className="font-bold text-lg mb-5">기본 요금</h1>
            {priceOptions.map((option) => (
              <CheckBox
                key={option}
                option={option}
                checked={selectedPrices.includes(option)}
                onChange={() => handleCheckboxChange(setSelectedPrices, option)}
              />
            ))}
          </div>

          <div className="border-t border-lightGray my-5" />

          <div className="space-y-2">
            <h1 className="font-bold text-lg mb-5">망 종류</h1>
            {netOptions.map((option) => (
              <CheckBox
                key={option}
                option={option}
                checked={selectedNets.includes(option)}
                onChange={() => handleCheckboxChange(setSelectedNets, option)}
              />
            ))}
          </div>

          <div className="border-t border-lightGray my-5" />

          <div className="space-y-2">
            <h1 className="font-bold text-lg mb-5">총 제공되는 데이터 용량</h1>
            {mobileDataTotal.map((option) => (
              <CheckBox
                key={option}
                option={option}
                checked={selectedData.includes(option)}
                onChange={() => handleCheckboxChange(setSelectedData, option)}
              />
            ))}
          </div>

          <div className="fixed bottom-0 left-0 right-0 flex flex-row items-center justify-between bg-white p-4 shadow-lg">
            <div className="flex flex-row items-center gap-2" onClick={handleReset}>
              <ArrowPathIcon className="h-8 w-8" />
              <span>초기화</span>
            </div>
            <button className="bg-black text-white text-lg w-[255px] h-[50px] rounded-lg">적용하기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterForm;
