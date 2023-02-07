import { useTheme } from '../../themeContext';

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
  const { theme } = useTheme();
  return (
    <input
      style={{ backgroundColor: theme.inputBackground, color: theme.inputText }}
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={type === 'checkbox' ? false : true}
    />
  );
};
