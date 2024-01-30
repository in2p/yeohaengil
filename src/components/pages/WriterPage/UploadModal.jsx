import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { AiFillCloseCircle } from 'react-icons/ai';

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 3px 30px;
  align-items: center;
  font-size: 13px;
`;

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

const TextBox = styled.div`
  display: flex;
  width: 170px;
  height: 20px;
  border-radius: 8px;
  border: 1px solid #d1d1d1;
  padding: 2px;
`;

const Placeholder = styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
  color: #d1d1d1;
`;

const Input = styled.input`
  border: none;
  outline: none;
  direction: rtl; // 글쓰기 right to left
`;

const UploadBtn = styled.button`
  width: 200px;
  height: 23px;
  border-radius: 5px;
  border: none;

  font-weight: 800;
  font-size: 13px;
  color: #fff;
  text-align: center;
  line-height: 20px;

  background-color: #fe4c40;
  margin-left: auto;
  margin-right: auto;
  padding: 1px;

  position: relative;
`;

function UploadModal() {
  const [accomCost, setAccomCost] = useState();
  const [transCost, setTransCost] = useState();
  const [totalBudget, setTotalBudget] = useState(0);

  const [openModal, setOpenModal] = useState(true);

  // 숙박비와 교통비가 변경될 때마다 다시 계산
  // parseFloat: 문자열 값을 숫자로 변환, 기본값 0
  // toLocaleString(): 쉼표 지정
  useEffect(() => {
    const parsedAccomCost = parseFloat(accomCost) || 0;
    const parsedTransCost = parseFloat(transCost) || 0;
    const newTotalBudget = parsedAccomCost + parsedTransCost;
    setTotalBudget(newTotalBudget);
  }, [accomCost, transCost]);

  return (
    <Modal>
      <ModalBody>
        <CloseIcon onClick={() => setOpenModal(false)} />
        <FlexBox>
          <p style={{ marginTop: '35px' }}>공개 설정</p>
        </FlexBox>
        <FlexBox>
          <p>숙소비를 포함해요</p>
          <p
            style={{
              fontSize: '8px',
              color: '#D1D1D1',
              margin: '0 5px 0 15px',
            }}
          >
            1인당
          </p>

          <TextBox>
            <Input
              type="number"
              value={accomCost}
              onChange={e => setAccomCost(e.target.value)}
            />
            <Placeholder>원</Placeholder>
          </TextBox>
        </FlexBox>
        <FlexBox>
          <p>교통비를 포함해요</p>
          <p
            style={{
              fontSize: '8px',
              color: '#D1D1D1',
              margin: '0 5px 0 15px',
            }}
          >
            1인당
          </p>
          <TextBox>
            <Input
              type="number"
              value={transCost}
              onChange={e => setTransCost(e.target.value)}
            />
            <Placeholder>원</Placeholder>
          </TextBox>
        </FlexBox>
        <p style={{ fontSize: '15px', fontWeight: '800' }}>
          총 예산 {totalBudget.toLocaleString()} 원
        </p>
        <UploadBtn>발행하기</UploadBtn>
      </ModalBody>
    </Modal>
  );
}

export default UploadModal;
