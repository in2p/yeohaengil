import styled from 'styled-components';
import '../../../styles/globals.css';
import { PiWalletBold } from 'react-icons/pi';

const Day = styled.button`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 12px;
  margin: 5px;
  border-radius: 10px;
  padding: 7px;
  border: 0px;
  transition: 0.5s;
`;

function DayButton({ day, bgColor, changeDay }) {
  if (changeDay) {
    return (
      <Day
        className={bgColor}
        onClick={() => {
          changeDay(day);
        }}
      >
        <PiWalletBold style={{ fontSize: '15px', margin: '0px' }} />
        <p style={{ margin: '0px' }}>Day{day}</p>
      </Day>
    );
  }
  return (
    <Day className={bgColor}>
      <PiWalletBold style={{ fontSize: '15px', margin: '0px' }} />
      <p style={{ margin: '0px' }}>Day{day}</p>
    </Day>
  );
}
export default DayButton;
