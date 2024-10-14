'use client';
import { useState } from 'react';

const PlanCalc = () => {
  const [isToggled, setIsToggled] = useState(false); // 데이터 용량과 월정액간의 토글

  const handleClick = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <div className=" h-screen">
      <div className="bg-[#f5f5f5] rounded-[25px] px-[5.2vw] py-[7.2vw] leading-[1.2]">
        {/* 상단 타이틀 */}
        <strong className="text-[5vw] text-center block">
          Y에겐 데이터가 2배!
          <span className="text-[3.2vw] block mt-[10px] text-[#0f807b]">34세 이하의 Y라면? Y덤 혜택받기!</span>
        </strong>
        {/* 용량 또는 월정액 토글 버튼 */}
        <div className="border-[#ccc] border-t py-[4vw] flex justify-center gap-[2rem] mt-[5vw] text-[4.2vw]">
          <button>데이터 용량</button>
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

          <button>월정액</button>
        </div>
        {/* 단계 조정 */}
        <div>
          <div>
            <button>-</button>
            {/* 데이터 또는 금액 */}
            <div>
              <span>40GB</span>
              <span>+</span>
              <em>40GB</em>
            </div>
            <button>+</button>
          </div>
          {/* range바 */}
          <div>
            <input type="range" name="" id="" />
          </div>
          <div>
            <span>5GB</span>
            <span>35GB</span>
            <span>무제한</span>
          </div>
        </div>
        {/* 하단 혜택 내용 텍스트 */}
        <div>※ 출시 기념 추가데이터 30GB가 12개월간 제공됩니다.</div>
      </div>
    </div>
  );
};
export default PlanCalc;
