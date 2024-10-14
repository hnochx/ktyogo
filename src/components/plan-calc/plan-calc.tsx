const PlanCalc = () => {
  return (
    <div>
      <div className="bg-[#f5f5f5] rounded-[25px] ">
        {/* 상단 타이틀 */}
        <strong>
          Y에겐 데이터가 2배!
          <span>34세 이하의 Y라면? Y덤 혜택받기!</span>
        </strong>
        {/* 용량 또는 월정액 토글 버튼 */}
        <div>
          <button>데이터 용량</button>
          <span>스위치</span>
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
