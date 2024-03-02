import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai';
import './InfoWindow.css';
import { useDispatch, useSelector } from 'react-redux';
import SearchBox from '../../atoms/SearchBox/SearchBox.jsx';
import { setPlace } from '../../../store.jsx';

const { kakao } = window;

const MapContainer = styled.div`
  width: 100%;
  height: 16vh;
  border-radius: 15px;
  margin: 10px auto;
`;

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.08); //투명도
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
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
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

function MapModal({ handleCloseModal }) {
  const dispatch = useDispatch();
  const selectedPlace = useSelector(state => state.selectedPlace);

  const searchMap = useCallback(
    searchedPlace => {
      const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
      const container = document.getElementById('myMap');
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);

      const ps = new kakao.maps.services.Places();

      function displayMarker(place) {
        const marker = new kakao.maps.Marker({
          map,
          position: new kakao.maps.LatLng(place.y, place.x),
        });

        // 마커에 마우스 오버 이벤트를 등록하여 인포윈도우를 엽니다
        kakao.maps.event.addListener(marker, 'mouseover', () => {
          infowindow.setContent(
            `<div class="info-window">${place.place_name}</div>`,
          );
          infowindow.open(map, marker);
        });

        kakao.maps.event.addListener(marker, 'mouseout', () => {
          if (!marker.clicked) {
            infowindow.close();
          }
        });

        kakao.maps.event.addListener(marker, 'click', () => {
          dispatch(setPlace(place));
          marker.clicked = true;
          console.log(place);
        });
      }

      function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
          const bounds = new kakao.maps.LatLngBounds();

          for (let i = 0; i < data.length; i += 1) {
            displayMarker(data[i]);
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }
          console.log(data);

          map.setBounds(bounds);
        }
      }

      ps.keywordSearch(searchedPlace, placesSearchCB);
    },
    [dispatch],
  );

  const handleSearch = searchedPlace => {
    console.log(searchedPlace);
    searchMap(searchedPlace);
  };

  const handleAddButtonClick = () => {
    if (selectedPlace) {
      const placeInfo = {
        placeName: selectedPlace.place_name,
        categoryName: selectedPlace.category_group_name,
      };
      console.log('selectedPlace', selectedPlace);
      console.log('placeInfo', placeInfo);
      handleCloseModal();
      dispatch(setPlace(placeInfo));
    }
  };

  useEffect(() => {
    searchMap();
  }, [searchMap]);

  return (
    <Modal>
      <ModalBody>
        <CloseIcon onClick={handleCloseModal} />
        <SearchBox searchMap={handleSearch} />
        <MapContainer id="myMap" />
        <UploadBtn className="bg-main" onClick={handleAddButtonClick}>
          추가하기
        </UploadBtn>
      </ModalBody>
    </Modal>
  );
}

export default MapModal;
