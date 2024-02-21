import React, { useState } from 'react';
import styled from 'styled-components';
import { LuMap } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const Button = styled.button`
  font-weight: bold;
  font-size: 15px;
  border-radius: 13px;
  padding: 10px;

  position: fixed;
  left: 50%;
  transform: translateX(
    -50%
  ); /* 버튼을 너비의 절반만큼 뒤로 이동하여 효과적으로 수평 중앙에 배치 */
  bottom: 80px;
  border: none;

  &:hover {
    opacity: 0.8;
  }
`;
const Map = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  background: gray;
  font-size: 30px;

  position: fixed;
  bottom: 80px;
  margin-left: 300px;
`;

function WriteButton() {
  return (
    <div>
      <Button style={{ background: '#FE4C40', color: 'white' }}>
        <p style={{ margin: '0px' }}>발행하기</p>
      </Button>
      <Link to="/map">
        <Map>
          <LuMap />
        </Map>
      </Link>
    </div>
  );
}

export default WriteButton;
