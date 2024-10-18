import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/header';
// import SubHeader from '@/components/Header/sub-header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '요고 가입 혜택| KT',
  description:
    'GenerKT 공식 온라인몰 요고 다이렉트 요금제를 소개합니다. KT 다이렉트 요금제 요고를 다른 요금제와 비교하고 선택하세요. 인터넷, TV와 무약정 결합도 가능합니다. 34세 이하라면 누구나 5G 데이터 최대 3배! 출시 기념 역대급 프로모션 혜택을 드립니다. ated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {/* <SubHeader/> */}
        <div className="min-h-[100vh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
