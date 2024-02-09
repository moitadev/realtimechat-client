import { Button, Input } from '@/components';
import { useAuth } from '@/hooks';
import { useNavigate } from 'react-router-dom';

export const HomePage = (): JSX.Element => {
  const { signOut } = useAuth();
  const history = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    history('/login');
  };

  return (
    <>
      <h2>Home</h2>
      <Input className="pd-lg" placeholder="Digite seu e-mail" />
      <Button onClick={handleSignOut} className="pd-lg">
        Sair
      </Button>
    </>
  );
};
