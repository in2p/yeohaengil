import React from 'react';
import styled from 'styled-components';

const CircleContainer = styled.div`
  border-radius: 30px;
  margin-bottom: 0px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
function CircleBox({ img, size = '50px', color = '#fe4c40' }) {
  return (
    <CircleContainer
      style={{
        width: `${size}`,
        height: `${size}`,
        border: `1px solid ${color}`,
        backgroundImage: `url("${img}")`,
      }}
    />
  );
}
export default CircleBox;
