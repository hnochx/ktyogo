import { KTPlan } from '@/types/types';
import { BookmarkIcon } from '@heroicons/react/24/solid';

interface IYogoPlanCard {
  ktPlan: KTPlan;
}

const YogoPlanCard = ({ ktPlan }: IYogoPlanCard) => {
  const details = [
    { label: '데이터', value: `${ktPlan.data.total_data}` },
    { label: '전화/문자', value: `${ktPlan.calls_and_texts}` },
    { label: 'KT 멤버쉽', value: ktPlan.benefits ? '혜택 제공' : '혜택 미제공' },
    { label: '유무선 결합할인', value: '혜택 제공' },
  ];

  return (
    <div className="bg-white w-full h-auto px-5 pb-5 rounded-xl border border-lightGray mb-5 last:mb-0">
      {ktPlan.benefits.additional_benefits ? (
        <div className="flex flex-row items-center justify-between w-full">
          {' '}
          {/* w-full 추가 */}
          <div className="flex flex-col items-center relative" style={{ top: '-10px', left: '-28px' }}>
            <span className="absolute text-center text-white py-5 px-6 text-xs">
              {ktPlan.benefits.additional_benefits.replace(/출시기념 데이터 (\d+)GB 추가 제공/, '출시기념 $1GB 더!')}
            </span>
            <div className="flex justify-center items-center">
              <BookmarkIcon className="w-28 h-[75px] text-blue-500 " />
            </div>
          </div>
          <h1 className="text-lg font-bold text-center absolute left-1/2 transform -translate-x-1/2">
            {ktPlan.plan_name}
          </h1>
        </div>
      ) : ktPlan.data.total_data === '5G 완전 무제한' ? (
        <div className="flex flex-row items-center justify-between w-full">
          {' '}
          {/* w-full 추가 */}
          <div className="flex flex-col items-center relative" style={{ top: '-10px', left: '-28px' }}>
            <span className="absolute text-center text-white py-5 px-10 text-xs">완전 무제한</span>
            <div className="flex justify-center items-center">
              <BookmarkIcon className="w-28 h-[75px] text-red-500" />
            </div>
          </div>
          <h1 className="text-lg font-bold text-center absolute left-1/2 transform -translate-x-1/2">
            {ktPlan.plan_name}
          </h1>
        </div>
      ) : (
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-center p-6">{ktPlan.plan_name}</h1>
        </div>
      )}

      <div className="border-t border-gray-200 mb-4" />
      <div>
        {details.map((item, index) => (
          <div key={index} className="flex flex-row justify-between text-sm mt-4">
            <span className="text-medium_gray">{item.label}</span>
            <span className="text-black">{item.value}</span>
          </div>
        ))}
        <div className="border-t border-gray-200 my-4" />

        <div className="flex flex-col *:text-xs gap-3">
          {ktPlan.benefits.choice_benefits && (
            <div>
              <p className="text-yogoGreen">초이스 혜택</p>
              <p>{ktPlan.benefits.choice_benefits}</p>
            </div>
          )}
          {ktPlan.benefits.plus_benefits[0] && (
            <div>
              <p className="text-yogoGreen">플러스 혜택</p>
              <p>{ktPlan.benefits.plus_benefits}</p>
            </div>
          )}
          {(ktPlan.benefits.smart_device_lines === 1 || ktPlan.benefits.smart_device_lines === 2) && (
            <div>
              <p className="text-yogoGreen">스마트기기 {ktPlan.benefits.smart_device_lines}회선 무료</p>
            </div>
          )}
        </div>
        <div className="border-t border-gray-200 my-4" />
        <h1 className="text-end text-lg">
          월<strong className="font-bold"> {ktPlan.monthly_fee}</strong>
        </h1>
      </div>
    </div>
  );
};

export default YogoPlanCard;
