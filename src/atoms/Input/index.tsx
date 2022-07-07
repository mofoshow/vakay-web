import { StyledInput } from './Input.styles';

export interface InputProps {
  value: string;
}

export const Input = ({ value }: InputProps) => {
  return <StyledInput value={value} />;
};
