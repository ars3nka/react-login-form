interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  text: string;
  className?: string;
  onClick?: () => void;
}

export const FormButton = ({ type, text, className, onClick }: ButtonProps) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  );
};
