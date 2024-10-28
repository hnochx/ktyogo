import { Metadata } from 'next';
import '../../../globals.css';

export const metadata: Metadata = {
  title: '나만의 요금제 찾기 | KT',
  description: '나에게 맞는 요금제를 찾아보세요!',
};

export default function YogoBenefitLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
