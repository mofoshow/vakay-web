import React from 'react';
import { PicturePlaceholderStyled } from './PicturePlaceholder.styles';

export interface PicturePlaceholderProps {
  width: number;
  height: number;
}

export const PicturePlaceholder = ({
  width,
  height,
}: PicturePlaceholderProps) => {
  return <PicturePlaceholderStyled width={width} height={height} />;
};
