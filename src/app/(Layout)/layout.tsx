import type { Metadata } from 'next';
import '../globals.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer/Footer';

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
        <div className="min-h-[100vh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
