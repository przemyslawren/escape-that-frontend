import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const useAuth = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const user = useSelector((state: RootState) => state.auth.user);
  const role = useSelector((state: RootState) => state.auth.role);
  const error = useSelector((state: RootState) => state.auth.error);

  return { isAuthenticated, user, role, error };
};
