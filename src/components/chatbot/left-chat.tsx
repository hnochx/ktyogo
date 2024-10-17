import { banner_yogo } from '@/assets/images/images';
import Image from 'next/image';

export const LeftChat = () => {
  return (
    <div className="mt-8 max-w-[70%]">
      <div>
        <b className="text-sm text-black">KT 챗봇</b>
        <span className="ml-4 text-[#797979] text-[0.6rem]">오전 7:35</span>
      </div>
      <div className="bg-white rounded-[4px_16px_16px_16px] p-3 mt-2">
        <div className="h-[8rem] m-[-0.75rem_-0.75rem_0] rounded-[4px_16px_0px_0px] mb-4">
          <Image src={banner_yogo} alt="img1" className="w-full h-full rounded-[4px_16px_0px_0px]" />
        </div>

        <div className="whitespace-pre-line text-sm">
          {`내 맘대로 고를 수 있는 요금제[요고]
편리하고 자유롭게 원하는 요금제 선택하고 OTT 서비스와 플러스 혜택까지 받아보세요.

· 가입 기간 : 2024.08.27~12.31
- 기간 내 가입 고객은 해지 시까지 계속 이용가능
· 요금제 종류 : 30 ~ 69 총 13종
▶ 온라인 전용 상품으로 KT 닷컴에서만 가입가능

궁금하신 요금제는 버튼을 선택하거나,
[요고 36]처럼 채팅창에 입력해주세요!
`}
        </div>
        <div>
          <button
            type="button"
            className="bg-[#F8F8F8] w-full inline-flex rounded-lg px-2 py-3 justify-center text-sm mt-3"
          >
            요고 다이렉트 확인
          </button>
        </div>
      </div>
    </div>
  );
};
