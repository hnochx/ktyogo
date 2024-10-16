import Image from 'next/image';
import Group_10 from '@/assets/images/planChange/Group_10.png';
import Polygon_1 from '@/assets/images/planChange/Polygon_1.png';

interface IDataInfoProps {
  position: { left: string; top: string };
  showDataInfo: boolean;
}

const DataInfo = ({ position, showDataInfo }: IDataInfoProps) => {
  if (!showDataInfo) return null;

  return (
    <div className="flex flex-col items-center z-10 absolute" style={{ left: position.left, top: position.top }}>
      <div className="relative">
        <Image src={Group_10} height={100} width={200} alt="안내사항" />
        <p className="absolute inset-0 flex items-center justify-center text-xs text-white p-1">
          데이터 소진 시 3G보다 조금 느려요
        </p>
      </div>
      <Image src={Polygon_1} height={10} width={10} alt="안내사항" />
    </div>
  );
};

export default DataInfo;
