import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  bottom: 100px;
  justify-content: center;
  align-items: center;
`;
const Logout = styled.div`
  position: relative;
  color: #fe4c40;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
`;

const Delete = styled.div`
  color: #626262;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  margin-top: 20px;
`;
function SettingLogout() {
  return (
    <Wrapper>
      <Logout>로그아웃</Logout>
      <Delete>탈퇴하기</Delete>
    </Wrapper>
  );
}

export default SettingLogout;
