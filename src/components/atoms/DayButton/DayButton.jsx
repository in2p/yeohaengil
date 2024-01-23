import styled from 'styled-components';
import { UseDispatch, useDispatch } from 'react-redux';
import '../../../styles/globals.css';
import { PiWalletBold } from 'react-icons/pi';
import { setDay } from '../../../store.jsx';

const Day = styled.button`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 12px;
  margin: 5px;
  border-radius: 10px;
  padding: 7px;
  border: 0px;
`;

function DayButton({ day, bgColor }) {
  const dispatch = useDispatch();
  return (
    <Day
      className={bgColor}
      onClick={() => {
        dispatch(setDay(day));
      }}
    >
      <PiWalletBold style={{ fontSize: '15px', margin: '0px' }} />
      <p style={{ margin: '0px' }}>Day{day}</p>
    </Day>
  );
}
export default DayButton;
