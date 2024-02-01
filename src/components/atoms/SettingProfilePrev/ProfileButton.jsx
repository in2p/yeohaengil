import React from 'react';
import styled from 'styled-components';

const ModifyBtn = styled.button`
  width: 330px;
  height: 48px;
  border-radius: 9px;
  border: 1px solid #000;
  background: #fff;

  display: flex;
  margin: 0 auto;
  margin-top: 10px;

  align-items: center;
  justify-content: center;
`;
function ProfileButton() {
  return <ModifyBtn>프로필 수정</ModifyBtn>;
}

export default ProfileButton;
