import styled from 'styled-components';
import React from 'react';
import CostAlert from '../../atoms/Alert/CostAlert.jsx';
import WriteContents from '../../atoms/WriteContents/WriteContents.jsx';
import DayItem from '../../molecules/DayItem/DayItem.jsx';

const DayContainer = styled.div`
  display: flex;
`;

function WriteDayContents({ numDaysSelected }) {
  return (
    <DayContainer>
      <CostAlert />
      <DayItem length={numDaysSelected} />
      <WriteContents />
    </DayContainer>
  );
}

export default WriteDayContents;
