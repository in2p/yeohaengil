import React from 'react';
import styled from 'styled-components';
import '../styles/globals.css';
import { PiAirplaneTiltLight, PiWalletBold } from 'react-icons/pi';
import { FaRegCalendarAlt } from 'react-icons/fa';

const Box = styled.div`
  width: 100%;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0px 5px 10px 0px #888888; #888888;
  padding-top: 150px;
`;
const Destination = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 5px;
  background: #eee;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

const Day = styled.div`
  display: flex;
  align-items: center;
  background-color: #eee;
  font-weight: bold;
  margin: 5px;
  border-radius: 20px;
  padding: 7px;
`;
function Card() {
  return (
    <Box>
      <Destination>
        <FlexBox>
          <PiAirplaneTiltLight style={{ fontSize: '30px' }} />
          <p>강원도 강릉</p>
        </FlexBox>
        <FlexBox>
          <FaRegCalendarAlt style={{ fontSize: '20px', marginRight: '5px' }} />
          <p>2023.12.14 ~ 2023.12.16</p>
        </FlexBox>
      </Destination>
      <FlexBox style={{ overflow: 'hidden' }}>
        <Day style={{ background: '#FE4C40', color: 'white' }}>
          <PiWalletBold style={{ fontSize: '20px', margin: '0px' }} />
          <p style={{ margin: '0px' }}>Day1</p>
        </Day>
        <Day>
          <PiWalletBold style={{ fontSize: '20px', margin: '0px' }} />
          <p style={{ margin: '0px' }}>Day2</p>
        </Day>
        <Day>
          <PiWalletBold style={{ fontSize: '20px', margin: '0px' }} />
          <p style={{ margin: '0px' }}>Day3</p>
        </Day>
      </FlexBox>
    </Box>
  );
}
export default Card;
