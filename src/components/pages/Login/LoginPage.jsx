import { useEffect } from 'react';

import '../../../styles/globals.css';

import styled from 'styled-components';

import TripIcon from '../../../assets/Gil_logo2.png';
import KakaoLogin from './KakaoLogin.jsx';
import NaverLogin from './NaverLogin.jsx';

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

//

function LoginPage() {
  useEffect(() => {
    // 👇️ adding multiple classes to the body element
    document.body.classList.add('bg-main');
  }, []);

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
