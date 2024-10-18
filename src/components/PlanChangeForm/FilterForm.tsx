'use client';
import { useState, useEffect } from 'react';
import { ArrowPathIcon, XMarkIcon } from '@heroicons/react/24/outline';
import CheckBox from './CustomCheckBox';
import RadioButton from './RadioButton';

interface IFilterProps {
  toggleFilter: () => void;
  onFilterChange: (selectedMno: string[], selectedNets: string, selectedData: string) => void;
}

const telecomOptions = ['KT', 'SKT', 'LGU'];
const mobileDataTotal = ['1~10GB', '11GB ~ 100GB', '110GB ~ 300GB', '무제한'];
const netOptions = ['5G', 'LTE'];

const FilterForm = ({ toggleFilter, onFilterChange }: IFilterProps) => {
  const [selectedMno, setSelectedMno] = useState<string[]>([]);
  const [selectedNets, setSelectedNets] = useState<string>('');
  const [selectedData, setSelectedData] = useState<string>('');

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

  const handleApply = () => {
    onFilterChange(selectedMno, selectedNets, selectedData);

    toggleFilter();
  };

  const handleCheckboxChange = (setSelected: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    setSelected((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  };

  const handleRadioChange = (setSelected: React.Dispatch<React.SetStateAction<string>>, value: string) => {
    setSelected(value); // 단일 값을 설정
  };

  const handleReset = () => {
    setSelectedMno([]);
    setSelectedNets('');
    setSelectedData('');
  };

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
            <h1 className="font-bold text-lg mb-5">통신사</h1>
            {telecomOptions.map((option) => (
              <CheckBox
                key={option}
                option={option}
                checked={selectedMno.includes(option)}
                onChange={() => handleCheckboxChange(setSelectedMno, option)}
              />
            ))}
          </div>

          <div className="border-t border-lightGray my-5" />

          <div className="space-y-2">
            <h1 className="font-bold text-lg mb-5">망 종류</h1>
            {netOptions.map((option) => (
              <RadioButton
                key={option}
                option={option}
                checked={selectedNets.includes(option)}
                onChange={() => handleRadioChange(setSelectedNets, option)} // 수정된 부분
              />
            ))}
          </div>

          <div className="border-t border-lightGray my-5" />

          <div className="space-y-2">
            <h1 className="font-bold text-lg mb-5">총 제공되는 데이터 용량</h1>
            {mobileDataTotal.map((option) => (
              <RadioButton
                key={option}
                option={option}
                checked={selectedData.includes(option)}
                onChange={() => handleRadioChange(setSelectedData, option)} // 수정된 부분
              />
            ))}
          </div>

          <div className="fixed bottom-0 left-0 right-0 flex flex-row items-center justify-between bg-white p-4 shadow-lg">
            <div className="flex flex-row items-center gap-2" onClick={handleReset}>
              <ArrowPathIcon className="h-8 w-8" />
              <span>초기화</span>
            </div>
            <button className="bg-black text-white text-lg w-[255px] h-[50px] rounded-lg" onClick={handleApply}>
              적용하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterForm;
