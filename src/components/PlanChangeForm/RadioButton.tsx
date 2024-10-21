interface RadioButtonProps {
  option: string;
  checked: boolean;
  onChange: () => void;
}

const RadioButton = ({ option, checked, onChange }: RadioButtonProps) => {
  return (
    <label className="flex items-center cursor-pointer">
      <input type="radio" name="dataOption" value={option} checked={checked} onChange={onChange} className="hidden" />
      <span className="relative flex items-center">
        <span
          className={`w-4 h-4 border-2 rounded-full flex items-center justify-center mr-2 ${checked ? 'border-black' : 'border-gray-400'}`}
        >
          {checked && <span className="w-2 h-2 bg-black rounded-full" />}
        </span>
        <span className="text-base font-medium">{option}</span>
      </span>
    </label>
  );
};

export default RadioButton;
