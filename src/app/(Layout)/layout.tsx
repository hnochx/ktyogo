import type { Metadata } from 'next';
import '../globals.css';
import Footer from '@/components/footer/Footer';
import HeaderBox from '@/components/header/HeaderBox';
import Link from 'next/link';
import Image from 'next/image';
import { icon_chatbot } from '@/assets/images/images';

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
