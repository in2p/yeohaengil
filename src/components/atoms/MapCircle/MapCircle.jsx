import React from 'react';
import { Link } from 'react-router-dom';
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
  font-size: 30px;

  position: fixed;
  bottom: 80px;
  margin-left: 300px;
`;

function MapCircle() {
  return (
    <Link to="/map">
      <Map>
        <LuMap />
      </Map>
    </Link>
  );
}

export default MapCircle;
