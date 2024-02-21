import styled from 'styled-components';
import React from 'react';
import CostAlert from '../../atoms/Alert/CostAlert.jsx';
import WriteContents from '../../atoms/WriteContents/WriteContents.jsx';

const DayContainer = styled.div`
  display: flex;
`;

function WriteDayContents() {
  return (
    <DayContainer>
      <CostAlert />
      <WriteContents />
    </DayContainer>
  );
}

export default WriteDayContents;
