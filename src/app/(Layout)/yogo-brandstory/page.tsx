import Image from 'next/image';
import SliderButton from '@/components/brandstory/SliderButton';
import ScrollToTopButton from '@/components/brandstory/ScrollToTopButton';
import { back_img, back_img2, promo_btn, slider_1, yt, yt2, yt3 } from '@/assets/images/brandstory/images';

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
        <div className="relative top-[30px]">
          <Image src={slider_1} alt="slider_1" />
          <SliderButton />
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
          <div className="absolute z-10 top-[120px] left-1/2 transform -translate-x-1/2 w-[350px] h-auto">
            <Image src={yt} alt="yt" />
            <h1 className="text-white text-center text-[17px] mt-5">요금은 줄이고 혜택은 가득한 요고!!</h1>
          </div>
        </div>
      </div>

      <div className="bg-black h-[540px] flex justify-evenly">
        <div className="w-[160px] h-[286px] mt-[120px]">
          <Image src={yt2} alt="yt2" />
          <h2 className="text-white text-center mt-4">요고 69 (시즌2)</h2>
        </div>
        <div className="w-[160px] h-[286px] mt-[120px]">
          <Image src={yt3} alt="yt3" />
          <h2 className="text-white text-center mt-4">요고 30 (시즌2)</h2>
        </div>
      </div>

      <div className="fixed top-[120px] right-0 z-10">
        <Image src={promo_btn} alt="promo_btn" width={100} height={100} />
      </div>

      <div>
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default Brandstory;
