import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('/api/check-auth');
        if (response.status === 200) {
          setIsAuthenticated(true);
          setRole(response.data.role);
        }
      } catch {
        setIsAuthenticated(false);
        setRole(null);
      }
    };
    checkAuth();
  }, []);

  return { isAuthenticated, role };
};
