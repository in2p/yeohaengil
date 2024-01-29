import React from 'react';
import styled from 'styled-components';

const CircleContainer = styled.div`
  border-radius: 100px;
  margin-bottom: 0px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: ${props => props.size};
  height: ${props => props.size};
  border: ${props => props.border};
  background-image: url('${props => props.img}');
`;

function CircleBox({
  children,
  img,
  size = '50px',
  border = '1px solid #fe4c40',
}) {
  return <CircleContainer size={size} border={border} img={img} />;
}
export default CircleBox;
