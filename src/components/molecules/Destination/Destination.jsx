import styled from 'styled-components';
import { PiAirplaneTiltLight } from 'react-icons/pi';
import { FaRegCalendarAlt } from 'react-icons/fa';

const DesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 5px;
  background: #eee;
  font-size: 12px;
`;

function Destination() {
  return (
    <DesContainer>
      <div className="d-flex">
        <PiAirplaneTiltLight style={{ fontSize: '20px' }} />
        <p>강원도 강릉</p>
      </div>
      <div className="d-flex">
        <FaRegCalendarAlt style={{ fontSize: '20px', marginRight: '5px' }} />
        <p>2023.12.14 ~ 2023.12.16</p>
      </div>
    </DesContainer>
  );
}
export default Destination;
