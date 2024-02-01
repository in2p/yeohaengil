import React, { useState } from 'react';
import styled from 'styled-components';
import UploadModal from '../../pages/WriterPage/UploadModal.jsx';

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
`;

function PostButton() {
  const [uploadModal, setUploadModal] = useState(false);

  return (
    <div>
      <Button
        style={{ background: '#FE4C40', color: 'white' }}
        onClick={() => setUploadModal(true)}
      >
        <p style={{ margin: '0px' }}>발행하기</p>
      </Button>
      {uploadModal === true ? <UploadModal /> : null}
    </div>
  );
}

export default PostButton;
