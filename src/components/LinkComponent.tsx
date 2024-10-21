import Image from 'next/image';
import image_32 from '@/assets/images/image_32.png';
import { Noto_Sans_KR } from 'next/font/google';
import Link from 'next/link';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-sans-kr',
});

const LinkComponent = () => {
  return (
    <>
      <div className={`w-full flex justify-center ${notoSansKR.className}`}>
        <div className="rounded-3xl bg-whiteSmoke w-[354px] h-[294px] flex flex-col items-center p-7 shadow-[9px_9px_5px_rgba(128,128,128,0.2)]">
          <div className="flex flex-col justify-center *:mb-[10px]">
            <div className="flex flex-row items-center gap-1 justify-center p-1">
              <Image src={image_32} alt="요고로고" width={70} height={48} />
              <h1 className="text-xl font-bold">요금제 가입하려면</h1>
            </div>
            <a href="https://m.shop.kt.com:444/m/mobile/products.do?=&category=mobile&pplId=0947">
              <button className="bg-black w-[308px] text-sm font-medium text-white rounded-md h-10">
                핸드폰 보러가기
              </button>
            </a>
            <a href="https://m.shop.kt.com:444/m/direct/directUsim.do">
              <button className="bg-black w-[308px] text-sm font-medium text-white rounded-md h-10">
                USIM개통 하러가기
              </button>
            </a>
            <Link href="/directChangeRate">
              <button className="bg-black w-[308px] text-sm font-medium text-white rounded-md h-10">
                요금제 변경하기
              </button>
            </Link>
          </div>
          <div>
            <p className="text-xs text-gray-500 ">
              ﹡ 기존 KT 고객님이 요금제만 요고로 변경을 원하는 경우 사용할 &apos;핸드폰 등록&apos; 후 요금제 변경이
              가능합니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkComponent;
