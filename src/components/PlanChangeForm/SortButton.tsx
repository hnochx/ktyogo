import Image from 'next/image';
import { useState } from 'react';

import up from '@/assets/images/planChange/images/up.png';
import down from '@/assets/images/planChange/images/down.png';

interface SortButtonProps {
  onSort: (isAscending: boolean) => void;
}

const SortButton = ({ onSort }: SortButtonProps) => {
  const [isAscending, setIsAscending] = useState(true);

  const handleSortClick = () => {
    setIsAscending(!isAscending);
    onSort(!isAscending);
  };

  return (
    <div
      className="flex flex-row gap-2 rounded-full border border-gray-300 w-20 h-10 justify-center items-center cursor-pointer"
      onClick={handleSortClick}
    >
      {isAscending ? (
        <Image src={up} height={15} width={15} alt="rise_fall" />
      ) : (
        <Image src={down} height={15} width={15} alt="rise_fall" />
      )}
      <p className="text-sm text-medium_gray">크기순</p>
    </div>
  );
};

export default SortButton;
