export const MenuButton = ({ menuArr, sendHandler }: { menuArr: string[]; sendHandler: (msg: string) => void }) => {
  return (
    <div className="mt-5 flex flex-wrap gap-x-3 gap-y-3">
      {menuArr.map((menu, index) => (
        <button
          key={index}
          type="button"
          className="bg-white rounded-[18px] px-3 py-2 shadow-[0_2px_8px__#00000014]"
          onClick={() => sendHandler(menu)}
        >
          {menu}
        </button>
      ))}
    </div>
  );
};
