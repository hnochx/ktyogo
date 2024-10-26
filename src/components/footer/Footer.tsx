const Footer = () => {
  return (
    <>
      <footer className="w-full h-[95vw] bg-[#f2f2f2] py-[7vw] px-[4vw] tracking-[-0.05em] text-[#666666]">
        <h1 className="text-[3.8vw] font-bold mb-[3vw]">KT 공식 온라인샵</h1>
        <p className="text-[2.9vw] font-light mb-[3vw]">
          (주) 케이티 대표이사 김영섭 사업자등록번호 :102-81-42945 통신판매업신고 : 2002-경기성남-0048&nbsp;
          <a
            href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1028142945&apv_perm_no="
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            사업자정보확인
          </a>
          <br />
          경기도 성남시 분당구 불정로 90 (정자동) <br />
          <span className={'font-bold'}>
            [휴대폰, 인터넷/TV 가입문의] : 1588-8001(유료) 080-515-9000 (무료) <br />
          </span>
          (점심시간 휴식 12시~13시)
        </p>
        <p className="text-[2.9vw] font-light">
          휴대폰 상담 평일 09시~18시, 토요일 09시~12시(내선번호 1번) | 인터넷/TV 상담 <br />
          평일 09시~18시 (내선번호 2번) | 액세서리상담 평일 09시~18시 (내선번호 3번) <br />
          [5시 핫딜 응모/당첨/배송 문의] : 080-515-9004 <br />
          고객센터 : [모바일] 휴대폰+114(무료), 1588-0010(유료) [인터넷/TV/전화] 유선 <br />
          \전화 (국번없이) 100, 휴대폰(지역번호)+100, 1514(발신전용), 1524(발신전용) <br />
          Copyrightⓒ kt corp. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
