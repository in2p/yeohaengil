import '../../../styles/globals.css';
import styled from 'styled-components';

import TripIcon from '../../../assets/Gil_logo.png';
import KakaoLogin from '../../molecules/Login/KakaoLogin.jsx';
import NaverLogin from '../../molecules/Login/NaverLogin.jsx';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const IconWrapper = styled.img`
  height: 70px;
`;

const LoginWrapper = styled.div``;

function LoginPage() {
  document.body.classList.add('bg-main');

  return (
    <LoginContainer>
      <div style={{ flexBasis: '20px' }} />
      <IconWrapper src={TripIcon} alt="icon" />
      <LoginWrapper>
        <KakaoLogin />
        <NaverLogin />
      </LoginWrapper>
    </LoginContainer>
  );
}

export default LoginPage;
