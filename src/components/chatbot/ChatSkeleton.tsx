import moment from 'moment';

export const ChatSkeleton = () => {
  return (
    <div className="mt-8 max-w-[80%]">
      <b className="text-sm text-black">KT 챗봇</b>
      <span className="ml-3 text-[#797979] text-[0.6rem]">{`${moment(Date.now()).format('LT')}`}</span>
      <div className="bg-[#fff] rounded-[4px_16px_16px_16px] p-3 mt-2 shadow-[0_2px_8px__#00000014]">
        <div className="skeleton h-[5rem] m-[-0.75rem_-0.75rem_0] rounded-[4px_16px_0px_0px] mb-4"></div>
        <div className="skeleton w-[80%] h-[0.7rem] rounded-md mb-3"></div>
        <div className="skeleton w-[75%] h-[0.7rem] rounded-md mb-3"></div>
        <div className="skeleton w-[70%] h-[0.7rem] rounded-md mb-3"></div>
        <div className="skeleton w-[80%] h-[0.7rem] rounded-md"></div>
      </div>
    </div>
  );
};
