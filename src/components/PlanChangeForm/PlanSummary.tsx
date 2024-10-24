'use client';

import Image from 'next/image';
import { useState } from 'react';
import images from '@/assets/images/planChange/planSummaryImage';
import FeeInfo from './FeeInfo';
import DataInfo from './DataInfo';
import { PlanMeta } from '@/types/types';
import Link from 'next/link';

interface KTPlanSummaryProps {
  plan: PlanMeta;
}

const PlanSummary = ({ plan }: KTPlanSummaryProps) => {
  const [click, setClick] = useState(false);
  const [showDataInfo, setShowDataInfo] = useState(false);
  const [showFeeInfo, setShowFeeInfo] = useState(false);
  const [position, setPosition] = useState({ left: '0px', top: '0px' });

  const handleMouseEnterData = (event: React.MouseEvent<HTMLImageElement>) => {
    setShowDataInfo(true);
    const newLeft = `${event.clientX - 100}px`;
    const newTop = `${event.clientY + window.scrollY - 55}px`;
    setPosition({ left: newLeft, top: newTop });
  };

  const handleMouseLeaveData = () => {
    setShowDataInfo(false);
  };

  const handleMouseEnterFee = (event: React.MouseEvent<HTMLImageElement>) => {
    setShowFeeInfo(true);
    const newLeft = `${event.clientX - 100}px`;
    const newTop = `${event.clientY + window.scrollY - 100}px`;
    setPosition({ left: newLeft, top: newTop });
  };

  const handleMouseLeaveFee = () => {
    setShowFeeInfo(false);
  };

  const btnClick = () => {
    setClick((prev) => !prev);
  };

  const renderLogo = () => {
    switch (plan.mno) {
      case 'KT':
        return <Image src={images.KT_Logo} alt="KT_LOGO" width={15} height={25} />;
      case 'LGU':
        return <Image src={images.LGU_Logo} alt="LGU_LOGO" width={15} height={25} />;
      case 'SKT':
        return <Image src={images.SKT_Logo} alt="SKT_LOGO" width={15} height={25} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full flex flex-col p-3 rounded-lg border border-lightGray mb-3 gap-1">
      <Link href={`/directChangeRate/${encodeURIComponent(plan.name)}`}>
        <div className="flex flex-row items-center gap-2">
          {renderLogo()}
          <p className="text-xs text-lightGray">{plan.name}</p>
        </div>

        <DataInfo position={position} showDataInfo={showDataInfo} plan={plan} />

        <div className="flex flex-row gap-2 items-center relative">
          <p className="text-xl font-bold">
            월 {plan.mobileDataStr} + {plan.speedWhenExhausted}Mbps
          </p>
          <Image
            src={images.Vector}
            height={13}
            width={13}
            alt="안내사항"
            className="cursor-pointer"
            onMouseEnter={handleMouseEnterData}
            onMouseLeave={handleMouseLeaveData}
          />
        </div>

        <div className="text-xs flex flex-row gap-3 text-medium_gray">
          <span>통화 {plan.mobileVoice === 9999 ? '무제한' : plan.mobileVoice}</span> |
          <span>문자 {plan.mobileMessage === 9999 ? '무제한' : plan.mobileVoice}</span> | <span>{plan.mno} 망</span> |{' '}
          <span>{plan.net}</span>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <p className="text-blue-600 text-xl font-bold">월 {plan.feeString} 원</p>
          <Image
            src={images.Vector}
            height={13}
            width={13}
            alt="안내사항"
            className="cursor-pointer"
            onMouseEnter={handleMouseEnterFee}
            onMouseLeave={handleMouseLeaveFee}
          />
        </div>

        <FeeInfo position={position} showFeeInfo={showFeeInfo} plan={plan} />
      </Link>

      {plan.giftList!.length > 0 && (
        <button className="text-red-600 text-xs mt-2" onClick={btnClick}>
          더보기
        </button>
      )}

      {click && (
        <div className="text-xs text-medium_gray flex flex-col gap-2">
          {plan.giftList!.length > 0 && (
            <>
              <div className="border-t border-medium_gray my-3" />
              <div className="flex flex-row gap-2">
                <Image src={images.starbucks_4} alt="스타벅스로고" width={20} height={20} />
                <Image src={images.naver_5} alt="네이버로고" width={20} height={20} />
                <Image src={images.gift_7} alt="선물이미지" width={20} height={20} />
                <span className="text-xs text-lightGray">사은품 최대 {plan.giftList?.length}</span>
              </div>
            </>
          )}
          <ul>
            {plan.giftList?.map((gift, index) => (
              <li key={index} className="text-xs text-medium_gray">
                {gift.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PlanSummary;
