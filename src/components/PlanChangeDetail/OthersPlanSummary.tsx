import Image from 'next/image';
import LGU_Logo from '@/assets/images/planChange/LGU_Logo.png';

const OtherPlanSummay = ({}) => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="w-full flex flex-col p-3 rounded-lg border border-lightGray mb-3 gap-1">
          <div className="flex flex-row items-center gap-2">
            <Image src={LGU_Logo} alt="KT_LOGO" width={15} height={25} />
            <p className="text-xs text-lightGray">요고 44</p>
            <p className="text-xl font-bold">월 40GB + 1Mbps</p>
          </div>

          <div className="text-xs flex flex-row gap-3 text-medium_gray">
            <span>통화 무제한</span> | <span>문자 무제한</span> | <span>KT 망</span> | <span>5G</span>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <p className="text-blue-600 text-xl font-bold">월 44,000원</p>
          </div>
        </div>
        <button className="text-red-600 text-xs">더보기</button>
      </div>
    </>
  );
};

export default OtherPlanSummay;
