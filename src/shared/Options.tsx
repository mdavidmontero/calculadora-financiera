type OptionsSelectProps = {
  label: string;
  value: string;
};

export const OptionSelect = ({ label, value }: OptionsSelectProps) => {
  return (
    <option className="bg-white text-black" value={value}>
      {label}
    </option>
  );
};
