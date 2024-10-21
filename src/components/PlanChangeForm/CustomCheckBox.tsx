import { CheckIcon } from '@heroicons/react/24/outline';

interface CheckBoxProps {
  option: string;
  checked: boolean;
  onChange: () => void;
}

const CheckBox = ({ option, checked, onChange }: CheckBoxProps) => {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        name="priceRange"
        value={option}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <span className="relative flex items-center">
        <span className="w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center mr-2">
          {checked && (
            <span className="w-4 h-4 bg-black rounded-sm">
              <CheckIcon className="size-4 text-white font-bold" />
            </span>
          )}
        </span>
        <span className="text-base font-medium">{option}</span>
      </span>
    </label>
  );
};

export default CheckBox;
