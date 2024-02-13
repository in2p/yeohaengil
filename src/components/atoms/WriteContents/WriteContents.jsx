import React from 'react';
import styled from 'styled-components';
import { LuAlignJustify, LuUser2, LuXCircle } from 'react-icons/lu';
import CostAlert from '../Alert/CostAlert.jsx';

const FlexBox = styled.div`
  display: flex;
`;

const TextBox = styled.div`
  font-size: 12px;
  color: #707070;
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

const UserIcon = styled(LuUser2)`
  display: flex;
  float: left;
  margin-left: 10px;
`;
const TextArea = styled.input`
  margin-left: 3px;
  width: 50px;
  height: 30px;
  align-items: center;
  //border: none;
`;
const ExpectCost = styled(TextArea)``;
const ActualCost = styled(TextArea)``;

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

const items = [
  [
    { title: '원루프랩 사당점', category: '카페', price: '8000원' },
    { title: '원루프랩 강남점', category: '식당', price: '18000원' },
    { title: '원루프랩 수원점', category: '숙소', price: '118000원' },
  ],
];

function WriteContents() {
  return (
    <div>
      <CostAlert />
      <FlexBox>
        <PlanContainer>
          <LuAlignJustify style={{ fontSize: '15px' }} />
          <Circle>1</Circle>
          <PlaceContainer>
            <TextBox className="content-row">
              <p>{items.title}</p>
              <p
                style={{
                  color: '#75B5D9',
                  fontWeight: '800',
                  marginLeft: '5px',
                }}
              >
                카페
              </p>
              <UserIcon />
              <p>2</p>
              <ExpectCost />
              <ActualCost />
            </TextBox>
          </PlaceContainer>
          <XBtn />
        </PlanContainer>
      </FlexBox>
      <AddPlaceBtn className="bg-default">장소 추가</AddPlaceBtn>
    </div>
  );
}

export default WriteContents;

const WriteBox = () => {};
