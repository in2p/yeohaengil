import styled from 'styled-components';
import React from 'react';
import WriteContents from '../../atoms/WriteContents/WriteContents.jsx';
import DayItem2 from '../../molecules/DayItem/DayItem2.jsx';

const DayContainer = styled.div``;

function WriteDayContents() {
  return (
    <DayContainer>
      <DayItem2 />
      <WriteContents />
    </DayContainer>
  );
}

export default WriteDayContents;
