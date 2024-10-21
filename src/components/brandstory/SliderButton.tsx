import sliderbtn_1 from '@/assets/images/brandstory/bs-sliderbtn_1.png';
import sliderbtn_2 from '@/assets/images/brandstory/bs-sliderbtn_2.png';
import Image from 'next/image';

const SliderButton = () => {
  return (
    <div className="flex items-center justify-center h-[100px]">
      <button className="mr-6">
        <Image src={sliderbtn_1} alt="Previous" width={30} height={30} />
      </button>
      <span className="w-[80px] h-[40px] bg-white text-[25px] text-black text-center rounded-3xl">1/6</span>
      <button className="ml-6">
        <Image src={sliderbtn_2} alt="Next" width={30} height={30} />
      </button>
    </div>
  );
};

export default SliderButton;
