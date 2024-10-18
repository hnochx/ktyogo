import back_img from '@/assets/images/brandstory/bg_1.png';
import back_img2 from '@/assets/images/brandstory/bg_2.png';
import promo_btn from '@/assets/images/brandstory/bs-promobtn.png';
import slider_1 from '@/assets/images/brandstory/bs-slider_1.png';
// import slider_1 from '@/assets/images/brandstory/bs-slider_2.png';
// import slider_1 from '@/assets/images/brandstory/bs-slider_3.png';
// import slider_1 from '@/assets/images/brandstory/bs-slider_4.png';
// import slider_1 from '@/assets/images/brandstory/bs-slider_5.png';
// import slider_1 from '@/assets/images/brandstory/bs-slider_6.png';
import yt from '@/assets/images/brandstory/bs-yt_1.png';
import yt2 from '@/assets/images/brandstory/bs-yt_2.png';
import yt3 from '@/assets/images/brandstory/bs-yt_3.png';

import Image from 'next/image';
import SliderButton from './SliderButton';
import ScrollToTopButton from './ScrollToTopButton';

const Brandstory = () => {
  return (
    <div className="w-screen">
      <div className="relative">
        <div className="absolute z-10 top-[50px]">
          <Image src={slider_1} alt="slider_1" />
        </div>
        <div className="absolute z-10 left-1/2 transform -translate-x-1/2 top-[600px]">
          <SliderButton />
        </div>
        <div
          className="w-full relative"
          style={{
            backgroundImage: `url(${back_img.src})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            paddingTop: `${(1423 / 750) * 100}%`,
          }}
        />
      </div>

      <div className="relative">
        <div className="absolute z-10 top-[120px] left-1/2 transform -translate-x-1/2 w-[350px] h-auto">
          <Image src={yt} alt="yt" />
          <h1 className="text-white text-center text-[17px] mt-5">요금은 줄이고 혜택은 가득한 요고!!</h1>
        </div>
        <div
          className="w-full relative"
          style={{
            backgroundImage: `url(${back_img2.src})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            paddingTop: `${(1175 / 750) * 100}%`,
          }}
        />
      </div>

      <div className="bg-black h-[580px] flex justify-evenly">
        <div className="w-[160px] h-[286px] mt-[120px]">
          <Image src={yt2} alt="yt2" />
          <h2 className="text-white text-center mt-4">요고 69 (시즌2)</h2>
        </div>
        <div className="w-[160px] h-[286px] mt-[120px]">
          <Image src={yt3} alt="yt3" />
          <h2 className="text-white text-center mt-4">요고 30 (시즌2)</h2>
        </div>
      </div>

      <div className="fixed top-3 right-0 z-10">
        <Image src={promo_btn} alt="promo_btn" width={100} height={100} />
      </div>

      <div>
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default Brandstory;
