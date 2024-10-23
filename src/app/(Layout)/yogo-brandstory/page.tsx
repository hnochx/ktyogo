import Image from 'next/image';
import Link from 'next/link';
import BrandstoryScrollBtn from '@/components/brandstory/BrandstoryScrollBtn';
import BrandstorySlider from '@/components/brandstory/BrandstorySlider';
import { back_img, promo_btn } from '@/assets/images/brandstory/images';

const Brandstory = () => {
  return (
    <div>
      <div
        className="w-full h-[190vw] relative"
        style={{
          backgroundImage: `url(${back_img.src})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
        }}
      >
        <div className="relative top-[14vw]">
          <BrandstorySlider />
        </div>
      </div>

      <div className="bg-[#030612] h-[160vw] relative">
        <div className="relative">
          <div className="absolute w-[60vw] h-[8vw] text-center text-[3.8vw] font-bold bg-gradient-to-r from-[#01d1ba] text-white to-[#00afa4] top-[14vw] left-1/2 transform -translate-x-1/2 rounded-full flex items-center justify-center">
            요고를 영상으로 만나보세요.
          </div>
          <div className="absolute top-[30vw] left-1/2 transform -translate-x-1/2">
            <iframe
              className="w-[90vw] h-[130vw] rounded-[5vw]"
              src="https://www.youtube.com/embed/EEKovGsbLWg"
            ></iframe>
            <h1 className="text-white text-center text-[4.5vw] mt-[6vw]">요금은 줄이고 혜택은 가득한 요고!!</h1>
          </div>
        </div>
      </div>

      <div className="bg-black h-[145vw] flex justify-evenly">
        <div className="flex flex-wrap justify-center gap-[2vw] mt-[28vw]">
          <div className="w-[44vw] h-[82vw]">
            <iframe className="w-full h-full rounded-[5vw]" src="https://www.youtube.com/embed/RStVl4lilxM"></iframe>
            <h2 className="text-white text-center text-[4.5vw] mt-[6vw]">요고 69 (시즌2)</h2>
          </div>
          <div className="w-[44vw] h-[82vw] rounded-[5vw]">
            <iframe className="w-full h-full rounded-[5vw]" src="https://www.youtube.com/embed/bxFI64dzg1E"></iframe>
            <h2 className="text-white text-center text-[4.5vw] mt-[6vw]">요고 30 (시즌2)</h2>
          </div>
        </div>
      </div>

      <div className="fixed top-[120px] right-0 z-10">
        <Link href="/yogo-benefit">
          <div className="w-[27vw] h-[27vw]">
            <Image src={promo_btn} alt="promo_btn" layout="fill" />
          </div>
        </Link>
      </div>

      <div>
        <BrandstoryScrollBtn />
      </div>
    </div>
  );
};

export default Brandstory;
