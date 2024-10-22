import { KTPlan } from '@/types/types';

interface IYogoPlanCard {
  ktPlan: KTPlan;
}

const YogoPlanCard = ({ ktPlan }: IYogoPlanCard) => {
  const details = [
    { label: '데이터', value: `${ktPlan.data.total_data}` },
    { label: '전화/문자', value: `${ktPlan.calls_and_texts}` },
    {
      label: '공유 데이터',
      value: ktPlan.data.shared_data_limit ? ktPlan.data.shared_data_limit : '미제공',
    },
  ];

  return (
    <div className="bg-white w-full h-auto px-5 pb-5 rounded-xl border border-lightGray mb-5 last:mb-0">
      {ktPlan.benefits.additional_benefits ? (
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col items-center relative p-2.5" style={{ top: '-11px', left: '-10px' }}>
            <div className="relative w-[55px] h-[55px] bg-blue-500 text-white text-[12px] text-center uppercase pt-[8px]">
              {ktPlan.benefits.additional_benefits.replace(/출시기념 데이터 (\d+)GB 추가 제공/, '출시기념 $1GB 더!')}
              <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[7px] border-b-[#eee] border-l-[27.5px] border-l-transparent border-r-[27.5px] border-r-transparent"></div>
            </div>
          </div>
          <h1 className="text-xl font-bold text-center absolute left-1/2 transform -translate-x-1/2">
            {ktPlan.plan_name}
          </h1>
        </div>
      ) : ktPlan.data.total_data === '5G 완전 무제한' ? (
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col items-center relative">
            <div className="flex flex-col items-center relative p-2.5" style={{ top: '-11px', left: '-10px' }}>
              <div className="relative w-[55px] h-[55px] bg-red-500 text-white text-[12px] text-center uppercase pt-[8px]">
                완전
                <br /> 무제한
                <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[7px] border-b-[#eee] border-l-[27.5px] border-l-transparent border-r-[27.5px] border-r-transparent"></div>
              </div>
            </div>
          </div>
          <h1 className="text-xl font-bold text-center absolute left-1/2 transform -translate-x-1/2">
            {ktPlan.plan_name}
          </h1>
        </div>
      ) : (
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-center p-6">{ktPlan.plan_name}</h1>
        </div>
      )}

      <div className="border-t border-gray-200 mb-4" />
      <div>
        {details.map((item, index) => (
          <div key={index} className="flex flex-row justify-between text-base mt-2">
            <span className="text-medium_gray">{item.label}</span>
            <span className="text-black">{item.value}</span>
          </div>
        ))}

        <div className="flex flex-col *:text-sm gap-3 my-5 bg-neutral-50 p-4 rounded-xl">
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

        <h1 className="text-end text-lg">
          월<strong className="font-bold"> {ktPlan.monthly_fee}</strong>
        </h1>
      </div>
    </div>
  );
};

export default YogoPlanCard;
