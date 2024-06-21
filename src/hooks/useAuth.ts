import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { useEffect } from 'react';
import axios from 'axios';
import { authFail, authSuccess } from '../store/slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated, role } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('/api/check-auth', {
          withCredentials: true,
        });
        if (response.status === 200) {
          dispatch(authSuccess(response.data));
        }
      } catch {
        dispatch(authFail(''));
      }
    };
    checkAuth();
  }, [dispatch]);

  return { isAuthenticated, role };
};
