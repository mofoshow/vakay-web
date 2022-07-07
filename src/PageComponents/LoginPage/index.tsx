import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import { Panel } from '../../atoms/Panel';

export const LoginPage = () => {
  return (
    <Panel>
      <>
        <h1>Vakay</h1>
        <h2>Login into Vakay</h2>
        <Button label="Log in with google"></Button>
        <p>or</p>
        <Input value="fill in" />
        <Button label="continue"></Button>
      </>
    </Panel>
  );
};
