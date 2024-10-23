import type { Metadata } from 'next';
import '../globals.css';
import Footer from '@/components/footer/Footer';
import HeaderBox from '@/components/header/HeaderBox';
import Link from 'next/link';

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
        <div className="min-h-[100vh] pt-[112px]">
          {children}
          <Link
            href={'/chatbot'}
            className="fixed bottom-[5%] right-[5%] w-[3rem] h-[3rem] rounded-full flex items-center justify-center border-[3px] border-red-400 bg-white z-[1]"
          >
            <div className=" font-bold text-black text-[0.95rem]">챗봇</div>
          </Link>
        </div>
        <Footer />
      </body>
    </html>
  );
}
