import LoginSpinner from '../../organisms/LoginSpinner/LoginSpinner.jsx';
import useOAuth from '../../../hooks/useOAuth.js';

function LoginLoadingPage({ setToken }) {
  document.body.classList.add('bg-main');
  const jwtToken = useOAuth(); // OAuth access token => jwt access token
  setToken(jwtToken); // local storage {token: jwtToken} save
  console.log(jwtToken);
  return <LoginSpinner />;
}
export default LoginLoadingPage;
