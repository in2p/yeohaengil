import styled from 'styled-components';
import '../../../styles/globals.css';

import { useState } from 'react';

import Destination from '../../molecules/Destination/Destination.jsx';
import DayItem from '../../molecules/DayItem/DayItem.jsx';
import DayContents from '../../molecules/DayContents/DayContents.jsx';

const Box = styled.div`
  width: 100%;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0px 3px 5px 0px #888888;
  padding-top: 150px;
`;

const items = [
  [
    { id: 0, title: '원루프랩 사당점', category: '카페', price: '8000원' },
    { id: 1, title: '원루프랩 강남점', category: '식당', price: '18000원' },
    { id: 2, title: '원루프랩 수원점', category: '숙소', price: '118000원' },
  ],
  [
    { id: 0, title: '스타벅스 사당점', category: '카페', price: '8000원' },
    { id: 1, title: '스타벅스 강남점', category: '식당', price: '18000원' },
    { id: 2, title: '스타벅스 수원점', category: '숙소', price: '118000원' },
  ],
];

const DetailButton = styled.button`
  background: white;
  padding: 5px 20px;
  border-radius: 20px;
  margin-left: 20px;
  border: 1px solid #fe4c40;
  color: black;
`;

function TravelCard() {
  // const day = useSelector(state => state.day);
  const [day, setDay] = useState(1);

  const changeDay = dayNum => {
    setDay(dayNum);
  };

  if (items.length > 0) {
    return (
      <Box>
        {/* 강원도 강릉 과 날짜 */}
        <Destination />
        {/* Day1, Day2, ... */}
        <DayItem length={items.length} changeDay={changeDay} day={day} />
        {/* Day1 의 일정들 */}
        <div style={{ overflow: 'hidden' }}>
          <DayContents contents={items[day - 1]} />
        </div>

        <div
          className="d-flex"
          style={{
            padding: '15px',
            justifyContent: 'flex-end',
            color: 'gray',
          }}
        >
          <p>평균 123,456원</p>
          <DetailButton>일정 상세보기</DetailButton>
        </div>
      </Box>
    );
  }
  return (
    <div
      className="d-flex flex-center"
      style={{ height: '350px', color: 'gray' }}
    >
      <p>여행을 기록해 보아요.</p>
    </div>
  );
}
export default TravelCard;
