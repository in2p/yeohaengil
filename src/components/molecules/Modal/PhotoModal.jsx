import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillCloseCircle, AiOutlinePlus } from 'react-icons/ai';
import { FaMinusCircle } from 'react-icons/fa';

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
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  width: 350px;
  height: 500px;
  border-radius: 10px;
  padding: 7px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(34, 36, 38, 0.15);
  text-align: center;
`;

const PhotoUpload = styled.div`
  display: flex;
  flex-direction: column;
`;
const UploadImgContainer = styled.div`
  /* 업로드완료 사진 컨테이너 */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  width: 100%;
  height: 350px;
  margin-top: 10px;

  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
`;

const ImageContainer = styled.div`
  position: relative;
  margin: 10px;
`;

const PreviewImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  object-fit: cover;
`;

const DeleteIcon = styled(FaMinusCircle)`
  position: absolute;
  top: 0;
  right: 0;
  color: red;
  cursor: pointer;
`;

const AddContainer = styled.label`
  /* 업로드할 (+)사진추가 */
  box-sizing: border-box;

  width: 70px;
  height: 70px;

  background: #f7f7f7;
  border: 1px dashed rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: #707070;
`;

const PhotoButton = styled.button`
  /* 추가하기 버튼 */
  font-weight: bold;
  font-size: 12px;
  width: 80px;
  border-radius: 12px;

  padding: 10px;
  margin: 10px;
  background-color: #fe4c40;
  color: #fff;
  border: none;

  &:hover {
    opacity: 0.8;
  }
`;

function PhotoModal({ handleClosePhoto }) {
  const [showImages, setShowImages] = useState([]);

  // 이미지 상대경로 저장
  const uploadFile = e => {
    const imageLists = e.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i += 1) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    // 최대 9장까지 사진 첨부
    if (imageUrlLists.length > 9) {
      imageUrlLists = imageUrlLists.slice(0, 9);
      alert('9장 초과');
    }

    setShowImages(imageUrlLists);
    console.log(imageUrlLists);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = id => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  return (
    <Modal>
      <ModalBody>
        <CloseIcon onClick={handleClosePhoto} />
        <p style={{ fontSize: '10px', color: '#707070', marginTop: '10px' }}>
          사진은 최대 9장까지 첨부할 수 있습니다.
        </p>
        <PhotoUpload>
          <AddContainer htmlFor="file" onChange={uploadFile}>
            <AiOutlinePlus />
            <input
              type="file"
              id="file"
              accept="image/*"
              style={{ display: 'none' }}
              multiple
            />
          </AddContainer>
          <UploadImgContainer>
            {showImages.map((url, id) => (
              <ImageContainer key={url.id}>
                <PreviewImage src={url} alt="미리보기" />
                <DeleteIcon onClick={() => handleDeleteImage(id)} />
              </ImageContainer>
            ))}
          </UploadImgContainer>
        </PhotoUpload>
        <PhotoButton>추가하기</PhotoButton>
      </ModalBody>
    </Modal>
  );
}

export default PhotoModal;
