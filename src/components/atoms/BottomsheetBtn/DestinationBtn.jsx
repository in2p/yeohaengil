import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 375px;
`;
const CloseBtn = styled.button`
  width: 100px;
  height: 35px;
  border-radius: 10px;
  border: 1px solid #707070;
  background-color: #fff;
  margin-right: 10px;
  cursor: pointer;
`;

const OkBtn = styled.button`
  width: 200px;
  height: 35px;
  border-radius: 10px;
  border: 0;
  font-weight: bold;
  cursor: pointer;
`;

function DestinationBtn({ onClose }) {
  const handleApply = () => {
    onClose();
  };
  return (
    <Wrapper>
      <CloseBtn onClick={onClose}>닫기</CloseBtn>
      <OkBtn className="bg-main" onClick={handleApply}>
        적용하기
      </OkBtn>
    </Wrapper>
  );
}

export default DestinationBtn;
