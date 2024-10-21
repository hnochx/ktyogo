import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/header';
// import SubHeader from '@/components/Header/sub-header';
import Footer from '@/components/Footer';

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
        <Header />
        {/* <SubHeader/> */}
        <div className="min-h-[100vh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
