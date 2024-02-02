import React from 'react';
import styled from 'styled-components';
import { LuPlane, LuCalendarDays } from 'react-icons/lu';

const FlexBox = styled.div`
  display: flex;
`;

const IconContainer = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 9px;
  background: #707070;
  margin-top: 9px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrtieText = styled.div`
  margin: 9px 0 0 9px;
  height: 38px;
  font-size: 12px;
  color: #707070;

  display: flex;
  align-items: center;
`;

function WriteDestination() {
  return (
    <div>
      <FlexBox>
        <IconContainer>
          <LuPlane style={{ fontSize: '20px', color: 'white' }} />
        </IconContainer>
        <WrtieText>지역</WrtieText>
      </FlexBox>
      <FlexBox>
        <IconContainer>
          <LuCalendarDays style={{ fontSize: '20px', color: 'white' }} />
        </IconContainer>
        <WrtieText>년/월/일</WrtieText>
      </FlexBox>
    </div>
  );
}

export default WriteDestination;
