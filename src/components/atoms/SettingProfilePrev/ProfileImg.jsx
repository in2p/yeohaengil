import React from 'react';
import styled from 'styled-components';
import profile from '../../../assets/user.png';

const Circle = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 100%;

  background-image: url(${props => props.profile});
  background-repeat: no-repeat;
  background-size: contain;

  margin: 0 auto;
`;
function ProfileImg() {
  return <Circle profile={profile} />;
}

export default ProfileImg;
