'use client';

import Image from 'next/image';
import { useState } from 'react';
import KT_1 from '@/assets/images/planChange/KT_1.png';
import gift_7 from '@/assets/images/planChange/gift_7.png';
import starbucks_4 from '@/assets/images/planChange/starbucks_4.png';
import naver_5 from '@/assets/images/planChange/naver_5.png';
import Vector from '@/assets/images/planChange/Vector.png';
import FeeInfo from './FeeInfo';
import DataInfo from './DataInfo';

const KTPlanSummary = () => {
  const [click, setClick] = useState(false);
  const [showDataInfo, setShowDataInfo] = useState(false);
  const [showFeeInfo, setShowFeeInfo] = useState(false);

  const [position, setPosition] = useState({ left: '0px', top: '0px' });

  const showDataClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setShowDataInfo((prev) => !prev);

    const newLeft = `${event.clientX - 100}px`; // 클릭한 위치의 X좌표
    const newTop = ` ${event.clientY + window.scrollY - 55}px`;
    setPosition({ left: newLeft, top: newTop });
  };

  const showFeeClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setShowFeeInfo((prev) => !prev);

    const newLeft = `${event.clientX - 100}px`; // 클릭한 위치의 X좌표
    const newTop = ` ${event.clientY + window.scrollY - 100}px`;
    setPosition({ left: newLeft, top: newTop });
  };

  const btnClick = () => {
    setClick((prev) => !prev);
  };

  return (
    <>
      <div className="w-full flex flex-col p-3 rounded-lg border border-lightGray mb-3 gap-1">
        <div className="flex flex-row items-center gap-2">
          <Image src={KT_1} alt="KT_LOGO" width={15} height={25} />
          <p className="text-xs text-lightGray">요고 44</p>
        </div>

        <DataInfo position={position} showDataInfo={showDataInfo} />

        <div className="flex flex-row gap-2 items-center relative">
          <p className="text-xl font-bold">월 40GB + 1Mbps</p>
          <Image
            src={Vector}
            height={13}
            width={13}
            alt="안내사항"
            className="cursor-pointer"
            onClick={showDataClick}
          />
        </div>

        <div className="text-xs flex flex-row gap-3 text-medium_gray">
          <span>통화 무제한</span> | <span>문자 무제한</span> | <span>KT 망</span> | <span>5G</span>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <p className="text-blue-600 text-xl font-bold">월 44,000원</p>
          <Image src={Vector} height={13} width={13} alt="안내사항" className="cursor-pointer" onClick={showFeeClick} />
        </div>

        <FeeInfo position={position} showFeeInfo={showFeeInfo} />

        <button className="text-red-600 text-xs" onClick={btnClick}>
          더보기
        </button>

        {click && (
          <div className="text-xs text-medium_gray mt-2 flex flex-col gap-2">
            <div className="border-t border-medium_gray my-3" />
            <div className="flex flex-row gap-2">
              <Image src={starbucks_4} alt="스타벅스로고" width={20} height={20} />
              <Image src={naver_5} alt="네이버로고" width={20} height={20} />
              <Image src={gift_7} alt="선물이미지" width={20} height={20} />
              <span className="text-xs text-lightGray">사은품 최대 6개</span>
            </div>
            <p>네이버페이 총 6만원 증정 (3개월간 분할 지급)</p>
            <p>스타벅스 커피 쿠폰 (1잔 x 24개월)</p>
            <p>쿠폰 2천원 X 24개월 증정 (GS25, 배민 등)</p>
            <p>Y덤 혜택 (기본 데이터 2배 제공 / 40GB+40GB)</p>
            <p>메가커피 쿠폰 2만원</p>
            <p>티빙 무료 (12개월간)</p>
          </div>
        )}
      </div>
    </>
  );
};

export default KTPlanSummary;
