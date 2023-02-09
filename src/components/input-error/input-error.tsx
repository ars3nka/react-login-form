interface InputErrorProps {
  error: string;
}

export const InputError = ({ error }: InputErrorProps) => {
  return error ? <p className="error">{error}</p> : null;
};
