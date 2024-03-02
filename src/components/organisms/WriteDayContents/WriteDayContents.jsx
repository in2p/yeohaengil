import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { LuAlignJustify, LuXCircle } from 'react-icons/lu';
import { Provider, useSelector, useDispatch } from 'react-redux';
import DayItem2 from '../../molecules/DayItem/DayItem2.jsx';

const FlexBox = styled.div`
  display: flex;
`;

const TextBox = styled.div`
  font-size: 12px;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`;

const Place = styled.div`
  color: #707070;
`;
const Category = styled.div`
  color: #75b5d9;
  font-weight: bold;
`;
const PlanContainer = styled.div`
  margin: 20px 10px 2.5px 10px;
  display: flex;
  align-items: center;
`;

const Circle = styled.div`
  width: 15px;
  height: 15px;
  border: 1px solid #fe4c40;
  border-radius: 50%;

  text-align: center;
  color: #fe4c40;
  font-size: 15px;
  margin-left: 5px;
`;

const PlaceContainer = styled.div`
  width: 270px;
  height: 29px;
  border-radius: 9px;
  border: 1px solid #efefef;
  margin-left: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
`;

const XBtn = styled(LuXCircle)`
  margin-left: 3px;
  font-size: 15px;
  color: #707070;
  cursor: pointer;
`;

function WriteDayContents() {
  const selectedPlace = useSelector(state => state.selectedPlace);

  useEffect(() => {
    console.log('selectedPlace', selectedPlace);
  }, [selectedPlace]);

  return (
    <div>
      <FlexBox>
        {selectedPlace && (
          <PlanContainer>
            <LuAlignJustify style={{ fontSize: '15px' }} />
            <Circle>{selectedPlace.id}</Circle>
            <PlaceContainer>
              <TextBox className="content-row">
                <Place>{selectedPlace.placeName}</Place>
                <Category>{selectedPlace.categoryName}</Category>
              </TextBox>
            </PlaceContainer>
            <XBtn />
          </PlanContainer>
        )}
      </FlexBox>
      <DayItem2 />
    </div>
  );
}

export default WriteDayContents;
