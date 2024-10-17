'use client';
import { range_bg } from '@/assets/images/images';
import { useState } from 'react';

const PlanCalcTop = () => {
  const STAGE_MAX = 13;
  const [isToggled, setIsToggled] = useState(false); // 데이터 용량과 월정액간의 토글
  const [planStatge, setPlanStage] = useState(1); //

  const handleClick = () => {
    setIsToggled((prev) => !prev);
  };

  const handleStageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlanStage(Number(e.target.value));
  };

  return (
    <div className="bg-[#f5f5f5] rounded-[25px] px-[5.2vw] py-[7.2vw] leading-[1.2]">
      {/* 상단 타이틀 */}
      <strong className="text-[5vw] text-center block">
        Y에겐 데이터가 2배!
        <span className="text-[3.2vw] block mt-[10px] text-[#0f807b]">34세 이하의 Y라면? Y덤 혜택받기!</span>
      </strong>
      {/* 용량 또는 월정액 토글 버튼 */}
      <div className="border-[#ccc] border-t py-[4vw] flex justify-center gap-[2rem] mt-[5vw] text-[4.2vw]">
        <button onClick={() => setIsToggled(false)} className={`${isToggled || 'text-[#0f807b]'}`}>
          데이터 용량
        </button>
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />

          <button
            onClick={handleClick}
            className={`relative w-[75px] h-[30px] rounded-[30px] bg-[#0f807b] text-[0]
        after:w-[22px] after:h-[22px] after:bg-white after:content-[''] 
        after:block after:rounded-full after:absolute after:top-[4px] 
        after:left-[4px] after:transition-transform after:duration-500 
        ${isToggled ? 'after:translate-x-[45px]' : ''}`}
          >
            스위치
          </button>
        </label>

        <button onClick={() => setIsToggled(true)} className={`${isToggled && 'text-[#0f807b]'}`}>
          월정액
        </button>
      </div>
      {/* 단계 조정 */}
      <div>
        <div className="flex justify-between items-center pt-[5vw] pb-[4vw] border-[#ccc] border-t px-[4vw]">
          <button
            onClick={() => setPlanStage((prev) => prev - 1)}
            className="w-[8vw] h-[8vw] border-[#0f807b] rounded-[50%] border-2 text-[7vw] bg-white leading-[100%]"
          >
            -
          </button>
          {/* 데이터 또는 금액 */}
          <div className="text-[5.6vw]">
            <span>40GB</span>
            <span>+</span>
            <em className="text-[#fe2e36] not-italic">40GB</em>
          </div>
          <button
            onClick={() => setPlanStage((prev) => prev + 1)}
            className="w-[8vw] h-[8vw] border-[#0f807b] rounded-[50%] border-2 text-[7vw] bg-white leading-[100%]"
          >
            +
          </button>
        </div>
        {/* range바 */}
        <div className="relative ">
          <div
            className=" w-full h-[12vw] bg-cover absolute top-0 z-10"
            style={{
              backgroundImage: `url(${range_bg.src})`,
            }}
          ></div>
          <div className="px-[4vw] py-[1.5vw] h-[10.5vw] pb-[1vw]">
            <div
              className="block h-full bg-gradient-to-r from-[#69f1fa] to-[#0dd9d3] transform skew-x-[-15deg]"
              style={{ width: `calc(${(planStatge / STAGE_MAX) * 100}%)` }}
            ></div>
          </div>
          <input
            type="range"
            step="1"
            max={STAGE_MAX}
            min="1"
            value={planStatge}
            onChange={handleStageChange}
            className="opacity-0 absolute top-[50%] translate-y-[-50%] left-[4vw] z-10"
            style={{ width: 'calc(100% - 8vw)' }}
          />
        </div>
        <div className="text-[3.4vw] flex justify-between m-[5px] pt-[10px] relative after:content-[''] after:absolute after:w-[1px] after:h-[10px] after:bg-[#ccc] after:top-0 after:left-1/2">
          <span>5GB</span>
          <span>35GB</span>
          <span>무제한</span>
        </div>
      </div>
      {/* 하단 혜택 내용 텍스트 */}
      <div className="bg-[#e0f4ff] text-[3vw] text-center px-[10px] py-[5px] mt-[2.5vw]">
        ※ 출시 기념 추가데이터 30GB가 12개월간 제공됩니다.
      </div>
    </div>
  );
};
export default PlanCalcTop;
