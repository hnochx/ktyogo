'use client';

import Image from 'next/image';
import images from '@/assets/images/planChange/directChangeRateImage';
import DataPlanSelect from '@/components/PlanChangeForm/SelectData';
import { useEffect, useState } from 'react';
import FilterForm from '@/components/PlanChangeForm/FilterForm';
import { PlanData, PlanMeta } from '@/types/types';
import PlanSummary from '@/components/PlanChangeForm/PlanSummary';
import fetchPlan from '../services/planServices';
import FilterHandler from '@/components/PlanChangeForm/FilterHandler';
import SortButton from '@/components/PlanChangeForm/SortButton';

const DirectChangeRate = () => {
  const [data, setData] = useState<PlanData[] | null>(null);
  const [filteredPlans, setFilteredPlans] = useState<PlanMeta[]>([]);
  const [allFilteredPlans, setAllFilteredPlans] = useState<PlanMeta[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<string>('전체 용량');
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  useEffect(() => {
    const getPlans = async () => {
      const planList = await fetchPlan('g0vgJer9zDCnuz5ZgxuH');
      setData(planList);
      setAllFilteredPlans(planList.flatMap((plan) => plan.planMetas));
    };

    getPlans();
  }, []);

  const handleDataFilter = (selectedData: string) => {
    setSelectedPlan(selectedData);
    if (!selectedData || !data) return;

    const filtered =
      selectedData === '전체 용량'
        ? allFilteredPlans
        : allFilteredPlans.filter((planMeta) => planMeta.mobileDataStr === selectedData);

    setFilteredPlans(filtered);
  };

  const handleFilterChange = (selectedMno: string[], selectedNets: string, selectedData: string) => {
    const finalFilteredPlans = FilterHandler({
      allFilteredPlans,
      selectedMno,
      selectedNets,
      selectedData,
    });

    setFilteredPlans(finalFilteredPlans);
  };

  const toggleFilter = () => {
    setIsFilterVisible((prev) => !prev);
  };

  const handleSortByData = (isAscending: boolean) => {
    const sortedPlans = [...filteredPlans].sort((a, b) => {
      const dataA = parseInt(a.mobileDataStr!);
      const dataB = parseInt(b.mobileDataStr!);

      if (isNaN(dataA) || isNaN(dataB)) return 0;
      return isAscending ? dataA - dataB : dataB - dataA; // 오름차순 또는 내림차순 정렬
    });

    setFilteredPlans(sortedPlans);
  };

  return (
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
        <Image src={images.planChangeMain} alt="요고 이미지" width={200} height={150} />
      </div>
      <div className="border-t border-medium_gray mb-5" />
      <DataPlanSelect onSelect={handleDataFilter} />
      <div className="flex flex-row mt-5 gap-2 justify-end">
        <SortButton onSort={handleSortByData} />
        <div className="flex flex-row gap-2 rounded-full border border-gray-300 w-20 h-10 justify-center items-center">
          <Image src={images.control} height={15} width={15} alt="control" />
          <p className="text-sm text-medium_gray cursor-pointer" onClick={toggleFilter}>
            필터
          </p>
        </div>
        {isFilterVisible && <FilterForm toggleFilter={toggleFilter} onFilterChange={handleFilterChange} />}
      </div>
      <div className="border-t border-lightGray my-4" />
      <div className="flex flex-row justify-between items-center text-medium_gray text-sm mb-4">
        <p>{filteredPlans.length}개의 결과</p>
      </div>
      {filteredPlans.length > 0
        ? filteredPlans.map((plan) => (
            <PlanSummary key={`${plan.mno}-${plan.mobileDataStr}-${plan.name}`} plan={plan} />
          ))
        : selectedPlan === '전체 용량' && <p className="text-medium_gray text-center">어떤 요금제가 딱 맞을까요? </p>}
    </div>
  );
};

export default DirectChangeRate;
