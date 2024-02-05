import styled from 'styled-components';

import KakaoImg from '../../../assets/login/kakao/kakao_login_medium_wide.png';
import getKakaoUrl from '../../../utils/getKakaoUrl.jsx';

const LoginImage = styled.img`
  height: 40px;
  width: auto;
  object-fit: cover;
`;

function KakaoLogin() {
  return (
    <a id="kakao-login-btn" href={getKakaoUrl()}>
      <LoginImage src={KakaoImg} alt="kakao login" style={{ height: '42px' }} />
    </a>
  );
}
export default KakaoLogin;
