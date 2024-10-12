import Link from 'next/link';

const SubHeader = () => {
  return (
    <header className='border-b border-[#ccc] h-[52px] leading-[52px] pl-[46px]'>
      <h1 className='text-[17px] font-bold'>
        <Link href="/">요고 다이렉트</Link>
      </h1>
    </header>
  );
};
export default SubHeader;
