import type { Metadata } from 'next';
import '../globals.css';
import Footer from '@/components/footer/Footer';
import HeaderBox from '@/components/header/HeaderBox';

export const metadata: Metadata = {
  title: 'KT',
  description: '',
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
        <div className="pt-[112px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
