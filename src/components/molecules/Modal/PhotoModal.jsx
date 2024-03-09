import React from 'react';
import styled from 'styled-components';
import { AiFillCloseCircle, AiOutlinePlus } from 'react-icons/ai';

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
  width: 100%;
  height: 400px;
  margin-top: 10px;

  background: rgba(217, 217, 217, 0.5);
  border-radius: 10px;
  white-space: nowrap;

  /* 업로드 될 사진 위치 */
  display: flex;
  flex-direction: row;
`;

const AddContainer = styled.div`
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

function PhotoModal({ handleClosePhoto }) {
  return (
    <Modal>
      <ModalBody>
        <CloseIcon onClick={handleClosePhoto} />
        <p style={{ fontSize: '10px', color: '#707070', marginTop: '10px' }}>
          사진은 최대 9장까지 첨부할 수 있습니다.
        </p>
        <PhotoUpload>
          <AddContainer>
            <AiOutlinePlus />
          </AddContainer>
          <UploadImgContainer />
        </PhotoUpload>
      </ModalBody>
    </Modal>
  );
}

export default PhotoModal;
