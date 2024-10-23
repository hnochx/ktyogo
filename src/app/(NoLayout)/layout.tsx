import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'KT 챗봇 | 글로벌 No.1 KT',
  description: '챗봇입니다. 궁금한게 있다면 물어봐주세요!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
