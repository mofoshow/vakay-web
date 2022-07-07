import styled from 'styled-components';

export interface Props {
  width: number;
  height: number;
}

export const PicturePlaceholderStyled = styled.div<Props>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: lightgray;
  border-radius: 9px;
`;
