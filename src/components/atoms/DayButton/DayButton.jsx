import styled from 'styled-components';
import '../../../styles/globals.css';
import { PiWalletBold } from 'react-icons/pi';

const Day = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 12px;
  margin: 5px;
  border-radius: 10px;
  padding: 7px;
`;

function DayButton({ day }) {
  return (
    <Day className="bg-main-color">
      <PiWalletBold style={{ fontSize: '15px', margin: '0px' }} />
      <p style={{ margin: '0px' }}>Day{day}</p>
    </Day>
  );
}
export default DayButton;
