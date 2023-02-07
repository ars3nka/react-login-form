import { useTheme } from '../../themeContext';
import { ButtonStyled } from './form-button.styled';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  text: string;
  className?: string;
  onClick?: () => void;
}

export const FormButton = ({ type, text, className, onClick }: ButtonProps) => {
  const { theme } = useTheme();
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      style={{
        backgroundColor: theme.buttonBackground,
        color: theme.buttonText,
      }}
    >
      {text}
    </button>
  );
};
