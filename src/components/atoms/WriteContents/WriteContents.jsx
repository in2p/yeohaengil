import React, { useState } from 'react';
import styled from 'styled-components';
import { LuAlignJustify, LuXCircle } from 'react-icons/lu';
import CostAlert from '../Alert/CostAlert.jsx';
import MapModal from '../../molecules/Modal/MapModal.jsx';

const FlexBox = styled.div`
  display: flex;
`;

const TextBox = styled.div`
  font-size: 12px;
  color: #707070;
  text-align: center;
  align-items: center;
  justify-content: center;
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
const AddPlaceBtn = styled.button`
  float: right;
  align-items: center;
  border: none;
  margin-top: 5px;
  font-size: 12px;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

function WriteContents() {
  const [addPlace, setAddPlace] = useState([]);

  const handleAddPlace = () => {
    const newPlaceContainers = [
      ...addPlace,
      <PlaceContainer key={addPlace.length} />,
    ];
    setAddPlace(newPlaceContainers);
  };

  return (
    <div>
      <FlexBox>
        {addPlace.map((container, place) => (
          <PlanContainer key={place.length}>
            <LuAlignJustify style={{ fontSize: '15px' }} />
            <Circle>{place + 1}</Circle>
            <PlaceContainer>
              <TextBox className="content-row" />
            </PlaceContainer>
            <XBtn />
          </PlanContainer>
        ))}
      </FlexBox>
    </div>
  );
}

export default WriteContents;
