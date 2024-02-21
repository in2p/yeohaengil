import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { AiFillCloseCircle } from 'react-icons/ai';
import SearchBox from '../../atoms/SearchBox/SearchBox.jsx';

const { kakao } = window;

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;

  background-color: rgba(0, 0, 0, 0.15); //투명도
`;

const CloseIcon = styled(AiFillCloseCircle)`
  color: #9f9f9f;
  font-size: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ModalBody = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 350px;
  height: 250px;
  border-radius: 10px;
  padding: 7px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(34, 36, 38, 0.15);
  text-align: center;
`;

const UploadBtn = styled.button`
  width: 200px;
  height: 23px;
  border-radius: 5px;
  border: none;

  font-weight: 800;
  font-size: 13px;
  text-align: center;
  padding: 1px;
  margin-top: 5px;
`;

function MapModal({ handleCloseModal, handleAddPlace, onSearch }) {
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();

  const handleSearch = searchedPlace => {
    console.log('검색된 장소:', searchedPlace);
  };

  useEffect(() => {
    if (map) {
      const ps = new kakao.maps.services.Places();

      ps.keywordSearch(onSearch, (data, status) => {
        if (status === kakao.maps.services.Status.OK) {
          console.log('Search Result:', data);
          const newMarkers = data.map(place => ({
            position: new kakao.maps.LatLng(place.y, place.x),
            content: place.place_name,
          }));

          setMarkers(newMarkers);

          const bounds = new kakao.maps.LatLngBounds();
          newMarkers.forEach(marker => bounds.extend(marker.position));
          map.setBounds(bounds);
        }
      });
    }
  }, [map, onSearch]);

  return (
    <Modal>
      <ModalBody>
        <CloseIcon onClick={handleCloseModal} />
        <SearchBox onSearch={handleSearch} />
        <Map
          center={{
            lat: 37.566826,
            lng: 126.9786567,
          }}
          level={3}
          style={{
            width: '100%',
            height: '16vh',
            borderRadius: '15px',
            margin: '10px auto',
          }}
          onCreate={setMap}
        >
          {markers.map(marker => (
            <MapMarker
              key={marker.content}
              position={marker.position}
              onClick={() => setInfo(marker)}
            >
              {info && info.content === marker.content && (
                <div style={{ color: '#000' }}>{marker.content}</div>
              )}
            </MapMarker>
          ))}
        </Map>
        <UploadBtn className="bg-main" onClick={handleAddPlace}>
          추가하기
        </UploadBtn>
      </ModalBody>
    </Modal>
  );
}
export default MapModal;
