import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GoScreenFull } from 'react-icons/go';
import { BsFullscreenExit } from 'react-icons/bs';

const MapWrapper = styled.div`
  height: ${props =>
    props.isfull ? `calc(100vh - ${props.contentHeight + 200}px)` : '200px'};
  background-color: #fe4c40;
  position: relative;
  transition: all 1s;
`;

const FullScreen = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 17px;
`;
function MainMap({ contentHeight }) {
  const [isfull, setIsfull] = useState(false);

  const changeFull = () => {
    if (isfull) setIsfull(false);
    else setIsfull(true);
  };

  return (
    <MapWrapper id="map" isfull={isfull} contentHeight={contentHeight}>
      <FullScreen>
        {isfull ? (
          <BsFullscreenExit onClick={changeFull} />
        ) : (
          <GoScreenFull onClick={changeFull} />
        )}
      </FullScreen>
    </MapWrapper>
  );
}
export default MainMap;
