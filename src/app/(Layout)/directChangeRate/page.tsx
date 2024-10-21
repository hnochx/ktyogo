'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import DataPlanSelect, { dataRangeOptions } from '@/components/PlanChangeForm/SelectData';
import fetchPlan from '../../../services/planServices';
import FilterHandler from '@/components/PlanChangeForm/FilterHandler';
import SortButton from '@/components/PlanChangeForm/SortButton';
import PlanSummary from '@/components/PlanChangeForm/PlanSummary';
import FilterForm from '@/components/PlanChangeForm/FilterForm';
import { PlanData, PlanMeta } from '@/types/types';
import images from '@/assets/images/planChange/directChangeRateImage';
import { sortPlansByData } from '@/components/PlanChangeForm/SortData';

interface SelectedState {
  selectedMno: string[];
  selectedNets: string;
}

const DirectChangeRate = () => {
  const [data, setData] = useState<PlanData[] | null>(null);
  const [filteredPlans, setFilteredPlans] = useState<PlanMeta[]>([]);
  const [allFilteredPlans, setAllFilteredPlans] = useState<PlanMeta[]>([]);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedAll, setSelectedAll] = useState<SelectedState>({
    selectedMno: [],
    selectedNets: '',
  });

  const [initialFilteredPlans, setInitialFilteredPlans] = useState<PlanMeta[]>([]);

  useEffect(() => {
    const getPlans = async () => {
      const planList = await fetchPlan('g0vgJer9zDCnuz5ZgxuH');
      setData(planList);
      const allPlans = planList.flatMap((plan) => plan.planMetas);
      setAllFilteredPlans(allPlans);
      setInitialFilteredPlans(allPlans);
      setFilteredPlans(allPlans);
    };

    getPlans();
  }, []);

  const handleDataFilter = (selectedData: string) => {
    if (!selectedData || !data) return;

    const range = dataRangeOptions[selectedData];
    let filtered: PlanMeta[];

    if (!range) {
      filtered = allFilteredPlans;
    } else {
      filtered = allFilteredPlans.filter((planMeta) => range.includes(planMeta.mobileDataStr!));
    }

    setInitialFilteredPlans(filtered);
    setFilteredPlans(filtered);
    setSelectedAll({ selectedMno: [], selectedNets: '' });
  };

  const handleFilterChange = (selectedMno: string[], selectedNets: string) => {
    const finalFilteredPlans = FilterHandler({
      filteredPlans: initialFilteredPlans,
      selectedMno,
      selectedNets,
    });

    setFilteredPlans(finalFilteredPlans);
    setSelectedAll({
      selectedMno,
      selectedNets,
    });
  };

  const toggleFilter = () => {
    setIsFilterVisible((prev) => !prev);
  };

  const handleSortByData = (isAscending: boolean) => {
    const sortedPlans = sortPlansByData(filteredPlans, isAscending);
    setFilteredPlans(sortedPlans);
  };

  return (
    <div className="min-h-full px-5 mx-auto pb-5">
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
      <div className="flex flex-row justify-between items-center text-medium_gray *:text-sm mb-4">
        <p>{filteredPlans.length}개의 결과</p>
        {selectedAll.selectedMno.length > 0 && selectedAll.selectedNets ? (
          <>
            <div>
              <p className="flex flex-row">
                <h1 className="pr-1">{selectedAll.selectedMno.join(' , ')}</h1> | {selectedAll.selectedNets}
              </p>
            </div>
          </>
        ) : null}
      </div>
      {filteredPlans.length > 0 ? (
        filteredPlans.map((plan) => <PlanSummary key={`${plan.mno}-${plan.mobileDataStr}-${plan.name}`} plan={plan} />)
      ) : (
        <p className="text-medium_gray text-center">선택한 필터의 결과값이 없습니다. </p>
      )}
    </div>
  );
};

export default DirectChangeRate;
