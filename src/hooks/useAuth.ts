import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const useAuth = () => {
  const { isAuthenticated, role } = useSelector(
    (state: RootState) => state.auth
  );
  return { isAuthenticated, role };
};
