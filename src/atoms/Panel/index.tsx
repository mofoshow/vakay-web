import { Container } from './Panel.styles';

export interface PanelProps {
  children: JSX.Element;
}

export const Panel = ({ children }: PanelProps) => {
  return <Container>{children}</Container>;
};
