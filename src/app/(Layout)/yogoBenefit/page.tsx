'use client';

import Image from 'next/image';
import {
  yogo_benefit_1,
  yogo_benefit_10,
  yogo_benefit_11,
  yogo_benefit_12,
  yogo_benefit_2,
  yogo_benefit_3,
  yogo_introduce,
  yogo_logo,
} from '@/assets/images/yogoBenefit/images';
import LinkComponent from '@/components/LinkComponent';
import PlanCalc from '@/components/planCalc/PlanCalc';
import { useEffect, useState } from 'react';
import { KTfetchPlans } from '@/services/ktplanService';
import { KTPlan } from '@/types/types';
import Link from 'next/link';
import Caution from '@/components/caution/Caution';
import BenefitLinkMove from '@/components/yogoBenefit/BenefitLinkMove';

const YogoBenefit = () => {
  const [planList, setPlanList] = useState<KTPlan[]>([]); // 전체 요금제 플랜 리스트

  // 요금제 데이터 불러와 정렬하기
  useEffect(() => {
    const getPlans = async () => {
      const planList = await KTfetchPlans();
      planList.sort((a, b) => {
        const feeA = parseInt(a.monthly_fee.replace(/[^0-9]/g, ''), 10);
        const feeB = parseInt(b.monthly_fee.replace(/[^0-9]/g, ''), 10);
        return feeA - feeB;
      });
      setPlanList(planList);
    };
    getPlans();
  }, []);

  return (
    <>
      <Image src={yogo_benefit_1} alt="다이랙트 요금제 요고" className="w-[100%]" />

      <div className="py-[8vw]">
        <Image src={yogo_benefit_2} alt="요금제 고민 끝! 내게 맞는 요금제를 만들어보세요" className="w-[100%]" />
        {/* 요금 계산 들어갈 부분 */}
        <div className="mx-[4.5vw] my-[6vw]">
          <PlanCalc list={planList} />
        </div>

        <div
          className="flex items-center px-[5vw] py-[6vw] rounded-[25px] mx-[4.5vw] justify-center"
          style={{ background: 'linear-gradient(107deg, #DFFFFC, #EBF0FF, #FFECF1)' }}
        >
          <Image src={yogo_logo} alt="요고뭉치" className="w-[28vw]" />
          <p className="text-[3.8vw]">
            <em className=" not-italic" style={{ background: 'linear-gradient(to top, #7DFFFF 40%, transparent 40%)' }}>
              인터넷, TV도
              <br /> 무약정
            </em>
            으로 결합하고 싶다면?
          </p>
        </div>

        <div className="mt-[10vw] my-[6vw]">
          <LinkComponent />
        </div>
      </div>
      {/* 요고를 소개합니다 들어갈 부분 */}
      <div
        style={{
          backgroundImage: `url(${yogo_introduce.src})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className=" h-[120vw] relative">
          <div>
            <div className="absolute top-[30vw] left-1/2 transform -translate-x-1/2">
              <iframe
                className="w-[50.40vw] h-[90.67vw] rounded-[5vw]"
                src="https://www.youtube.com/embed/EEKovGsbLWg"
              ></iframe>
              <h1 className="text-[#00cbb3] text-center text-[4.5vw] mt-[6vw]">요금은 줄이고 혜택은 가득한 요고!!</h1>
            </div>
          </div>
        </div>

        <div className="h-[145vw] flex justify-evenly bg-[#f1ffff]">
          <div className="flex flex-wrap justify-center gap-[2vw] mt-[28vw]">
            <div className="w-[44vw] h-[82vw]">
              <iframe className="w-full h-full rounded-[5vw]" src="https://www.youtube.com/embed/RStVl4lilxM"></iframe>
              <h2 className="text-[#00cbb3] text-center text-[4.5vw] mt-[6vw]">요고 69 (시즌2)</h2>
            </div>
            <div className="w-[44vw] h-[82vw] rounded-[5vw]">
              <iframe className="w-full h-full rounded-[5vw]" src="https://www.youtube.com/embed/bxFI64dzg1E"></iframe>
              <h2 className="text-[#00cbb3] text-center text-[4.5vw] mt-[6vw]">요고 30 (시즌2)</h2>
            </div>
          </div>
        </div>
      </div>
      <Image src={yogo_benefit_3} alt="요고 이렇게 좋아졌어요" className="w-[100%]" />
      {/* 요고 혜택간 링크 이동 */}
      <BenefitLinkMove />
      <Image src={yogo_benefit_10} alt="알뜰폰과 비교해서도 요고라고요" className="w-[100%]" />
      <div className="relative">
        <Image src={yogo_benefit_12} alt="약정 걱정 없이 통신비 할인" className="w-[100%]" />
        <Link
          href="https://m.shop.kt.com:444/m/display/olhsPlan.do?plnDispNo=2389"
          className="top-[80%] left-[5%] w-[90%] h-[10%] absolute text-[0px]"
        >
          요고 뭉치 자세히 보기
        </Link>
      </div>
      <div className="relative">
        <Image src={yogo_benefit_11} alt="더 좋아진 요고 시즌2" className="w-[100%]" />
        <Link
          href="https://m.shop.kt.com:444/m/display/olhsPlan.do?plnDispNo=2388"
          className="absolute block top-[66%] left-[4%] w-[24%] h-[22%] text-[0px]"
        >
          자세히 보기
        </Link>
      </div>
      <Caution />
    </>
  );
};
export default YogoBenefit;
