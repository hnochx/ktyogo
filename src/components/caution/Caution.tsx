'use client';

import { useState } from 'react';
import Image from 'next/image';
import { notify, open, close } from '@/assets/images/caution/images';

export const Caution = () => {
  const [openSections, setOpenSections] = useState({ section1: false, section2: false });

  const toggleSection = (section: 'section1' | 'section2') => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="h-full mt-[12vw]">
      <h2 className="flex items-center justify-center gap-[2vw] text-[4.5vw]">
        <Image src={notify} alt="notify" className="w-[6vw] h-[6vw]" />꼭 확인하세요.
      </h2>
      <ul className="mt-[4vw]">
        <div>
          <div>
            <li
              onClick={() => toggleSection('section1')}
              className="w-full h-[15vw] bg-[#E9E9E9] border-t-[0.4vw] border-[#cbcbcb] flex items-center justify-between"
            >
              <h2 className="font-bold pl-[4vw] text-[4.5vw]">※ 요고 요금제 유의사항</h2>
              <Image src={openSections.section1 ? close : open} alt="Toggle" className="w-[5vw] h-[4vw] mr-[4vw]" />
            </li>
          </div>
          <div
            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
              openSections.section1 ? 'max-h-[1000px]' : 'max-h-0'
            }`}
          >
            <div className="text-[3vw] p-[5vw] text-[#333333]">
              <li className="relative before:content-['•'] before:absolute before:-left-[2vw]">
                KT닷컴에서만 가입 가능한 온라인 전용 요금제입니다.
              </li>
              <li className="relative before:content-['•'] before:absolute before:-left-[2vw]">
                본 요금제는 약정이 없는 요금제로 약정 혜택(단말할인 지원금, 선택약정할인(요금 25% 할인))을 받을 수
                없습니다.
              </li>
              <li className="relative before:content-['•'] before:absolute before:-left-[2vw]">
                약정이 만료된 고객님만 요고 요금제 가입이 가능합니다. 기존 약정이 있으신 경우 요고 요금제 가입을 위해
                기존 약정이 해지되며 잔여 위약금은 청구됩니다.
              </li>
              <li className="relative before:content-['•'] before:absolute before:-left-[2vw]">
                요금제를 월 중 가입 또는 변경하는 경우, 변경 시점부터 요금제 월정액 및 기본제공(데이터, 영상통화)량을
                각각 일자 별 계산하여 제공합니다.
              </li>
              <li className="relative before:content-['•'] before:absolute before:-left-[2vw]">
                이용 가능한 결합 할인 서비스는 결합상품 페이지 및 결합 약관을 참고하시기 바랍니다.
              </li>
              <li className="relative before:content-['•'] before:absolute before:-left-[2vw]">
                초이스/플러스 혜택은 요금제 가입 일자 기준으로 최대 24개월간 제공되며, ‘나중에 선택하기‘ 선택 시에도
                24개월 혜택 기간에 포함됩니다.
              </li>
              <li className="relative before:content-['•'] before:absolute before:-left-[2vw]">
                초이스/플러스 혜택은 각 월 1회 변경 가능합니다.
              </li>
              <li className="relative before:content-['•'] before:absolute before:-left-[2vw]">
                요금제에 기본으로 제공되거나 함께 사용할 수 있는 부가/기타 서비스의 상세 내용은 KT닷컴 내 서비스별 안내
                페이지를 참고하세요.
              </li>
              <li className="relative before:content-['•'] before:absolute before:-left-[2vw]">
                이용하시는 요금제에 따라 초이스, 플러스 혜택이 제공됩니다.
              </li>
            </div>
          </div>
        </div>

        <div>
          <div>
            <li
              onClick={() => toggleSection('section2')}
              className="w-full h-[15vw] bg-[#E9E9E9] border-t-[0.4vw] border-[#cbcbcb] flex items-center justify-between"
            >
              <h2 className="font-bold pl-[4vw] text-[4.5vw]">※ 스타벅스 커피 이벤트 유의사항</h2>
              <Image src={openSections.section2 ? close : open} alt="Toggle" className="w-[5vw] h-[4vw] mr-[4vw]" />
            </li>
          </div>
          <div
            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
              openSections.section2 ? 'max-h-[1000px]' : 'max-h-0'
            }`}
          >
            <div className="text-[3vw] p-[4vw] text-[#333333]">
              <li className="relative before:content-['•'] before:absolute before:-left-[2vw]">
                KT닷컴에서 8월 24일부터 요고 요금제로 개통한 고객님 대상 (핸드폰 개통 또는 유심단독 개통 포함) 이며,
                다른 요금제에서 요고 요금제로 변경한 고객은 제외입니다.(5월1일 ~ 8월 23일은 5G 요고 요금제 중 요고
                37,000원 이상 개통한 고객 대상)
              </li>
              <li className="relative before:content-['•'] before:absolute before:-left-[2vw]">
                스타벅스 쿠폰 발송일은개통 완료 후 “최초” 쿠폰팩 발송부터 최대 24개월까지 매월 스타벅스 이용권 추가 증정
              </li>
              <li className="relative before:content-['•'] before:absolute before:-left-[2vw]">
                기본적으로 선택하는 쿠폰팩 외에 추가로 증정하는 이벤트입니다.
              </li>
              <li className="relative before:content-['•'] before:absolute before:-left-[2vw]">
                해당 스타벅스 제공 이벤트는 요고 요금제로 개통하고 유지 시 최대 24개월 제공되며, 다른 요금제로 변경 시
                스타벅스 이용권 제공은 불가합니다.
              </li>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Caution;
