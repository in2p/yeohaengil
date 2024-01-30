import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import '../../../styles/globals.css';
import styled from 'styled-components';
import DayItem from '../../molecules/DayItem/DayItem.jsx';

const MapContainer = styled.div`
  height: 100%;
`;

const MapWrapper = styled.div`
  margin-top: 5px;
  background-color: #eee;
  height: 65vh;
  border-radius: 15px;
`;

function MapPage() {
  return (
    <MapContainer>
      <div className="d-flex">
        <DayItem length={4} />
        <IoIosArrowForward style={{ fontSize: '20px' }} />
      </div>
      <MapWrapper />
      <p className="font-small float-right mt-15">총거리: 100km</p>
    </MapContainer>
  );
}
export default MapPage;
