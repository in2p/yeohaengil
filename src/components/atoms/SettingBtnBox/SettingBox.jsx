import React from 'react';
import styled from 'styled-components';

const BoxTop = styled.div`
  width: 330px;
  height: 49px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border: 1px solid #9f9d9d;
  border-bottom: none;

  margin: 0 auto;
  margin-top: 5px;

  .alarmText {
    font-size: 13px;
    margin-left: 20px;
    line-height: 49px;
  }
`;
const BoxBottom = styled.div`
  width: 330px;
  height: 49px;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border: 1px solid #9f9d9d;

  margin: 0 auto;

  .alarmText {
    font-size: 13px;
    margin-left: 20px;
    line-height: 49px;
  }
`;

function SettingBox() {
  return (
    <div>
      <BoxTop>
        <div className="alarmText">메세지 설정</div>
      </BoxTop>
      <BoxBottom>
        <div className="alarmText">댓글 설정</div>
      </BoxBottom>
    </div>
  );
}

export default SettingBox;
