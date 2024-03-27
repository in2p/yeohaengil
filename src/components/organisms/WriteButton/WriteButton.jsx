import React, { useState } from 'react';
import styled from 'styled-components';
import { MdAddPhotoAlternate } from 'react-icons/md';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PhotoModal from '../../molecules/Modal/PhotoModal.jsx';

const Button = styled.button`
  font-weight: bold;
  font-size: 15px;
  border-radius: 13px;
  padding: 10px;

  position: fixed;
  left: 50%;
  transform: translateX(
    -50%
  ); /* 버튼을 너비의 절반만큼 뒤로 이동하여 효과적으로 수평 중앙에 배치 */
  bottom: 80px;
  border: none;

  &:hover {
    opacity: 0.8;
  }
`;
const AddPhoto = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  background: gray;
  font-size: 32px;

  position: fixed;
  bottom: 80px;
  margin-left: 300px;
`;

function WriteButton({ placeInfo }) {
  const [photoOpen, setPhotoOpen] = useState(false);
  const navigate = useNavigate();

  const handleClosePhoto = () => {
    setPhotoOpen(false);
  };

  const handlePostPlaces = async () => {
    await axios({
      method: 'post',
      url: 'http://yeohaengil.co.kr:3300/posts',
      withCredentials: false,
      data: { placeInfo },
    })
      .then(() => {
        navigate('/postingphoto'); // API 요청 성공 시 페이지 이동
      })
      .catch(error => {
        console.error('Error exchanging placeInfo for token:', error);
      });
  };

  return (
    <div>
      <Button
        style={{ background: '#FE4C40', color: 'white' }}
        onClick={handlePostPlaces}
      >
        <p style={{ margin: '0px' }}>다음으로 ⮕</p>
      </Button>
      <AddPhoto onClick={() => setPhotoOpen(true)}>
        <MdAddPhotoAlternate />
      </AddPhoto>
      {photoOpen && <PhotoModal handleClosePhoto={handleClosePhoto} />}
    </div>
  );
}

export default WriteButton;
