// components/PlanChangeDetail/FeeInfo.tsx
import Image from 'next/image';
import Group_34 from '@/assets/images/planChange/Group_34.png';

interface IFeeInfoProps {
  position: { left: string; top: string };
  showFeeInfo: boolean;
}

const FeeInfo = ({ position, showFeeInfo }: IFeeInfoProps) => {
  if (!showFeeInfo) return null;

  return (
    <div className="flex flex-col items-center z-10 absolute" style={{ left: position.left, top: position.top }}>
      <div className="relative">
        <Image src={Group_34} height={100} width={200} alt="안내사항" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white gap-1">
          <div className="flex flex-row gap-3 mb-2 text-center">
            <div className="flex flex-col">
              <p className="mb-1">12개월 요금 총액</p>
              <p>총 528,000원</p>
            </div>
            <div className="flex flex-col">
              <p className="mb-1">24개월 요금 총액</p>
              <p>총 1,056,000원</p>
            </div>
          </div>
          <p className="mb-1">이 요금제는 약정이 없어요</p>
        </div>
      </div>
    </div>
  );
};

export default FeeInfo;
