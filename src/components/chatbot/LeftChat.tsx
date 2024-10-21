import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

export const LeftChat = ({ msgInfo }: { msgInfo: msgType }) => {
  return (
    <div className="mt-8 max-w-[80%]">
      <b className="text-sm text-black">KT 챗봇</b>
      <span className="ml-3 text-[#797979] text-[0.6rem]">{`${moment(msgInfo.created).format('LT')}`}</span>
      <div className="bg-white rounded-[4px_16px_16px_16px] p-3 mt-2 shadow-[0_2px_8px__#00000014]">
        {msgInfo.img && (
          <div className="h-[7rem] m-[-0.75rem_-0.75rem_0] rounded-[4px_16px_0px_0px] mb-4 relative">
            <Image
              src={msgInfo.img}
              alt={`banner_${msgInfo.msgId}`}
              fill
              className="w-full h-full rounded-[4px_16px_0px_0px] relative"
            />
          </div>
        )}
        {msgInfo.message && (
          <div className="whitespace-pre-wrap text-sm">{msgInfo.message.replace(/\\r\\n|\\n|\\r/gm, `\n`)}</div>
        )}

        {msgInfo.chipList &&
          msgInfo.chipList.map((chip, index) => (
            <Link key={index} href={chip.pageUrl} target={'_blank'} rel={'noopener noreferrer'}>
              <button
                type="button"
                className=" w-full inline-flex rounded-lg px-2 py-3 justify-center text-sm mt-3 bg-white border border-[#A6A8AB] disabled:bg-[#F8F8F8] disabled:border-none"
              >
                {chip.displayText}
              </button>
            </Link>
          ))}
      </div>
    </div>
  );
};
