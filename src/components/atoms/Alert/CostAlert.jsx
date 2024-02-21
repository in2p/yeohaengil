import React, { useState } from 'react';
import { LuAlertCircle } from 'react-icons/lu';
import styled from 'styled-components';

const AlertCost = styled(LuAlertCircle)`
  margin-left: 330px;
  z-index: 100;
  color: #707070;
  cursor: pointer;
`;

const Tip = styled.div`
  text-align: center;
  display: ${props => (props.isVisible ? 'block' : 'none')};
  border: 1px solid #707070;
  padding: 3px;
  border-radius: 10px;
  background-color: #fff;
  font-size: 10px;
  color: #707070;
  z-index: 100;
`;
function CostAlert() {
  const [isHover, setIsHover] = useState(false);

  return (
    <div>
      <AlertCost
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      />
      <Tip isVisible={isHover}>
        여행 날짜별로 장소를 추가하여 일정을 추가해보세요!
      </Tip>
    </div>
  );
}

export default CostAlert;
