import styled from 'styled-components';
import '../styles/globals.css';
import { PiAirplaneTiltLight, PiWalletBold } from 'react-icons/pi';
import { FaRegCalendarAlt } from 'react-icons/fa';

const Box = styled.div`
  width: 100%;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0px 3px 5px 0px #888888;
  padding-top: 150px;
`;
const Destination = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 5px;
  background: #eee;
  font-size: 12px;
`;

const Day = styled.div`
  display: flex;
  align-items: center;
  background-color: #eee;
  font-weight: bold;
  font-size: 12px;
  margin: 5px;
  border-radius: 10px;
  padding: 7px;
`;
const items = [
  { title: '원루프랩 사당점', category: '카페', price: '8000원' },
  { title: '원루프랩 강남점', category: '식당', price: '18000원' },
  { title: '원루프랩 수원점', category: '숙소', price: '118000원' },
];

const DetailButton = styled.button`
  background: white;
  padding: 5px 20px;
  border-radius: 20px;
  margin-left: 20px;
  border: 1px solid #fe4c40;
  color: black;
`;

function Card() {
  return (
    <Box>
      {/* 강원도 강릉 과 날짜 */}
      <Destination>
        <div className="d-flex">
          <PiAirplaneTiltLight style={{ fontSize: '20px' }} />
          <p>강원도 강릉</p>
        </div>
        <div className="d-flex">
          <FaRegCalendarAlt style={{ fontSize: '20px', marginRight: '5px' }} />
          <p>2023.12.14 ~ 2023.12.16</p>
        </div>
      </Destination>
      {/* Day1, Day2, ... */}
      <div className="d-flex" style={{ overflow: 'hidden' }}>
        <Day style={{ background: '#FE4C40', color: 'white' }}>
          <PiWalletBold style={{ fontSize: '15px', margin: '0px' }} />
          <p style={{ margin: '0px' }}>Day1</p>
        </Day>
        <Day>
          <PiWalletBold style={{ fontSize: '15px', margin: '0px' }} />
          <p style={{ margin: '0px' }}>Day2</p>
        </Day>
        <Day>
          <PiWalletBold style={{ fontSize: '15px', margin: '0px' }} />
          <p style={{ margin: '0px' }}>Day3</p>
        </Day>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <div className="d-flex" style={{ width: '300vw' }}>
          {items.map(a => (
            <div className="d-flex">
              <div className="content-img" />
              <div className="content-column">
                <h3>원루프랩 사당점</h3>
                <p>카페</p>
                <p>예상 8000원</p>
              </div>
            </div>
          ))}
        </div>
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
export default Card;
