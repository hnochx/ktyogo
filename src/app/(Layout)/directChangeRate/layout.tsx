import { Metadata } from 'next';
import '../../globals.css';

export const metadata: Metadata = {
  title: '핸드폰 등록 및 요금제 변경',
  description: '요고 가입 혜택을 확인하세요.',
};

export default function YogoBenefitLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
