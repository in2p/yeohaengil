import React from 'react';
import styled from 'styled-components';

const CircleContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  margin-bottom: 0px;
  border: 1px solid #fe4c40;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
function CircleBox({ img }) {
  return (
    <CircleContainer
      style={{
        backgroundImage: `url("${img}")`,
      }}
    />
  );
}
export default CircleBox;
