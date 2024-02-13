import React from 'react';
import { styled, keyframes } from 'styled-components';
import { TypeAnimation } from 'react-type-animation';

import TripIcon from '../../../assets/Gil_logo.png';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// Styled components
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid white;
  border-radius: 50%;
  border-left-color: #fe4c40;
  animation: ${spin} 1.5s linear infinite;
  margin-bottom: 20px;
`;
const IconWrapper = styled.img`
  height: 70px;
  margin-bottom: 20px;
`;

function LoginSpinner() {
  return (
    <LoadingContainer>
      <IconWrapper src={TripIcon} alt="icon" />
      <LoadingSpinner />
      <TypeAnimation
        sequence={['여행길 로딩중...', 2000, '잠시만 기다려 주세요..', 2000]}
        wrapper="span"
        cursor
        repeat={Infinity}
        style={{ display: 'inline-block' }}
      />
    </LoadingContainer>
  );
}
export default LoginSpinner;
