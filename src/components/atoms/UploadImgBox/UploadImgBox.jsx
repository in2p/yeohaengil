import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMdPhotos } from 'react-icons/io';
import { FaMinusCircle } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
`;

const PreviewContainer = styled.div`
  width: 100%;
  max-width: 200px;
  height: 261px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap; // 이미지가 한줄로
  display: flex;
`;

const PreviewImage = styled.img`
  width: 196px;
  height: 100%;
  object-fit: cover;
  margin-right: 10px;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const DeleteIcon = styled(FaMinusCircle)`
  position: absolute;
  top: 0;
  right: 0;
  color: red;
  cursor: pointer;
`;

const Label = styled.label`
  top: 0;
  right: 0;
  width: 196px;
  height: 261px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  align-items: center;

  background-position: center;
  border: 2px dashed #707070;
  cursor: pointer;

  margin-right: 20px;
  font-size: 30px;
`;

const Input = styled.input`
  display: none;
`;

function UploadImgBox() {
  const [uploadImg, setUploadImg] = useState([]);
  const [previewImg, setPreviewImg] = useState([]);
  const [showPreview, setShowPreview] = useState(false);

  const uploadFile = e => {
    const fileArr = e.target.files;
    const fileUrls = [];
    const uploadedFiles = Array.from(fileArr); // 선택된 파일을 포함하는 FileList 객체인 fileArr을 배열로 변환
    console.log(fileArr);

    setUploadImg(prevUploadImg => [...prevUploadImg, ...uploadedFiles]); // 새 파일이 기존 배열에 대체가 아닌, 추가됨
    setShowPreview(true); // 파일 업로드 후 미리보기 표시

    uploadedFiles.forEach(file => {
      const fileReader = new FileReader();

      // 읽기 끝나면 발생하는 이벤트, onload : 데이터를 문자열로 변환
      fileReader.onload = () => {
        fileUrls.push(fileReader.result); // 현재 파일의 데이터 URL을 fileUrls 배열에 추가
        setPreviewImg(prevPreviewImg => [...prevPreviewImg, fileReader.result]);
        // const imageData = {
        //   id: Date.now(),
        //   fileUrls: fileUrls.push(fileReader.result),
        // };
        // setPreviewImg(prevPreviewImg => [...prevPreviewImg, imageData]);
      };

      fileReader.readAsDataURL(file); // base64형태로 파일 읽어오기
    });
  };

  const deleteImg = id => {
    const deleteUploadImg = [...uploadImg];
    deleteUploadImg.splice(id, 1);
    setUploadImg(deleteUploadImg);

    const deletePreviewImg = [...previewImg];
    deletePreviewImg.splice(id, 1);
    setPreviewImg(deletePreviewImg);

    // 모든 이미지가 삭제되었을 때 미리보기 숨기기
    if (deletePreviewImg.length === 0) {
      setShowPreview(false);
    }
  };
  return (
    <Container>
      {showPreview && (
        <PreviewContainer>
          {previewImg.map(img => (
            <ImageContainer key={img}>
              <PreviewImage alt="미리보기" src={img} />
              <DeleteIcon alt="이미지 삭제" onClick={() => deleteImg(img)} />
            </ImageContainer>
          ))}
        </PreviewContainer>
      )}

      <Label htmlFor="file">
        <IoMdPhotos />
      </Label>
      <Input type="file" id="file" accept="image/*" onChange={uploadFile} />
    </Container>
  );
}

export default UploadImgBox;
