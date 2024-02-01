import React from 'react';
import styled from 'styled-components';
import SettingBox from '../../atoms/SettingBtnBox/SettingBox.jsx';

const Notice = styled.div`
  color: #676565;
  font-size: 13px;
  font-weight: 700;
  padding: 0 5px;
  margin-top: 40px;
`;

function SettingNotice() {
  return (
    <div>
      <Notice>정보</Notice>
      <SettingBox>
        <div className="alarmText">개인정보 취급방침</div>
        <div className="alarmText">자주 묻는 질문</div>
      </SettingBox>
    </div>
  );
}

export default SettingNotice;
