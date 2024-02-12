import React, { useState } from 'react';
import { LuAlertCircle } from 'react-icons/lu';
import styled from 'styled-components';

const AlertCost = styled(LuAlertCircle)`
  position: fixed;
  margin-left: 330px;
  z-index: 100;
  color: #707070;
  cursor: pointer;
`;

const Tip = styled.div`
  position: fixed;
  right: 50%;
  transform: translateX(50%);
  display: ${props => (props.isVisible ? 'block' : 'none')};
  /* border: 1px solid #707070; */
  padding: 5px;
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
        장소별로 왼쪽(예상비용), 오른쪽(실제비용)을 적고 비용을 비교해보세요!
      </Tip>
    </div>
  );
}

export default CostAlert;
