import Image from 'next/image';
import {
  yogo_benefit_1,
  yogo_benefit_10,
  yogo_benefit_11,
  yogo_benefit_12,
  yogo_benefit_2,
  yogo_benefit_3,
  yogo_benefit_4,
  yogo_benefit_5,
  yogo_benefit_6,
  yogo_benefit_7,
  yogo_benefit_8,
  yogo_benefit_9,
} from '@/assets/images/yogo-benefit/images';
import LinkComponent from '@/components/LinkComponent';

const YogoBenefit = () => {
  return (
    <>
      <Image src={yogo_benefit_1} alt="yogo" />

      <div className="py-[8vw]">
        <Image src={yogo_benefit_2} alt="yogo" />
        {/* 요금 계산 부분 */}
        <div className="mx-[4.5vw] my-[6vw]"></div>
        <div></div>
        <div className="mt-[10vw]">
          <LinkComponent />
        </div>
      </div>
      <Image src={yogo_benefit_3} alt="yogo" />
      <Image src={yogo_benefit_4} alt="yogo" />
      <Image src={yogo_benefit_5} alt="yogo" />
      <Image src={yogo_benefit_6} alt="yogo" />
      <Image src={yogo_benefit_7} alt="yogo" />
      <Image src={yogo_benefit_8} alt="yogo" />
      <Image src={yogo_benefit_9} alt="yogo" />
      <Image src={yogo_benefit_10} alt="yogo" />
      <Image src={yogo_benefit_12} alt="yogo" />
      <Image src={yogo_benefit_11} alt="yogo" />
    </>
  );
};
export default YogoBenefit;
