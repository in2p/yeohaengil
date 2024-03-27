import React from 'react';
import styled from 'styled-components';
import SettingProfile from '../../molecules/SettingProfile/SettingProfile.jsx';
import SettingBox from '../../atoms/SettingBtnBox/SettingBox.jsx';

const Wrapper = styled.div`
  text-align: center;
  margin-top: 100px;
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

function SettingPrev() {
  return (
    <div>
      <SettingProfile />
      <SettingBox />
      <Wrapper>
        <Logout>로그아웃</Logout>
        <Delete>탈퇴하기</Delete>
      </Wrapper>
    </div>
  );
}

export default SettingPrev;
