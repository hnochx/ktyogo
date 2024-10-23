import YogoLinkComponent from '@/components/mainYogo/YogoLinkComponent';
import YogoPlanRate from '@/components/mainYogo/yogoPlanRateCard/YogoPlanRate';
import Image from 'next/image';
import images from '@/assets/images/yogoMain/main_images';

export default function Home() {
  return (
    <>
      <div className="relative w-full min-h-screen overflow-y-auto">
        <div className="relative w-full" style={{ aspectRatio: '150 / 671' }}>
          <Image src={images.main_image_1} alt="메인페이지1" layout="fill" style={{ objectFit: 'contain' }} />
        </div>
        <YogoPlanRate />
        <YogoLinkComponent />
        <div className="relative w-full" style={{ aspectRatio: '750 / 869', height: 'auto' }}>
          <Image src={images.main_image_4} alt="메인페이지4" layout="fill" style={{ objectFit: 'cover' }} />
        </div>
      </div>
    </>
  );
}
