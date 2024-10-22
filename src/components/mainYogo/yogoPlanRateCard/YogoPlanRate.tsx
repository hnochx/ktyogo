'use client';

import Image from 'next/image';
import images from '@/assets/images/yogoRatePlan/images';
import { useEffect, useState } from 'react';

import { KTPlan } from '@/types/types';
import { PlusIcon } from '@heroicons/react/24/outline';
import { KTfetchPlans } from '@/services/ktplanService';
import YogoPlanCard from './YogoPlanCard';

const YogoPlanRate = () => {
  const [ktPlans, setKtPlans] = useState<KTPlan[] | null>(null);
  const [showAll, setShowAll] = useState(false); // 더보기 상태 추가

  useEffect(() => {
    const getKTPlans = async () => {
      const planList = await KTfetchPlans();
      setKtPlans(planList);
    };

    getKTPlans();
  }, []);

  const filteredPlans = ktPlans
    ?.filter((ktPlan) => {
      const planName = ktPlan.plan_name;
      return ['요고 30 (시즌 2)', '요고 40 (시즌 2)', '요고 55 (시즌 2)', '요고 69 (시즌 2)'].includes(planName);
    })
    .sort((a, b) => {
      const feeA = parseInt(a.monthly_fee.replace(/[^0-9]/g, ''));
      const feeB = parseInt(b.monthly_fee.replace(/[^0-9]/g, ''));
      return feeA - feeB;
    });

  const otherPlans = ktPlans
    ?.filter((ktPlan) => {
      return !filteredPlans?.some((filteredPlan) => filteredPlan.plan_name === ktPlan.plan_name);
    })
    .sort((a, b) => {
      const feeA = parseInt(a.monthly_fee.replace(/[^0-9]/g, ''));
      const feeB = parseInt(b.monthly_fee.replace(/[^0-9]/g, ''));
      return feeA - feeB;
    });

  return (
    <>
      <div className="bg-[#F5F1E8] w-full py-14 px-5  ">
        <div className="flex flex-col justify-center items-center text-center gap-3">
          <div className="text-2xl font-semibold flex flex-col justify-center">
            <p>나에게 맞는 </p>
            <div className="flex flex-row gap-2 justify-center">
              <Image src={images.yogoLogo} alt="yogoLogo" width={50} height={40} />
              <span>요금제는?</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <span className="bg-yogoGreen px-2 py-0.5 text-white rounded-sm text-xs">Y덤 혜택</span>
            <span className="text-neutral-700 text-base">34세 이하는 데이터 2배 적용!</span>
          </div>
        </div>
        <div className="pt-8">
          {filteredPlans && filteredPlans.map((ktPlan) => <YogoPlanCard key={ktPlan.plan_name} ktPlan={ktPlan} />)}
        </div>
        {filteredPlans && !showAll && (
          <div className="flex justify-center mt-4">
            <button
              className="bg-white text-black px-2 py-2 flex flex-row items-center text-center border rounded-lg border-medium_gray"
              onClick={() => setShowAll(true)}
            >
              요고 요금제 모두 보기 <PlusIcon className="size-6 font-bold" />
            </button>
          </div>
        )}
        {showAll && otherPlans && (
          <div className="pt-5">
            {otherPlans.map((ktPlan) => (
              <YogoPlanCard key={ktPlan.plan_name} ktPlan={ktPlan} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default YogoPlanRate;
