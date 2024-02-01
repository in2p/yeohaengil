import { useEffect } from 'react';

import '../../../styles/globals.css';

import styled from 'styled-components';
import KakaoLogin from '../../../assets/login/kakao/kakao_login_medium_wide.png';
import NaverLogin from '../../../assets/login/naver/btnG.png';
import NaverIcon from '../../../assets/login/naver/btnG_icon.png';
import TripIcon from '../../../assets/Gil_logo2.png';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const IconWrapper = styled.img``;

const LoginWrapper = styled.div``;

const LoginImage = styled.img`
  height: 40px;
  width: auto;
  object-fit: cover;
`;
//
const NaverLoginBox = styled.div`
  margin-top: 5px;
  background-color: #03c75a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  height: 42px;
  width: 280px;
  color: white;
  font-size: 14px;
  text-decoration: none;
`;

function LoginPage() {
  useEffect(() => {
    // 👇️ adding multiple classes to the body element
    document.body.classList.add('bg-main');
  }, []);

  return (
    <LoginContainer>
      <IconWrapper src={TripIcon} alt="icon" />
      <LoginWrapper>
        <a id="kakao-login-btn" href="/">
          <LoginImage
            src={KakaoLogin}
            alt="kakao login"
            style={{ height: '42px' }}
          />
        </a>

        <NaverLoginBox as="a" href="/">
          <LoginImage src={NaverIcon} alt="naver icon" />
          <p>네이버 로그인</p>
          <div style={{ width: '20px' }} />
        </NaverLoginBox>
      </LoginWrapper>
    </LoginContainer>
  );
}
export default LoginPage;
