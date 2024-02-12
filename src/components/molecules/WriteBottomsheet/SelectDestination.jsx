import React from 'react';
import styled, { keyframes } from 'styled-components';
import { IoIosCloseCircle } from 'react-icons/io';
import DestinationBtn from '../../atoms/BottomsheetBtn/DestinationBtn.jsx';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 998;

  background-color: rgba(0, 0, 0, 0.15); //투명도
`;
const fadeIn = keyframes`
from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const BottomSheetContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 375px;
  height: 800px;
  background-color: white;
  transition: height 0.3s ease;
  overflow: auto;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  z-index: 999;
  animation: ${fadeIn} 0.3s;
`;

const BottomSheetContent = styled.div`
  padding: 20px;
`;

const CloseBtn = styled(IoIosCloseCircle)`
  font-size: 40px;
  position: fixed;
  top: 13%;
  margin-left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;

function SelectDestination({ isOpen, onClose, children }) {
  return (
    <Wrapper>
      <CloseBtn onClick={onClose} />
      <BottomSheetContainer isOpen={isOpen}>
        <BottomSheetContent>{children}</BottomSheetContent>
        <DestinationBtn onClose={onClose} />
      </BottomSheetContainer>
    </Wrapper>
  );
}

export default SelectDestination;
