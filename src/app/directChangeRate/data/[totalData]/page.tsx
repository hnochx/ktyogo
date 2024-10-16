import SKT_Logo from '@/assets/images/planChange/SKT_Logo.png';
import LGU_Logo from '@/assets/images/planChange/LGU_Logo.png';
import Image from 'next/image';
import OtherPlanSummay from '@/components/PlanChangeDetail/OthersPlanSummary';
const TotalData = ({ params }: { params: { totalData: string } }) => {
  return (
    <div className="p-5 pt-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">월 40GB {params.totalData}</h1>
        <p className="text-lg font-semibold">타 통신사와 비교해볼까요?</p>
      </div>
      <div className="border-t border-gray-200 my-5 " />
      <div className="flex flex-row items-center gap-2 my-3">
        <Image src={LGU_Logo} alt="LGU로고" width={25} height={25} />
        <p className="text-base font-semibold">LGU 요금제</p>
      </div>
      <OtherPlanSummay />
      <div className="border-t border-gray-200 my-5 " />
      <div className="flex flex-row items-center gap-2 my-3">
        <Image src={SKT_Logo} alt="SKT로고" width={25} height={25} />
        <p className="text-base font-semibold">SKT 요금제</p>
      </div>
      <OtherPlanSummay />
    </div>
  );
};

export default TotalData;
