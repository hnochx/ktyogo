export const AutoKeywordBox = ({
  arr,
  keyword,
  sendHandler,
}: {
  arr: string[];
  keyword: string;
  sendHandler: (msg: string) => void;
}) => {
  return (
    <div className="bg-white overflow-y-auto max-h-[12rem]">
      {arr.map((item, index) => {
        return (
          <button
            key={index}
            type="button"
            className="w-full border-b border-b-[#E0E0E0] text-left px-3 py-3"
            onClick={() => sendHandler(item)}
          >
            <div className="flex">
              {item.split('').map((text, idx) =>
                keyword.split('').includes(text) ? (
                  <p key={idx} className="text-[#15ced1] text-[0.8rem] whitespace-break-spaces">
                    {text}
                  </p>
                ) : (
                  <p key={idx} className="text-black text-[0.8rem] whitespace-break-spaces">
                    {text}
                  </p>
                ),
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
};
