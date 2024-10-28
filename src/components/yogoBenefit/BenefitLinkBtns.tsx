import { benefit_links } from '@/assets/images/yogoBenefit/images';

interface BenefitLinkBtnsProps {
  className: string;
  active: string;
  onLinkClick: (id: string) => void;
}

const BenefitLinkBtns = ({ className, active, onLinkClick }: BenefitLinkBtnsProps) => {
  return (
    <div className={`${className} flex w-[100vw] h-[14.8vw]`}>
      <button
        className="flex-1 text-center text-[0px]"
        onClick={() => onLinkClick('link1')}
        style={{
          backgroundImage: `url(${benefit_links.src})`,
          backgroundSize: '400% auto',
          backgroundPosition: active === 'link1' ? '0 100%' : '0 0',
          backgroundRepeat: 'no-repeat',
        }}
      >
        초이스 플러스
      </button>
      <button
        className="flex-1 text-center text-[0px]"
        onClick={() => onLinkClick('link2')}
        style={{
          backgroundImage: `url(${benefit_links.src})`,
          backgroundSize: '400% auto',
          backgroundPosition: active === 'link2' ? '33.3% 100%' : '33.3% 0',
          backgroundRepeat: 'no-repeat',
        }}
      >
        데이터 추가 혜택
      </button>
      <button
        className="flex-1 text-center text-[0px]"
        onClick={() => onLinkClick('link3')}
        style={{
          backgroundImage: `url(${benefit_links.src})`,
          backgroundSize: '400% auto',
          backgroundPosition: active === 'link3' ? '66.6% 100%' : '66.6% 0',
          backgroundRepeat: 'no-repeat',
        }}
      >
        멤버십 프로모션
      </button>
      <button
        className="flex-1 text-center text-[0px]"
        onClick={() => onLinkClick('link4')}
        style={{
          backgroundImage: `url(${benefit_links.src})`,
          backgroundSize: '400% auto',
          backgroundPosition: active === 'link4' ? '100% 100%' : '100% 0',
          backgroundRepeat: 'no-repeat',
        }}
      >
        KT 쿠폰팩 혜택
      </button>
    </div>
  );
};
export default BenefitLinkBtns;
