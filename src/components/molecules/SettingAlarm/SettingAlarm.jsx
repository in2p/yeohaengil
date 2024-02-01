import React from 'react';
import styled from 'styled-components';
import SettingBox from '../../atoms/SettingBtnBox/SettingBox.jsx';

const Alarm = styled.div`
  color: #676565;
  font-size: 13px;
  font-weight: 700;
  padding: 0 5px;
  margin-top: 40px;
`;
function SettingAlarm() {
  return (
    <div>
      <Alarm>소통 및 알람</Alarm>
      <SettingBox>
        <div>메세지 설정</div>
        <div>댓글 설정</div>
      </SettingBox>
    </div>
  );
}

export default SettingAlarm;
