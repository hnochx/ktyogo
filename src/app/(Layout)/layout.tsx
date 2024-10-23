import type { Metadata } from 'next';
import '../globals.css';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/header';

export const metadata: Metadata = {
  title: {
    template: '%s | KT',
    default: '요고 다이렉트 | KT',
  },
  description:
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
        <Header />
        <div className="min-h-[100vh] pt-[112px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
