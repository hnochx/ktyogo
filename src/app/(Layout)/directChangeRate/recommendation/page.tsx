'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import CarrierSelection from '@/components/Recommend/CarrierSelection';
import DataAmountSelection from '@/components/Recommend/DataAmountSelection';
import FeeSelection, { FeeRangeOptions } from '@/components/Recommend/FeeSelection';
import fetchPlan from '@/services/planServices';
import { PlanData } from '@/types/types';
import { dataRangeOptions } from '@/components/PlanChangeForm/SelectData';
import PlanSummary from '@/components/PlanChangeForm/PlanSummary';
import RecommendSkeleton from '@/components/Recommend/RecommendSkeleton';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Recommendation = () => {
  const [data, setData] = useState<PlanData[] | null>(null);
  const [selectedCarrier, setSelectedCarrier] = useState<string | null>(null);
  const [selectedDataAmount, setSelectedDataAmount] = useState<string | null>(null);
  const [selectedFee, setSelectedFee] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [visibleCount, setVisibleCount] = useState<number>(10);
  const [showSkeleton, setShowSkeleton] = useState<boolean>(true);

  useEffect(() => {
    const getPlans = async () => {
      const planList = await fetchPlan('g0vgJer9zDCnuz5ZgxuH');
      setData(planList);
    };

    getPlans();
  }, []);

  const filteredPlans = useMemo(() => {
    if (!data) return [];
    const allPlans = data.flatMap((plan) => plan.planMetas);

    return allPlans.filter((plan) => {
      const matchesCarrier = selectedCarrier ? plan.mno === selectedCarrier : true;
      const dataRange = selectedDataAmount ? dataRangeOptions[selectedDataAmount] : null;
      const matchesDataRange = dataRange ? dataRange.includes(plan.mobileDataStr!) : true;
      const feeRange = selectedFee ? FeeRangeOptions[selectedFee] : null;
      const matchesFee = feeRange ? feeRange.includes(plan.fee.toString()) : true;

      return matchesCarrier && matchesDataRange && matchesFee;
    });
  }, [data, selectedCarrier, selectedDataAmount, selectedFee]);

  useEffect(() => {
    setShowSkeleton(true);
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [filteredPlans]);

  const displayedPlans = useMemo(() => filteredPlans.slice(0, visibleCount), [filteredPlans, visibleCount]);

  const handleCarrierSelect = useCallback((carrier: string) => {
    setSelectedCarrier(carrier);
    setCurrentStep(1);
  }, []);

  const handleDataAmountSelect = useCallback((amount: string) => {
    setSelectedDataAmount(amount);
    setCurrentStep(2);
  }, []);

  const handleFeeSelect = useCallback((fee: string) => {
    setSelectedFee(fee);
    setCurrentStep(3);
  }, []);

  const handleLoadMore = useCallback(() => {
    setVisibleCount((prevCount) => prevCount + 10);
  }, []);

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
          <div className="p-4 min-h-[43vh]">
            {showSkeleton ? (
              <RecommendSkeleton />
            ) : (
              <>
                <div className="mb-3">
                  <div className="bg-gray-100 p-3 rounded-lg shadow-md">
                    <p className="text-center text-base font-semibold">
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
                    <div className="flex justify-end">
                      <Link href={'/directChangeRate'} className="bg-yogoGreen text-sm py-1 px-2 rounded-md text-white">
                        더 많은 요금제 보러가기
                      </Link>
                    </div>

                    {filteredPlans.length > displayedPlans.length && (
                      <div className="flex justify-center mt-4">
                        <button onClick={handleLoadMore} className="p-2 text-white text-center rounded">
                          <ChevronDownIcon className="size-10 text-black" />
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center mt-5 p-6 bg-gray-50 rounded-lg shadow-md border border-lightGray gap-4">
                    <p className="text-lg text-gray-600 font-semibold text-center">조건에 맞는 요금제가 없습니다.</p>
                    <p className="text-sm text-gray-400 text-center">
                      다른 요금 조건을 선택하거나 <br /> 더 많은 옵션을 확인해보세요.
                    </p>
                    <button
                      onClick={() => setCurrentStep(0)}
                      className="bg-yogoGreen text-sm py-1 px-2 rounded-md text-white"
                    >
                      다른 요금제 찾으러 가기
                    </button>
                  </div>
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
