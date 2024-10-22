import Image from 'next/image';
import images from '@/assets/images/yogoMain/images';
import YogoLinkCard from './YogoLinkCard';

const YogoLinkComponent = () => {
  return (
    <div className="bg-neutral-100 w-full h-full px-5 py-14">
      <div className="flex flex-row items-start gap-2 mb-8 justify-center">
        <Image src={images.yogoLogo} alt="요고 로고" width={50} height={50} />
        <p className="text-2xl font-bold">다이렉트 가입은 이렇게 하세요.</p>
      </div>

      <YogoLinkCard
        imageSrc={images.yogoLink_1}
        alt="링크 이미지 1"
        title="새로운 핸드폰이 필요하신가요?"
        description="KT 닷컴에서 핸드폰 고르고, 요고 다이렉트 요금제로 주문하세요"
        links={[
          { href: 'https://m.shop.kt.com:444/m/unify/mobile.do?&category=mobile&pplId=0920', text: '핸드폰 보러가기' },
          { href: 'https://m.shop.kt.com:444/m/unify/yogoEvent.do', text: '가입 혜택 보러가기' },
        ]}
      />

      <YogoLinkCard
        imageSrc={images.yogoLink_2}
        alt="링크 이미지 2"
        title="자급제폰/중고폰은 있고 요금제 가입만 원하시나요?"
        description="KT 닷컴에서 요금제만 가입하세요"
        links={[
          { href: 'https://m.shop.kt.com:444/m/direct/directUsim.do', text: 'USIM 가입하기' },
          { href: 'https://m.shop.kt.com:444/m/display/olhsPlan.do?plnDispNo=2388', text: '가입 혜택 보러가기' },
        ]}
      />

      <YogoLinkCard
        imageSrc={images.yogoLink_3}
        alt="링크 이미지 3"
        title="KT 고객님! 요고 요금제로 바꾸고 싶으신가요?"
        description="사용할 '핸드폰 등록' 후 요금제 변경이 가능합니다."
        links={'/directChangeRate'}
      />
    </div>
  );
};

export default YogoLinkComponent;
