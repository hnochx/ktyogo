import Image from 'next/image';
import message from '@/assets/images/planChange/message.png';
import Polygon_1 from '@/assets/images/planChange/Polygon_1.png';
import { PlanMeta } from '@/types/types';

interface IDataInfoProps {
  position: { left: string; top: string };
  showDataInfo: boolean;
  plan: PlanMeta;
}

const DataInfo = ({ position, showDataInfo, plan }: IDataInfoProps) => {
  if (!showDataInfo) return null;

  return (
    <div className="flex flex-col items-center z-10 absolute" style={{ left: position.left, top: position.top }}>
      <div className="relative">
        <Image src={message} height={100} width={200} alt="message" />
        <p className="absolute inset-0 flex items-center justify-center text-xs text-white p-2">
          {plan.speedWhenExhaustedDescription}
        </p>
      </div>
      <Image src={Polygon_1} height={10} width={10} alt="안내사항" />
    </div>
  );
};

export default DataInfo;
