import styled from 'styled-components';

import KakaoImg from '../../../assets/login/kakao/kakao_login_medium_wide.png';

const LoginImage = styled.img`
  height: 40px;
  width: auto;
  object-fit: cover;
`;

function KakaoLogin() {
  const authParams = new URLSearchParams({
    client_id: process.env.REACT_APP_KAKAO_JS_KEY,
    redirect_uri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
    response_type: 'code',
  });

  return (
    <a
      id="kakao-login-btn"
      href={`https://kauth.kakao.com/oauth/authorize?${authParams.toString()}`}
    >
      <LoginImage src={KakaoImg} alt="kakao login" style={{ height: '42px' }} />
    </a>
  );
}
export default KakaoLogin;
