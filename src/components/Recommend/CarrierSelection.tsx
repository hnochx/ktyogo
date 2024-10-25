import { useState } from 'react';

interface CarrierSelectionProps {
  onCarrierSelect: (carrier: string) => void;
}

const CarrierSelection = ({ onCarrierSelect }: CarrierSelectionProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleCarrierSelect = (carrier: string) => {
    setIsVisible(false);
    setTimeout(() => {
      onCarrierSelect(carrier);
    }, 300);
  };

  return (
    <div className={`p-3 bg-gray-100 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-center flex flex-col gap-8 m-2 pt-10 pb-20 px-5 h-[665px] bg-white rounded-xl shadow-lg ">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <p className="text-2xl text-start">
              사용하고 싶은 <br />
              통신사를 선택해주세요.
            </p>
            <p className="text-sm text-start text-gray-500">여러분의 필요에 맞는 통신사를 선택하세요.</p>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <span className="w-1/3 h-1.5 rounded-sm bg-yogoGreen" />
          <span className="w-1/3  h-1.5 rounded-sm bg-gray-200" />
          <span className="w-1/3  h-1.5 rounded-sm bg-gray-200" />
        </div>
        <div className="flex flex-col gap-4 text-start">
          <div
            className="border border-lightGray rounded-xl p-4 cursor-pointer hover:bg-yogoGreen hover:bg-opacity-25 transition duration-300 ease-in-out"
            onClick={() => handleCarrierSelect('KT')}
          >
            <p className="text-lg font-semibold">KT</p>
          </div>
          <div
            className="border border-lightGray rounded-xl p-4 cursor-pointer hover:bg-yogoGreen hover:bg-opacity-25 transition duration-300 ease-in-out"
            onClick={() => handleCarrierSelect('SKT')}
          >
            <p className="text-lg font-semibold">SKT</p>
          </div>
          <div
            className="border border-lightGray rounded-xl p-4 cursor-pointer hover:bg-yogoGreen hover:bg-opacity-25 transition duration-300 ease-in-out"
            onClick={() => handleCarrierSelect('LGU')}
          >
            <p className="text-lg font-semibold">LGU</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrierSelection;
