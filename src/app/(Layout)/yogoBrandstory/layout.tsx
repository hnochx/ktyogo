import type { Metadata } from 'next';
import '../../globals.css';

export const metadata: Metadata = {
  title: '요고 브랜드 스토리',
  description: '요고 브랜드 스토리를 확인하세요.',
};

export default function BrandStoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
