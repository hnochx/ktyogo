import Image from 'next/image';
import Link from 'next/link'; // Link 태그 가져오기
import { StaticImageData } from 'next/image';

interface IYogoLink {
  href?: string;
  text?: string;
}

interface IYogoLinkCard {
  imageSrc: string | StaticImageData;
  alt: string;
  title: string;
  description: string;
  links: IYogoLink[] | string;
}

const YogoLinkCard = ({ imageSrc, alt, title, description, links }: IYogoLinkCard) => {
  return (
    <div className="bg-white p-6 rounded-2xl flex flex-col gap-4 border border-gray-200 mb-5">
      <div className="flex flex-row justify-start gap-4">
        <Image src={imageSrc} alt={alt} width={80} height={80} />
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold">{title}</p>
          <p className="text-xs">{description}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {Array.isArray(links) ? (
          links.map((link, index) => (
            <a key={index} href={link.href}>
              <button className="bg-white border border-lightGray w-full rounded-lg py-2 text-sm font-semibold">
                {link.text}
              </button>
            </a>
          ))
        ) : (
          <Link href={links}>
            <button className="bg-white border border-lightGray w-full rounded-lg py-2 text-sm font-semibold">
              핸드폰 등록하기
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default YogoLinkCard;
