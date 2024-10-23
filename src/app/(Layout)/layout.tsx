import type { Metadata } from 'next';
import '../globals.css';
import Footer from '@/components/footer/Footer';
import HeaderBox from '@/components/header/HeaderBox';
import Link from 'next/link';
import Image from 'next/image';
import { icon_chatbot } from '@/assets/images/images';

export const metadata: Metadata = {
  title: {
    template: '%s | KT',
    default: '요고 다이렉트 | KT',
  },
    'KT 공식 온라인몰 요고 다이렉트 요금제의 브랜드 스토리를 소개합니다. KT 다이렉트 요금제 요고를 다른 요금제와 비교하고 선택하세요. 34세 이하라면 누구나 5G 데이터 최대 3배! 출시 기념 역대급 프로모션 혜택을 드립니다. ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <HeaderBox />
        <div className=" pt-[112px]">
          {children}
          <Link
            href={'/chatbot'}
            className="fixed bottom-[5%] right-[5%] w-[3rem] h-[3rem] rounded-full flex items-center justify-center border-[2px] border-black bg-red-50 z-[1]"
          >
            <Image src={icon_chatbot} alt="chatbot" className="w-[2rem] h-[2rem]" />
          </Link>
        </div>
        <Footer />
      </body>
    </html>
  );
}
