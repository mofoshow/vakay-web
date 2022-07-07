import React from 'react';
import { StyledButton } from './Button.styles';

export interface ButtonProps {
  label: string;
}

export const Button = ({ label }: ButtonProps) => {
  return <StyledButton>{label}</StyledButton>;
};
