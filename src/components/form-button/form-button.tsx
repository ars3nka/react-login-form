import { useTheme } from '../../themeContext';
import { ButtonStyled } from './form-button.styled';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  text: string;
  className?: string;
  onClick?: () => void;
}

export const FormButton = ({ type, text, className, onClick }: ButtonProps) => {
  const { theme, themeType } = useTheme();
  return (
    <ButtonStyled
      type={type}
      className={className}
      onClick={onClick}
      theme={theme}
      themeType={themeType}
    >
      {text}
    </ButtonStyled>
  );
};
