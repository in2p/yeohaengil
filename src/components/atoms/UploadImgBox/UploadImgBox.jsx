import React from 'react';
import styled from 'styled-components';
import { LuImagePlus } from 'react-icons/lu';

const UploadImgContainer = styled.button`
  width: 196px;
  height: 261px;
  border: 1px solid #707070;
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function UploadImgBox() {
  return (
    <UploadImgContainer>
      <LuImagePlus style={{ fontSize: '20px' }} />
    </UploadImgContainer>
  );
}
export default UploadImgBox;
