interface InputProps {
  type: string;
  id: string;
  placeholder?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput = ({
  type,
  id,
  placeholder,
  onChange,
  value,
}: InputProps) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={type === 'checkbox' ? false : true}
    />
  );
};
