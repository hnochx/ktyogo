'use client';

import Image from 'next/image';
import planChangeMain from '@/assets/images/planChange/planChangeMain.png';
import control from '@/assets/images/planChange/control.png';
import rise_fall from '@/assets/images/planChange/rise_fall.png';
import DataPlanSelect from '@/components/PlanChangeForm/SelectData';
import { useEffect, useState } from 'react';
import FilterForm from '@/components/PlanChangeForm/FilterForm';
import { PlanData, PlanMeta } from '@/types/types';
import fetchPlan from '../services/planServices';
import PlanSummary from '@/components/PlanChangeForm/PlanSummary';

const DirectChangeRate = () => {
  const [data, setData] = useState<PlanData[] | null>(null);
  const [filteredPlans, setFilteredPlans] = useState<PlanMeta[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<string>('전체 용량');

  useEffect(() => {
    const getPlans = async () => {
      const planList = await fetchPlan('g0vgJer9zDCnuz5ZgxuH');
      // console.log('Fetched Plans:', planList);
      setData(planList);
    };

    getPlans();
  }, []);

  const handleDataFilter = (selectedData: string) => {
    setSelectedPlan(selectedData);

    if (!selectedData || !data) {
      return;
    }

    if (selectedData === '전체 용량') {
      setFilteredPlans([]); // 빈 배열로 설정
      return;
    }

    const filtered = data.flatMap((plan) =>
      plan.planMetas.filter((planMeta) => planMeta.mobileDataStr === selectedData),
    );

    //console.log('Filtered Plans:', filtered);
    setFilteredPlans(filtered);
  };

  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilter = () => {
    setIsFilterVisible((prev) => !prev);
  };

  return (
    <>
      <div className="min-h-full px-5 mx-auto mb-5">
        <div className="flex flex-row justify-around items-center">
          <div>
            <h1 className="text-yogoGreen text-sm font-semibold">요금제 변경</h1>
            <p className="font-bold text-lg flex gap-0">
              3사 통신사를
              <br />
              비교하고
              <br />
              알뜰 요금제로
              <br />
              변경하세요.
            </p>
          </div>
          <Image src={planChangeMain} alt="요고 이미지" width={200} height={150} />
        </div>
        <div className="border-t border-medium_gray mb-5 " />

        <DataPlanSelect onSelect={handleDataFilter} />

        <div className="flex flex-row mt-5 gap-2 justify-end">
          <div className="flex flex-row gap-2 rounded-full border border-gray-300 w-20 h-10 justify-center items-center">
            <Image src={rise_fall} height={15} width={15} alt="rise_fall" />
            <p className="text-sm text-medium_gray cursor-pointer">추천순</p>
          </div>
          <div className="flex flex-row gap-2 rounded-full border border-gray-300 w-20 h-10 justify-center items-center">
            <Image src={control} height={15} width={15} alt="control" />
            <p className="text-sm text-medium_gray cursor-pointer" onClick={toggleFilter}>
              필터
            </p>
          </div>
          {isFilterVisible && <FilterForm toggleFilter={toggleFilter} />}
        </div>
        <div className="border-t border-lightGray my-4 " />
        <div className="flex flex-row justify-between items-center text-medium_gray text-sm mb-4">
          <p>{filteredPlans.length}개의 결과 </p>
        </div>

        {
          filteredPlans.length > 0
            ? filteredPlans.map((plan) => (
                <PlanSummary key={`${plan.mno}-${plan.mobileDataStr}-${plan.name}`} plan={plan} />
              ))
            : selectedPlan === '전체 용량' && <p className="text-medium_gray">결과가 없습니다.</p> // 전체 용량일 때 메시지
        }
      </div>
    </>
  );
};

export default DirectChangeRate;
