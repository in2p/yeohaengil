import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginSpinner from '../../organisms/LoginSpinner/LoginSpinner.jsx';
import useOAuth from '../../../hooks/useOAuth.js';

function LoginLoadingPage({ setToken }) {
  const navigate = useNavigate();
  document.body.classList.add('bg-main');
  const jwtToken = useOAuth(); // OAuth access token => jwt access token
  setToken(jwtToken); // local storage {token: jwtToken} save
  useEffect(() => {
    if (jwtToken === undefined) navigate('/');
  }, [jwtToken, navigate]);

  return <LoginSpinner />;
}
export default LoginLoadingPage;
