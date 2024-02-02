import React from 'react';
import styled from 'styled-components';
import ProfileImg from '../../atoms/SettingProfilePrev/ProfileImg.jsx';
import ProfileButton from '../../atoms/SettingProfilePrev/ProfileButton.jsx';

const UserID = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
function SettingProfile() {
  return (
    <div>
      <ProfileImg />
      <UserID> user_id </UserID>
      <ProfileButton />
    </div>
  );
}

export default SettingProfile;
