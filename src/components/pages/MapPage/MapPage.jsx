import { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import '../../../styles/globals.css';
import styled from 'styled-components';
import DayItem from '../../molecules/DayItem/DayItem.jsx';

const { kakao } = window;

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
  const [day, setDay] = useState(1);

  const changeDay = i => {
    setDay(i);
  };
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
  }, []);
  return (
    <MapContainer>
      <div className="d-flex">
        <DayItem length={10} day={day} changeDay={changeDay} />
        {/* <IoIosArrowForward style={{ fontSize: '20px' }} /> */}
      </div>
      <MapWrapper id="map" />
      <p className="font-small float-right mt-15">총거리: 100km</p>
    </MapContainer>
  );
}
export default MapPage;
