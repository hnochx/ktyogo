import Image from 'next/image';
import bigmessage from '@/assets/images/planChange/bigmessage.png';
import { PlanMeta } from '@/types/types';

interface IFeeInfoProps {
  position: { left: string; top: string };
  showFeeInfo: boolean;
  plan: PlanMeta;
}

const FeeInfo = ({ position, showFeeInfo, plan }: IFeeInfoProps) => {
  if (!showFeeInfo) return null;

  const twelveMonthFee = (plan.twMonthFee * 2).toLocaleString('ko');

  return (
    <div className="flex flex-col items-center z-10 absolute" style={{ left: position.left, top: position.top }}>
      <div className="relative">
        <Image src={bigmessage} height={100} width={200} alt="안내사항" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white gap-1">
          <div className="flex flex-row gap-3 mb-2 text-center">
            <div className="flex flex-col">
              <p className="mb-1">12개월 요금 총액</p>
              <p>총 {plan.twMonthFee.toLocaleString('ko')} 원</p>
            </div>
            <div className="flex flex-col">
              <p className="mb-1">24개월 요금 총액</p>
              <p>총 {twelveMonthFee} 원</p>
            </div>
          </div>
          <p className="mb-1">이 요금제는 약정이 없어요</p>
        </div>
      </div>
    </div>
  );
};

export default FeeInfo;
