import React from 'react';
import { LuMap } from 'react-icons/lu';
import styled from 'styled-components';

const Map = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  background: gray;
  font-size: 15px;

  position: fixed;
  bottom: 80px;
  right: 39%;
`;

function MapCircle() {
  return (
    <Map>
      <LuMap style={{ fontSize: '30px' }} />
    </Map>
  );
}

export default MapCircle;
