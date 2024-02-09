import { useAuth } from '@/hooks';
import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type GuestRouteProps = PropsWithChildren;

export const GuestRoute = ({ children }: GuestRouteProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== null) {
      navigate('/', { replace: true });
    }
  }, [navigate, user]);
  return children;
};
