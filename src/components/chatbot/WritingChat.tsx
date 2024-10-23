import moment from 'moment';

export const WritingChat = () => {
  return (
    <div className="w-full mt-8 flex justify-end">
      <div className="flex items-end max-w-[85%]">
        <span className="mr-3 text-[#797979] text-[0.6rem]">{`${moment(Date.now()).format('LT')}`}</span>
        <div className="bg-[#4C4C4E] text-white p-4 rounded-[16px_4px_16px_16px] shadow-[0_2px_8px__#00000014] flex items-center gap-x-1">
          {['-0.3s', '-0.2s', '-0.1s'].map((delay, index) => (
            <div
              key={index}
              className={`w-[0.4rem] h-[0.4rem] bg-[#FE2E36] rounded-full animate-wave`}
              style={{ animationDelay: delay }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
