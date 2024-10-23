import type { Metadata } from 'next';
import '../globals.css';
import Footer from '@/components/footer/Footer';
import HeaderBox from '@/components/header/HeaderBox';

export const metadata: Metadata = {
  title: 'KT',
  description: '',
  icons: {
    icon: '/favicon.svg',
  },
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
        <div className="min-h-[100vh] pt-[112px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
