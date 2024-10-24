'use client';

import { useEffect, useState } from 'react';
import CarrierSelection from '@/components/Recommend/CarrierSelection';
import DataAmountSelection from '@/components/Recommend/DataAmountSelection';
import FeeSelection, { FeeRangeOptions } from '@/components/Recommend/FeeSelection';
import fetchPlan from '@/services/planServices';
import { PlanData, PlanMeta } from '@/types/types';
import { dataRangeOptions } from '@/components/PlanChangeForm/SelectData';
import PlanSummary from '@/components/PlanChangeForm/PlanSummary';
import RecommendSkeleton from '@/components/Recommend/RecommendSkeleton';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Recommendation = () => {
  const [data, setData] = useState<PlanData[] | null>(null);
  const [selectedCarrier, setSelectedCarrier] = useState<string | null>('');
  const [selectedDataAmount, setSelectedDataAmount] = useState<string | null>('');
  const [selectedFee, setSelectedFee] = useState<string | null>('');
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [filteredPlans, setFilteredPlans] = useState<PlanMeta[]>([]);
  const [showSkeleton, setShowSkeleton] = useState<boolean>(false);
  const [displayedPlans, setDisplayedPlans] = useState<PlanMeta[]>([]); // 현재 표시된 요금제
  const [visibleCount, setVisibleCount] = useState<number>(10); // 표시할 요금제 개수

  useEffect(() => {
    const getPlans = async () => {
      const planList = await fetchPlan('g0vgJer9zDCnuz5ZgxuH');
      setData(planList);
    };

    getPlans();
  }, []);

  useEffect(() => {
    if (data) {
      const allPlans = data.flatMap((plan) => plan.planMetas);
      setShowSkeleton(true);

      const filtered = allPlans.filter((plan) => {
        const matchesCarrier = plan.mno === selectedCarrier;
        const range = selectedDataAmount ? dataRangeOptions[selectedDataAmount] : null;
        const matchesDataRange = range ? range.includes(plan.mobileDataStr!) : true;
        const feeRange = selectedFee ? FeeRangeOptions[selectedFee] : null;
        const matchesFee = feeRange ? feeRange.includes(plan.fee.toString()) : true;

        return matchesCarrier && matchesDataRange && matchesFee;
      });

      setTimeout(() => {
        setFilteredPlans(filtered);
        setDisplayedPlans(filtered.slice(0, visibleCount)); // 초기 표시 개수만큼 설정
        setShowSkeleton(false);
      }, 2000);
    }
  }, [data, selectedCarrier, selectedDataAmount, selectedFee]);

  const handleCarrierSelect = (carrier: string) => {
    setSelectedCarrier(carrier);
    setCurrentStep(1);
  };

  const handleDataAmountSelect = (amount: string) => {
    setSelectedDataAmount(amount);
    setCurrentStep(2);
  };

  const handleFeeSelect = (fee: string) => {
    setSelectedFee(fee);
    setCurrentStep(3);
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10); // 10개씩 추가
    setDisplayedPlans(filteredPlans.slice(0, visibleCount + 10)); // 현재 표시 개수 업데이트
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <CarrierSelection onCarrierSelect={handleCarrierSelect} />;
      case 1:
        return <DataAmountSelection onDataAmountSelect={handleDataAmountSelect} onPrevious={() => setCurrentStep(0)} />;
      case 2:
        return <FeeSelection onFeeSelect={handleFeeSelect} onPrevious={() => setCurrentStep(1)} />;
      case 3:
        return (
          <div className="p-4">
            {showSkeleton ? (
              <RecommendSkeleton />
            ) : (
              <>
                <div className="mb-3">
                  <div className="bg-gray-100 p-3 rounded-lg shadow-md">
                    <p className="text-center text-base font-semibold ">
                      선택하신 <br />
                      <span className="font-bold text-yogoGreen">{selectedCarrier}</span>
                      <span className="text-lightGray mx-2">/</span>
                      <span className="font-bold text-yogoGreen">{selectedDataAmount}</span>
                      <span className="text-lightGray mx-2">/</span>
                      <span className="font-bold text-yogoGreen">{selectedFee}</span>
                      <br /> 에 해당하는 요금제 입니다.
                    </p>
                  </div>
                </div>
                {displayedPlans.length > 0 ? (
                  <>
                    <ul className="flex flex-col">
                      {displayedPlans.map((plan) => (
                        <PlanSummary key={`${plan.mno}-${plan.mobileDataStr}-${plan.name}`} plan={plan} />
                      ))}
                    </ul>
                    {filteredPlans.length > displayedPlans.length && (
                      <div className="flex justify-center mt-4">
                        <button onClick={handleLoadMore} className="p-2 text-white  text-center rounded">
                          <ChevronDownIcon className="size-10 text-black" />
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <p>조건에 맞는 요금제가 없습니다.</p>
                )}
              </>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return <>{renderCurrentStep()}</>;
};

export default Recommendation;
