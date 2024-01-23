import styled from 'styled-components';
import '../../../styles/globals.css';
import {
  LuImagePlus,
  LuPlane,
  LuCalendarDays,
  LuWallet,
  LuAlignJustify,
  LuUser2,
  LuXCircle,
  LuMap,
} from 'react-icons/lu';

function WritePage() {
  return (
    <div className="writeWrapper">
      <UploadImgContainer>
        <LuImagePlus style={{ fontSize: '20px' }} />
      </UploadImgContainer>
      <FelxBox>
        <IconContainer>
          <LuPlane style={{ fontSize: '20px', color: 'white' }} />
        </IconContainer>
        <WrtieText>지역</WrtieText>
      </FelxBox>
      <FelxBox>
        <IconContainer>
          <LuCalendarDays style={{ fontSize: '20px', color: 'white' }} />
        </IconContainer>
        <WrtieText>년/월/일</WrtieText>
      </FelxBox>
      <FelxBox>
        <Day style={{ background: '#FE4C40', color: 'white' }}>
          <LuWallet style={{ fontSize: '15px', margin: '0px' }} />
          <p style={{ margin: '0px' }}>Day1</p>
        </Day>
        <TripDate>12.25</TripDate>
      </FelxBox>
      <WrtieText style={{ float: 'right', display: 'block', margin: '0 40px' }}>
        예상비용 | 실제비용
      </WrtieText>
      <FelxBox>
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
      </FelxBox>
      <AddPlace style={{ color: 'black' }}>
        <p style={{ margin: '0px' }}>장소 추가</p>
      </AddPlace>
      <FelxBox>
        <PostButton style={{ background: '#FE4C40', color: 'white' }}>
          <p style={{ margin: '0px' }}>발행하기</p>
        </PostButton>
        <MapCircle>
          <LuMap style={{ fontSize: '30px' }} />
        </MapCircle>
      </FelxBox>
    </div>
  );
}

export default WritePage;

const UploadImgContainer = styled.div`
  width: 196px;
  height: 261px;
  border: 1px solid #707070;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const FelxBox = styled.div`
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

const Day = styled.div`
  display: flex;
  align-items: center;
  background-color: #eee;
  font-weight: bold;
  font-size: 12px;
  margin: 5px 9px 0 38px;
  border-radius: 10px;
  padding: 7px;
`;

const WrtieText = styled.div`
  margin: 9px 0 0 9px;
  height: 38px;
  font-size: 12px;
  color: #707070;

  display: flex;
  align-items: center;
`;

const TripDate = styled.div`
  color: #000000;
  font-size: 15px;
  font-weight: medium;
  display: flex;
  align-items: center;
  margin-top: 5px;
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

const PostButton = styled.div`
  font-weight: bold;
  font-size: 15px;
  border-radius: 13px;
  padding: 10px;

  position: fixed;
  left: 50%;
  transform: translateX(
    -50%
  ); /* 버튼을 너비의 절반만큼 뒤로 이동하여 효과적으로 수평 중앙에 배치 */
  bottom: 80px;
`;

const MapCircle = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  background: gray;
  font-size: 15px;

  position: fixed;
  bottom: 80px;
  right: 30%;
`;
