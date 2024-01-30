import React from 'react';

import styled from 'styled-components';
import '../../../styles/globals.css';

const RectWrapper = styled.button`
  background: ${props => (props.$primary ? '#FE4C40' : '#eee')};
  color: ${props => (props.$primary ? 'white' : 'black')};
  border: none;
  width: ${props => props.width};
  height: 25px;
  text-align: center;
  font-size: 12px;
  border-radius: 8px;
  margin: 1px;
`;

function RectButton({ children, width, $primary }) {
  if (!$primary) {
    return <RectWrapper width={width}>{children}</RectWrapper>;
  }
  return (
    <RectWrapper width={width} $primary>
      {children}
    </RectWrapper>
  );
}
export default RectButton;
