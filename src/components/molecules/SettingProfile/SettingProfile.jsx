import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import profile from '../../../assets/user.png';

const ProfileImg = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 100%;

  background-image: url(${props => props.profile});
  background-repeat: no-repeat;
  background-size: contain;

  margin: 0 auto;
`;

const UserID = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

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

function SettingProfile() {
  const navigate = useNavigate();

  const navigateModifyProfile = () => {
    navigate('/modifyProfile');
  };
  return (
    <div>
      <ProfileImg profile={profile} />
      <UserID> user_id </UserID>
      <ModifyBtn onClick={navigateModifyProfile}>프로필 수정</ModifyBtn>
    </div>
  );
}

export default SettingProfile;
