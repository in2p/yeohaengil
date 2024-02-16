import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import LoginSpinner from '../../organisms/LoginSpinner/LoginSpinner.jsx';
import useOAuth from '../../../hooks/useOAuth.js';

function LoginLoadingPage() {
  const navigate = useNavigate();
  document.body.classList.add('bg-main');
  const jwtToken = useOAuth(); // OAuth access token => jwt access token
  const [token, setToken, removeToken] = useCookies(['token']);

  useEffect(() => {
    if (jwtToken) {
      setToken('token', jwtToken);
      navigate('/');
    }
  }, [jwtToken, navigate, setToken]);

  return <LoginSpinner />;
}
export default LoginLoadingPage;
