'use client';

import Image from 'next/image';
import {
  yogo_benefit_1,
  yogo_benefit_10,
  yogo_benefit_11,
  yogo_benefit_12,
  yogo_benefit_2,
  yogo_benefit_3,
  yogo_benefit_4,
  yogo_benefit_5,
  yogo_benefit_6,
  yogo_benefit_7,
  yogo_benefit_8,
  yogo_benefit_9,
  yogo_logo,
} from '@/assets/images/yogo-benefit/images';
import LinkComponent from '@/components/LinkComponent';
import PlanCalc from '@/components/planCalc/PlanCalc';
import { useEffect, useState } from 'react';
import { KTfetchPlans } from '@/services/ktplanService';
import { KTPlan } from '@/types/types';
import Link from 'next/link';

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
      <Image src={yogo_benefit_1} alt="yogo" />

      <div className="py-[8vw]">
        <Image src={yogo_benefit_2} alt="yogo" />
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
      <div></div>
      <Image src={yogo_benefit_3} alt="yogo" />
      <div className="relative">
        <Image src={yogo_benefit_4} alt="yogo" />
        <a href="#link1" className="w-[37.33%] h-[27.38%] block absolute top-[25%] left-[10%] text-[0px]">
          초이스 플러스
        </a>
        <a href="#link2" className="w-[37.33%] h-[27.38%] block absolute top-[25%] right-[10%]  text-[0px]">
          데이터 추가 혜택
        </a>
        <a href="#link3" className="w-[37.33%] h-[27.38%] block absolute top-[59%] left-[10%] text-[0px]">
          멤버십 프로모션
        </a>
        <a href="#link4" className="w-[37.33%] h-[27.38%] block absolute top-[59%] right-[10%] text-[0px]">
          KT 쿠폰팩 혜택
        </a>
      </div>
      <div className="relative">
        <Image src={yogo_benefit_5} alt="yogo" id="link1" />
        <a
          className="block absolute top-[81%] left-[10%] w-[80%] h-[5%] text-[0px]"
          href="https://m.product.kt.com/mDic/productDetail.do?ItemCode=1567&benefit=season2"
        >
          혜택 자세히 보기
        </a>
      </div>
      <Image src={yogo_benefit_6} alt="yogo" id="link2" />
      <div className="px-[7vw] overflow-x-scroll bg-[#f1fffe] pb-[50px]">
        <Image src={yogo_benefit_7} alt="yogo" className="w-[150%] max-w-none" />
      </div>
      <Image src={yogo_benefit_8} alt="yogo" id="link3" />
      <Image src={yogo_benefit_9} alt="yogo" id="link4" />
      <Image src={yogo_benefit_10} alt="yogo" />
      <div className="relative">
        <Image src={yogo_benefit_12} alt="yogo" />
        <Link
          href="https://m.shop.kt.com:444/m/display/olhsPlan.do?plnDispNo=2389"
          className="top-[80%] left-[5%] w-[90%] h-[10%] absolute text-[0px]"
        >
          요고 브랜드 스토리
        </Link>
      </div>
      <div className="relative">
        <Image src={yogo_benefit_11} alt="yogo" />
        <a
          href="https://m.shop.kt.com:444/m/display/olhsPlan.do?plnDispNo=2388"
          className="absolute block top-[66%] left-[4%] w-[24%] h-[22%] text-[0px]"
        >
          자세히 보기
        </a>
      </div>
    </>
  );
};
export default YogoBenefit;
