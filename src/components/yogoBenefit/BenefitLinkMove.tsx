'use client';
import {
  yogo_benefit_4,
  yogo_benefit_5,
  yogo_benefit_6,
  yogo_benefit_7,
  yogo_benefit_8,
  yogo_benefit_9,
} from '@/assets/images/yogoBenefit/images';
import Image from 'next/image';
import BenefitLinkBtns from './BenefitLinkBtns';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const BenefitLinkMove = () => {
  const [isStickyVisible, setStickyVisible] = useState(false); // 링크버튼이 보여지는 여부
  const [activeSection, setActiveSection] = useState(''); // 현재 보이는 섹션 id
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({}); // 여러 섹션 참조

  // 스크롤 감지
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setStickyVisible(true);
          } else if (activeSection === entry.target.id) {
            setStickyVisible(false);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      },
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [activeSection]);

  // 커스텀 스크롤 이동 함수
  const scrollToSection = (id: string) => {
    const section = sectionRefs.current[id];
    if (section) {
      const offset = 100; // 실높이보다 더 올라가는 정도
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* 스크롤시 나타나는 링크 버튼 */}
      <BenefitLinkBtns
        className={`fixed top-[20px] z-[99] transition-all duration-500 ${
          isStickyVisible ? 'translate-y-[35px]' : '-translate-y-[120px] opacity-0'
        }`}
        active={activeSection}
        onLinkClick={scrollToSection}
      />
      <div className="relative">
        <Image src={yogo_benefit_4} alt="yogo" className="w-[100%]" />
        <button
          className="w-[37.33%] h-[27.38%] block absolute top-[25%] left-[10%] text-[0px]"
          onClick={() => scrollToSection('link1')}
        >
          초이스 플러스
        </button>
        <button
          className="w-[37.33%] h-[27.38%] block absolute top-[25%] right-[10%] text-[0px]"
          onClick={() => scrollToSection('link2')}
        >
          데이터 추가 혜택
        </button>
        <button
          className="w-[37.33%] h-[27.38%] block absolute top-[59%] left-[10%] text-[0px]"
          onClick={() => scrollToSection('link3')}
        >
          멤버십 프로모션
        </button>
        <button
          className="w-[37.33%] h-[27.38%] block absolute top-[59%] right-[10%] text-[0px]"
          onClick={() => scrollToSection('link4')}
        >
          KT 쿠폰팩 혜택
        </button>
      </div>

      {/* 링크 버튼이 나타나는 부분 */}
      <div
        id="link1"
        ref={(el) => {
          sectionRefs.current['link1'] = el;
        }}
        className={`relative transition-all duration-700 ease-out transform ${
          activeSection === 'link1' ? 'translate-y-0' : 'translate-y-10'
        }`}
      >
        <Image src={yogo_benefit_5} alt="더욱 강력해진 시즌2" className="w-[100%]" />
        <Link
          className="block absolute top-[81%] left-[10%] w-[80%] h-[5%] text-[0px]"
          href="https://m.product.kt.com/mDic/productDetail.do?ItemCode=1567&benefit=season2"
        >
          혜택 자세히 보기
        </Link>
      </div>

      <div
        id="link2"
        ref={(el) => {
          sectionRefs.current['link2'] = el;
        }}
        className={`transition-all duration-700 ease-out transform ${
          activeSection === 'link2' ? 'translate-y-0' : 'translate-y-10'
        }`}
      >
        <Image src={yogo_benefit_6} alt="잍이터가 최대 3배" className="w-[100%]" />
        <div className="px-[7vw] overflow-x-scroll bg-[#f1fffe] pb-[50px]">
          <Image src={yogo_benefit_7} alt="yogo" className="w-[150%] max-w-none" />
        </div>
      </div>

      <div
        ref={(el) => {
          sectionRefs.current['link3'] = el;
        }}
        id="link3"
        className={`transition-all duration-700 ease-out transform ${
          activeSection === 'link3' ? 'translate-y-0' : 'translate-y-10'
        }`}
      >
        <Image src={yogo_benefit_8} alt="요고 멤버쉽 혜택" className="w-[100%]" />
      </div>

      <div
        ref={(el) => {
          sectionRefs.current['link4'] = el;
        }}
        id="link4"
        className={`transition-all duration-700 ease-out transform ${
          activeSection === 'link4' ? 'translate-y-0' : 'translate-y-10'
        }`}
      >
        <Image src={yogo_benefit_9} alt="쿠폰팩 혜택" className="w-[100%]" />
      </div>
    </>
  );
};

export default BenefitLinkMove;
