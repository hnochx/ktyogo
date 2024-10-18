'use client';

import Image from 'next/image';
import earth from '@/assets/images/planChange/earth.png';
import messageIcon from '@/assets/images/planChange/messageIcon.png';
import giftIcon from '@/assets/images/planChange/gift_7.png';
import graph_b from '@/assets/images/planChange/graph_b.png';
import phoneIcon from '@/assets/images/planChange/phoneIcon.png';
import naverIcon from '@/assets/images/planChange/naver_5.png';
import starbucksIcon from '@/assets/images/planChange/starbucks_4.png';

import Vector from '@/assets/images/planChange/Vector.png';
import { useEffect, useState } from 'react';
import fetchPlan from '@/app/services/planServices';
import { PlanData } from '@/types/types';
import FeeInfo from '@/components/PlanChangeForm/FeeInfo';
import formatToDateString from '@/lib/utils';

interface PlanDetailProps {
  params: {
    name: string;
  };
}

const PlanDetail = ({ params }: PlanDetailProps) => {
  const { name } = params; // Extract name directly from params
  const [datas, setDatas] = useState<PlanData[] | null>(null);
  const [showFeeInfo, setShowFeeInfo] = useState(false); // Declare hooks at the top level
  const [position, setPosition] = useState({ left: '0px', top: '0px' });

  useEffect(() => {
    const getPlans = async () => {
      const planList = await fetchPlan('g0vgJer9zDCnuz5ZgxuH');
      // console.log('Fetched Plans:', planList);
      setDatas(planList);
    };

    getPlans();
  }, []);

  // Ensure to decode the name
  const filteredPlan = datas?.flatMap((data) =>
    data.planMetas.filter((plan) => plan.name === decodeURIComponent(name)),
  )[0];

  if (!filteredPlan) {
    return <div>해당 요금제를 찾을 수 없습니다.</div>;
  }

  // Extract the details
  const details = [
    { label: '요금제 이름', value: `${filteredPlan.mno} | ${filteredPlan.name}` },
    { label: '통신사 약정', value: filteredPlan.isEsim ? '있음' : '없음' },
    { label: '데이터 제공량', value: `월 ${filteredPlan.mobileDataStr}` },
    { label: '데이터 소진 시', value: `${filteredPlan.speedWhenExhaustedDescription}` },
    { label: '부가통화', value: filteredPlan.mobileVoice === 9999 ? '무제한' : `${filteredPlan.mobileVoice}분` },
    { label: '번호 이동 수수료', value: '없음' },
    { label: '일반 유심 배송', value: filteredPlan.isSupportUsimOrder ? '지원' : '지원 안함' },
    { label: 'eSIM', value: filteredPlan.isEsim ? '지원' : '지원 안함' },
  ];

  const features = [
    {
      src: phoneIcon,
      alt: '핸드폰아이콘',
      text: filteredPlan.mobileVoice === 9999 ? '무제한' : `${filteredPlan.mobileVoice}분`,
    },
    {
      src: messageIcon,
      alt: '메시지아이콘',
      text: filteredPlan.mobileMessage === 9999 ? '무제한' : `${filteredPlan.mobileMessage}분`,
    },
    { src: earth, alt: '지구아이콘', text: filteredPlan.mno },
    { src: graph_b, alt: '그래프아이콘', text: filteredPlan.net },
  ];

  const getImageByCategory = (category: string) => {
    switch (category) {
      case 'naver':
        return naverIcon; // 네이버 아이콘
      case 'gift':
        return giftIcon; // 넷플릭스 아이콘
      case 'starbucks':
        return starbucksIcon;
      default:
        return giftIcon;
    }
  };

  const showFeeClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setShowFeeInfo((prev) => !prev);
    const newLeft = `${event.clientX - 100}px`; // 클릭한 위치의 X좌표
    const newTop = `${event.clientY + window.scrollY - 100}px`;
    setPosition({ left: newLeft, top: newTop });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen p-8">
      <div className="w-full">
        <h1 className="text-xl font-bold mt-10">월 {filteredPlan.mobileDataStr}</h1>
        <p className="text-medium_gray text-sm mb-5">{filteredPlan.speedWhenExhaustedDescription}</p>
        <div className="flex row gap-5 items-center">
          {features.map(({ src, alt, text }) => (
            <div key={alt} className="flex flex-row items-center gap-1 text-sm">
              <Image src={src} alt={alt} width={15} height={15} />
              <span className="text-xs text-medium_gray">{text}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 my-5" />
        <h2 className="font-semibold text-base mb-8">요금제 상세정보</h2>
        {details.map(({ label, value }) => (
          <div key={label} className="flex flex-row justify-between text-sm mt-4">
            <span className="text-medium_gray">{label}</span>
            <span className="text-blue-500">{value}</span>
          </div>
        ))}
        <div className="border-t border-gray-200 my-5" />
        <div>
          <p className="text-base font-bold">사은품 및 이벤트</p>
          <div className="flex flex-row justify-start items-center gap-4 border border-gray-200 rounded-lg p-5 mt-2">
            {/* 카테고리에 따라 이미지를 선택합니다. */}
            <Image
              src={
                filteredPlan.giftList && filteredPlan.giftList.length > 0
                  ? getImageByCategory(filteredPlan.giftList[0].category)
                  : naverIcon
              }
              alt="아이콘"
              width={30}
              height={30}
            />

            {filteredPlan.giftList && filteredPlan.giftList.length > 0 ? (
              <div className="flex flex-col gap-3">
                <h1>
                  {filteredPlan.giftList[0].description && (
                    <>
                      {filteredPlan.giftList[0].description.split(/\s*\(/).map((part, index) => (
                        <span key={index}>
                          {index === 0 ? (
                            part.trim()
                          ) : (
                            <>
                              <br />({part.trim().replace(/\)$/, '')})
                            </>
                          )}
                        </span>
                      ))}
                    </>
                  )}
                </h1>

                <p className="text-xs text-lightGray">지급 시기 : {filteredPlan.giftList[0].receiptDate}</p>
                <p className="text-xs text-lightGray">
                  이벤트 마감일 : {formatToDateString(filteredPlan.giftList[0].endDate)}
                </p>
              </div>
            ) : (
              <p className="text-xs text-lightGray">이벤트가 없습니다.</p>
            )}
          </div>

          <div className="flex flex-row justify-between my-10 items-center">
            <p className="text-sm text-blue-600 font-semibold">월 {filteredPlan.feeString}</p>
            <div className="flex flex-row gap-4 justify-center items-center">
              <Image src={Vector} alt="vector" width={12} height={12} onClick={showFeeClick} />
              <FeeInfo position={position} showFeeInfo={showFeeInfo} plan={filteredPlan} />
              <a href={filteredPlan.signupUrl} target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-600 text-sm font-medium px-10 text-white rounded-md h-10 cursor-pointer">
                  신청하기
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetail;
