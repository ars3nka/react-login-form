import { useTheme } from '../../themeContext';
import { InputStyled } from './form-input.styled';

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
  const { theme, themeType } = useTheme();
  return (
    <InputStyled
      theme={theme}
      themeType={themeType}
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={type === 'checkbox' ? false : true}
    />
  );
};
