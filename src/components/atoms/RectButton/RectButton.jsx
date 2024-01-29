import React from 'react';

import styled from 'styled-components';
import '../../../styles/globals.css';

const RectWrapper = styled.button`
  width: ${props => props.width};
  height: 25px;
  text-align: center;
  font-size: 12px;
  background-color: white;
  border: 1.5px solid #eee;
  border-radius: 3px;
  margin: 1px;
`;

function RectButton({ children, width }) {
  return <RectWrapper width={width}>{children}</RectWrapper>;
}
export default RectButton;
