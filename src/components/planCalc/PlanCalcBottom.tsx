import { title_icon } from '@/assets/images/planCalc/images';
import { KTPlan } from '@/types/types';

interface PlacCalcBtmProps {
  selectedPlan: KTPlan | null;
}

const PlanCalcBottom = ({ selectedPlan }: PlacCalcBtmProps) => {
  return (
    <div className="bg-[#ebebeb] relative px-[5.2vw] py-[7.2vw] rounded-[25px] before:content-[''] before:block before:w-full before:h-[60px] before:bg-[#ebebeb] before:absolute before:top-[-30px] before:left-0 before:-z-10">
      {/* 제목 */}
      <div className="text-center text-[6.7vw] leading-[1.4] font-bold">{selectedPlan?.plan_name}</div>
      {/* 데이터 및 월정액 */}
      <dl className="border-[#ccc] border-t mt-[3vw] py-[3.5vw] flex flex-wrap">
        <dt className="w-[12.5vw] text-[4.2vw] text-[#666] font-bold mr-[2vw]">데이터</dt>
        <dd style={{ width: 'calc(100% - 14.5vw)' }} className="mb-[2vw]">
          <em className="text-[5vw] not-italic font-extrabold">120GB</em>
          <small className="text-[3vw] ml-[5px] text-[#666]">다 쓰면 1Mbps로 무제한</small>
          <p className="mt-[3px] text-[3vw] text-[#fe2e36]">* 기본 40GB + Y덤 40GB + 프로모션 40GB</p>
        </dd>
        <dt className="w-[12.5vw] text-[4.2vw] text-[#666] font-bold mr-[2vw]">월정액</dt>
        <dd style={{ width: 'calc(100% - 14.5vw)' }}>
          <em className="text-[5vw] not-italic font-extrabold">{selectedPlan?.monthly_fee}</em>
        </dd>
      </dl>
      {/* 혜택 */}
      <ul className="border-[#ccc] border-t py-[2.4vw] text-[3.6vw]">
        <li className="py-[1.2vw] flex gap-2 items-center">
          <i
            className="inline-block w-[6.5vw] h-[6.5vw] rounded-[50%] bg-[#fff] bg-[0_0] bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${title_icon.src})` }}
          ></i>
          무제한
        </li>
        <li className="py-[1.2vw] flex gap-2 items-center">
          <i
            className="inline-block w-[6.5vw] h-[6.5vw] rounded-[50%] bg-[#fff]  bg-[0_-8.5vw] bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${title_icon.src})` }}
          ></i>
          {selectedPlan?.benefits.choice_benefits}
        </li>
        <li className="py-[1.2vw] flex gap-2 items-center">
          <i
            className="inline-block w-[6.5vw] h-[6.5vw] rounded-[50%] bg-[#fff]  bg-[0_-17vw] bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${title_icon.src})` }}
          ></i>
          결합/멤버십 혜택 제공
        </li>
        <li className="py-[1.2vw] flex gap-2 items-center">
          <i
            className="inline-block w-[6.5vw] h-[6.5vw] rounded-[50%] bg-[#fff]  bg-[0_-25.5vw] bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${title_icon.src})` }}
          ></i>
          월 2,000원 쿠폰 제공
        </li>
      </ul>
    </div>
  );
};
export default PlanCalcBottom;
