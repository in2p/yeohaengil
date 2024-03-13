import React from 'react';
import styled from 'styled-components';
import { LuAlignJustify, LuXCircle } from 'react-icons/lu';

const FlexBox = styled.div``;

const PlanContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 12px;
`;

const Circle = styled.div`
  width: 12px;
  height: 12px;
  border: 1px solid #fe4c40;
  border-radius: 50%;
  text-align: center;
  color: #fe4c40;
  margin-right: 5px;
  padding: 1px;
`;

const PlaceContainer = styled.div`
  width: 270px;
  height: 29px;
  border-radius: 9px;
  border: 1px solid #efefef;
  padding: 5px;
  display: flex;
  align-items: center;
`;

const Place = styled.div`
  color: #707070;
  flex-grow: 1;
`;

const Category = styled.div`
  color: #75b5d9;
  font-weight: bold;
`;

const XBtn = styled(LuXCircle)`
  font-size: 15px;
  color: #707070;
  cursor: pointer;
  margin-left: auto;
`;

const ChangePlace = styled(LuAlignJustify)`
  font-size: 15px;
  margin-right: 3px;
`;

function WriteDayContents({ places, handleDeletePlace }) {
  return (
    <FlexBox>
      {places &&
        places.map((place, i) => (
          <PlanContainer key={place.id}>
            <Circle>{i + 1}</Circle>
            <ChangePlace />
            <PlaceContainer>
              <Place>{place.placeName}</Place>
              <Category>{place.categoryName}</Category>
            </PlaceContainer>
            <XBtn onClick={() => handleDeletePlace(i)} />
          </PlanContainer>
        ))}
    </FlexBox>
  );
}

export default WriteDayContents;
