import type { Metadata } from 'next';
import '../globals.css';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

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
        <div className="min-h-[100vh] pt-[112px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
