import moment from 'moment';
import 'moment/locale/ko';

export const RightChat = ({ msgInfo }: { msgInfo: msgType }) => {
  return (
    <div className="w-full mt-8 flex justify-end">
      <div className="flex items-end max-w-[85%]">
        <span className="mr-3 text-[#797979] text-[0.6rem]">{`${moment(msgInfo.created).format('LT')}`}</span>
        <div className="bg-[#4C4C4E] text-white p-3 rounded-[16px_4px_16px_16px] shadow-[0_2px_8px__#00000014]">
          {msgInfo.message}
        </div>
      </div>
    </div>
  );
};
