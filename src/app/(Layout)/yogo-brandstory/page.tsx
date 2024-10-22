import Image from 'next/image';
import Link from 'next/link';
import BrandstoryScrollBtn from '@/components/brandstory/BrandstoryScrollBtn';
import BrandstorySlider from '@/components/brandstory/BrandstorySlider';
import { back_img, back_img2, promo_btn } from '@/assets/images/brandstory/images';

const Brandstory = () => {
  return (
    <div>
      <div
        className="w-full relative"
        style={{
          backgroundImage: `url(${back_img.src})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          minHeight: '740px',
        }}
      >
        <div className="relative top-[75px]">
          <BrandstorySlider />
        </div>
      </div>

      <div
        className="w-full relative"
        style={{
          backgroundImage: `url(${back_img2.src})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          minHeight: '612px',
        }}
      >
        <div className="relative">
          <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2">
            <iframe
              className="w-[350px] h-[500px] rounded-2xl"
              src="https://www.youtube.com/embed/EEKovGsbLWg"
            ></iframe>
            <h1 className="text-white text-center text-[17px] mt-5">요금은 줄이고 혜택은 가득한 요고!!</h1>
          </div>
        </div>
      </div>

      <div className="bg-black h-[540px] flex justify-evenly">
        <div className="mt-[120px]">
          <iframe className="w-[160px] h-[286px] rounded-2xl" src="https://www.youtube.com/shorts/RStVl4lilxM"></iframe>
          <h2 className="text-white text-center mt-4">요고 69 (시즌2)</h2>
        </div>
        <div className="mt-[120px]">
          <iframe className="w-[160px] h-[286px] rounded-2xl" src="https://www.youtube.com/shorts/bxFI64dzg1E"></iframe>
          <h2 className="text-white text-center mt-4">요고 30 (시즌2)</h2>
        </div>
      </div>

      <div className="fixed top-[120px] right-0 z-10">
        <Link href="/yogo-benefit">
          <Image src={promo_btn} alt="promo_btn" width={100} height={100} />
        </Link>
      </div>

      <div>
        <BrandstoryScrollBtn />
      </div>
    </div>
  );
};

export default Brandstory;
