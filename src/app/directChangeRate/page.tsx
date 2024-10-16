'use client';

import Image from 'next/image';
import Image_63 from '@/assets/images/planChange/image_63.png';
import Group_6 from '@/assets/images/planChange/Group_6.png';
import Group_8 from '@/assets/images/planChange/Group_8.png';
import LGU_Logo from '@/assets/images/planChange/LGU_Logo.png';
import SKT_Logo from '@/assets/images/planChange/SKT_Logo.png';

import DataPlanSelect from '@/components/PlanChangeForm/SelectData';
import { useState } from 'react';
import FilterForm from '@/components/PlanChangeForm/FilterForm';
import Link from 'next/link';
import KTPlanSummary from '@/components/PlanChangeForm/KTPlanSummary';

const DirectChangeRate = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilter = () => {
    setIsFilterVisible((prev) => !prev);
  };
  return (
    <>
      <div className="h-full px-5  mx-auto ">
        <div className="flex flex-row justify-center items-center">
          <div>
            <h1 className="text-yogoGreen text-sm font-semibold">요고 요금제 변경</h1>
            <p className="font-bold text-lg flex gap-0">
              자급제폰 KT고객님
              <br />
              알뜰한 요금제
              <br />
              요고로 변경하세요.
            </p>
          </div>
          <Image src={Image_63} alt="요고 이미지" width={200} height={150} />
        </div>
        <div className="border-t border-medium_gray mb-5 " />
        <DataPlanSelect />
        <div className="flex flex-row mt-5 gap-2 justify-end">
          <div className="flex flex-row gap-2 rounded-full border border-gray-300 w-20 h-10 justify-center items-center">
            <Image src={Group_6} height={15} width={15} alt="up&down" />
            <p className="text-sm text-medium_gray cursor-pointer">추천순</p>
          </div>
          <div className="flex flex-row gap-2 rounded-full border border-gray-300 w-20 h-10 justify-center items-center">
            <Image src={Group_8} height={15} width={15} alt="up&down" />
            <p className="text-sm text-medium_gray cursor-pointer" onClick={toggleFilter}>
              필터
            </p>
          </div>
          {isFilterVisible && <FilterForm toggleFilter={toggleFilter} />}
        </div>
        <div className="border-t border-lightGray my-4 " />
        <div className="flex flex-row justify-between items-center *:text-medium_gray *:text-sm mb-4">
          <p>13개의 결과 </p>
          <Link
            href={`directChangeRate/data`}
            className="flex flex-row items-center gap-2  border p-2 border-lightGray rounded-xl"
          >
            <Image src={SKT_Logo} alt="SKT로고" width={15} height={15} />
            <Image src={LGU_Logo} alt="LGU로고" width={15} height={15} />
            <p>와 비교하러 가기</p>
          </Link>
        </div>
        <KTPlanSummary />
      </div>
    </>
  );
};

export default DirectChangeRate;
