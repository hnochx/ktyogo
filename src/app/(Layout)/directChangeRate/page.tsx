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
import PlanChangeSkeleton from '@/components/PlanChangeForm/PlanChangeSkeleton';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

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
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

  // 현재 보여주고 있는 항목의 개수
  const [itemsToShow, setItemsToShow] = useState(10);

  useEffect(() => {
    const getPlans = async () => {
      try {
        const planList = await fetchPlan('g0vgJer9zDCnuz5ZgxuH');
        setData(planList);
        const allPlans = planList.flatMap((plan) => plan.planMetas);
        setAllFilteredPlans(allPlans);
        setInitialFilteredPlans(allPlans);
        setFilteredPlans(allPlans);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
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
    setItemsToShow(10); // 필터링 시 초기 항목 수를 10으로 설정
    setSelectedAll({ selectedMno: [], selectedNets: '' });
  };

  const handleFilterChange = (selectedMno: string[], selectedNets: string) => {
    const finalFilteredPlans = FilterHandler({
      filteredPlans: initialFilteredPlans,
      selectedMno,
      selectedNets,
    });

    setFilteredPlans(finalFilteredPlans);
    setItemsToShow(10); // 필터링 시 초기 항목 수를 10으로 설정
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

  // 더보기 버튼 클릭 핸들러
  const handleShowMore = () => {
    setItemsToShow((prev) => prev + 10); // 항목 수 증가
  };

  return (
    <div className="min-h-full px-5 mx-auto pb-5">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-2 mt-3">
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

          <div>
            <Link
              href="/directChangeRate/recommendation"
              className="bg-yogoGreen px-2 py-2 text-xs text-white rounded-xl"
            >
              나만의 요금제 찾기
            </Link>
          </div>
        </div>
        <Image src={images.planChangeMain} alt="요고 이미지" width={180} height={180} />
      </div>
      <div className="border-t border-lightGray my-4" />
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

      {isLoading ? (
        <PlanChangeSkeleton />
      ) : filteredPlans.length > 0 ? (
        <>
          <div className="flex flex-row justify-between items-center text-medium_gray *:text-sm mb-4">
            <p>{filteredPlans.length}개의 결과</p>
            {selectedAll.selectedMno.length > 0 && selectedAll.selectedNets ? (
              <div>
                <p className="flex flex-row">
                  <h1 className="pr-1">{selectedAll.selectedMno.join(' , ')}</h1> | {selectedAll.selectedNets}
                </p>
              </div>
            ) : null}
          </div>
          {filteredPlans.slice(0, itemsToShow).map((plan) => (
            <PlanSummary key={`${plan.mno}-${plan.mobileDataStr}-${plan.name}`} plan={plan} />
          ))}
          {itemsToShow < filteredPlans.length && (
            <div className="flex justify-center mt-4">
              <button onClick={handleShowMore} className="p-2 text-white  text-center rounded">
                <ChevronDownIcon className="size-10 text-black" />
              </button>
            </div>
          )}
        </>
      ) : (
        // 데이터가 없을 때
        <p className="text-medium_gray text-center">데이터가 없습니다.</p>
      )}
    </div>
  );
};

export default DirectChangeRate;
