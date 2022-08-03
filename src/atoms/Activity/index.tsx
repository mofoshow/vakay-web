import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from './Activity.styles';

export interface ActivityProps {}

export const Activity = ({}: ActivityProps) => {
  return (
    <Container>
      <FontAwesomeIcon icon={faCheck} /> Activity
    </Container>
  );
};
