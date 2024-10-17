const PlanCalcBottom = () => {
  return (
    <div>
      {/* 제목 */}
      <div>요고 44</div>
      {/* 데이터 및 월정액 */}
      <dl>
        <dt>데이터</dt>
        <dd>
          <em>120GB</em>
          <small>다 쓰면 1Mbps로 무제한</small>
        </dd>
        <dt>월정액</dt>
        <dd>
          <em>44,000원</em>
        </dd>
      </dl>
      {/* 혜택 */}
      <ul>
        <li>무제한</li>
        <li>티빙 광고형 12개월 제공</li>
        <li>결합/멤버십 혜택 제공</li>
        <li>월 2,000원 쿠폰 제공</li>
      </ul>
    </div>
  );
};
export default PlanCalcBottom;
