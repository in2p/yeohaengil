import React, { useState } from 'react';
import styled from 'styled-components';
import { MdAddPhotoAlternate } from 'react-icons/md';
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

function WriteButton() {
  const [photoOpen, setPhotoOpen] = useState(false);

  const handleClosePhoto = () => {
    setPhotoOpen(false);
  };

  return (
    <div>
      <Button style={{ background: '#FE4C40', color: 'white' }}>
        <p style={{ margin: '0px' }}>발행하기</p>
      </Button>
      <AddPhoto onClick={() => setPhotoOpen(true)}>
        <MdAddPhotoAlternate />
      </AddPhoto>
      {photoOpen && <PhotoModal handleClosePhoto={handleClosePhoto} />}
    </div>
  );
}

export default WriteButton;
