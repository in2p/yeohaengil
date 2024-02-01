import styled from 'styled-components';
import React from 'react';
import { LuAlignJustify, LuUser2, LuXCircle } from 'react-icons/lu';

function WriteDayContents() {
  return (
    <div>
      {/* 예상비용 어떻게 배치해야할지 필요 */}
      <WrtieText style={{ float: 'right', display: 'block', margin: '0 40px' }}>
        예상비용 | 실제비용
      </WrtieText>
      <FlexBox>
        <PlanContainer>
          <LuAlignJustify style={{ fontSize: '15px' }} />
          <Circle>1</Circle>
          <PlaceContainer>
            <div className="content-row">
              <p>원루프랩 사당점</p>
              <p
                style={{
                  color: '#75B5D9',
                  fontWeight: '800',
                  marginLeft: '5px',
                }}
              >
                카페
              </p>
              <LuUser2
                style={{
                  display: 'flex',
                  float: 'left',
                  color: 'gray',
                  fontSize: '15px',
                  marginLeft: '10px',
                }}
              />
              <p>2</p>
              <p style={{ marginLeft: '5px' }}>9,999,999원 | 9,999,999원</p>
            </div>
          </PlaceContainer>
          <LuXCircle
            style={{ marginLeft: '3px', fontSize: '15px', color: 'gray' }}
          />
        </PlanContainer>
      </FlexBox>
      <AddPlace style={{ color: 'black' }}>
        <p style={{ margin: '0px' }}>장소 추가</p>
      </AddPlace>
    </div>
  );
}

export default WriteDayContents;

const FlexBox = styled.div`
  display: flex;
`;

const WrtieText = styled.div`
  margin: 9px 0 0 9px;
  height: 38px;
  font-size: 12px;
  color: #707070;

  display: flex;
  align-items: center;
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

const AddPlace = styled.div`
  float: right;
  align-items: center;
  background-color: #eee;
  margin-top: 5px;
  font-size: 12px;
  border-radius: 10px;
  padding: 7px;
`;
