import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import styled from 'styled-components';

const ArrowWrapper = styled.div`
  z-index: 5;
  background-color: white;
  border-radius: 50%;
  margin-top: auto;
  width: 25px;
  height: 25px;
  color: #fe4c40;
  transition: 0.5s;
  position: relative;
  &:hover {
    background: #fe4c40;
    color: white;
  }
`;

const ArrowForward = styled(IoIosArrowForward)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
`;

const ArrowBack = styled(IoIosArrowBack)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
`;

function ArrowButton({ handleClick, $back }) {
  if ($back) {
    return (
      <ArrowWrapper onClick={handleClick}>
        <ArrowBack />
      </ArrowWrapper>
    );
  }

  return (
    <ArrowWrapper onClick={handleClick}>
      <ArrowForward />
    </ArrowWrapper>
  );
}
export default ArrowButton;
