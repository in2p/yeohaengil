import React from 'react';
import styled from 'styled-components';
import NaverImg from '../../../assets/login/naver/btnG.png';
import NaverIcon from '../../../assets/login/naver/btnG_icon.png';

import getNaverUrl from '../../../utils/getNaverUrl.jsx';

const LoginImage = styled.img`
  height: 40px;
  width: auto;
  object-fit: cover;
`;
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

function NaverLogin() {
  return (
    <NaverLoginBox as="a" href={getNaverUrl()}>
      <LoginImage src={NaverIcon} alt="naver icon" />
      <p>네이버 로그인</p>
      <div style={{ width: '20px' }} />
    </NaverLoginBox>
  );
}
export default NaverLogin;
