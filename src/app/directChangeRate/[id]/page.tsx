'use client';

import Image from 'next/image';
import earth from '@/assets/images/planChange/earth.png';
import messageIcon from '@/assets/images/planChange/messageIcon.png';
import graph_b from '@/assets/images/planChange/graph_b.png';
import phoneIcon from '@/assets/images/planChange/phoneIcon.png';
import naverIcon from '@/assets/images/planChange/naver_5.png';
import Vector from '@/assets/images/planChange/Vector.png';
import { useState } from 'react';
import FeeInfo from '@/components/PlanChangeForm/FeeInfo';

interface PlanDetailProps {
  params: {
    id: number;
  };
}

const PlanDetail = ({ params: { id } }: PlanDetailProps) => {
  const features = [
    { src: phoneIcon, alt: '핸드폰아이콘', text: '무제한' },
    { src: messageIcon, alt: '메시지아이콘', text: '무제한' },
    { src: earth, alt: '지구아이콘', text: 'KT망' },
    { src: graph_b, alt: '그래프아이콘', text: '5G' },
  ];

  const details = [
    { label: '요금제 이름', value: 'KT | 요고 44' },
    { label: '통신사 약정', value: '없음' },
    { label: '데이터 제공량', value: '월 40GB' },
    { label: '데이터 소진시', value: '1mbps 속도로 무제한' },
    { label: '부가통화', value: '300분' },
    { label: '번호이동 수수료', value: '없음' },
    { label: '일반 유심 배송', value: '지원 안함' },
    { label: 'NFC 유심 배송', value: '유료(7,700원)' },
    { label: 'eSIM', value: '지원 안 함' },
  ];

  const [showFeeInfo, setShowFeeInfo] = useState(false);

  const [position, setPosition] = useState({ left: '0px', top: '0px' });

  const showFeeClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setShowFeeInfo((prev) => !prev);

    const newLeft = `${event.clientX - 100}px`; // 클릭한 위치의 X좌표
    const newTop = ` ${event.clientY + window.scrollY - 100}px`;
    setPosition({ left: newLeft, top: newTop });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen p-8">
      <div className=" w-full  ">
        <h1 className="text-lg font-bold mt-10">월 40GB{id}</h1>

        <p className="text-medium_gray text-sm mb-5">데이터 다 써도 음악재생 가능(1Mbps)</p>
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
            <Image src={naverIcon} alt="네이버 아이콘" width={30} height={30} />
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold">
                네이버페이 총 6만원 증정
                <br />
                (3개월간 분할 지급)
              </span>
              <p className="text-xs text-lightGray">대상 : 개통 완료 시</p>
              <p className="text-xs text-lightGray">지급시기 : 개통 익월 20일</p>
            </div>
          </div>
          <FeeInfo position={position} showFeeInfo={showFeeInfo} />

          <div className="flex flex-row justify-between my-10 items-center">
            <p className="text-sm text-blue-600 font-semibold">월 44,000원</p>
            <div className="flex flex-row gap-4 justify-center items-center">
              <Image src={Vector} alt="vector" width={12} height={12} onClick={showFeeClick} />
              <a href=" https://shop.kt.com:444/direct/select.do?befIntmUsimUseYn=N&sbscType=02&pplGroupType=yogo&pplGroupId=510&pplId=0943&channel=moyo&cmpid=shop_wless_240924-productlist-product_usim-moyo">
                <button className="bg-blue-600 text-sm font-medium px-10 text-white rounded-md h-10">신청하기</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetail;
