import Link from 'next/link';
import React, { forwardRef } from 'react';

interface Type {
  text: string;
  link: string;
  on?: boolean;
}

const HeaderLinkBtn = forwardRef<HTMLAnchorElement, Type>(({ text, link, on = false }, ref) => {
  return (
    <Link href={link} passHref legacyBehavior>
      <a
        ref={ref}
        className={`text-[13px] inline-block rounded-[31px] leading-[31px] px-[10px] border flex-none 
          ${on ? 'border-[#01A69F] text-[#01A69F]' : 'border-[#d9d9d9]'}`}
      >
        {text}
      </a>
    </Link>
  );
});

HeaderLinkBtn.displayName = 'HeaderLinkBtn';

export default HeaderLinkBtn;
