import images from '@/assets/images/recommend/images';
import Image from 'next/image';

const RecommendSkeleton = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-20  pt-[10vh] pb-48">
      <div className="text-center">
        <p className="text-3xl font-bold ">
          분석 후 딱 맞는 <br />
          요금제를 보여드릴게요!
        </p>
        <p className="text-sm text-lightGray mt-2">알맞는 요금제를 찾는 중이에요!</p>
      </div>
      <div className="relative">
        <Image
          src={images.recommend_1}
          alt="물음표 이미지"
          width={200}
          height={200}
          className="animate-slow_spin" // spin에 속도 4초 설정
        />
      </div>
    </div>
  );
};

export default RecommendSkeleton;
