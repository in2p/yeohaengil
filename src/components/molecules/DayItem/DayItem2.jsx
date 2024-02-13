import { useSelector } from 'react-redux';
import styled from 'styled-components';
import DayButton from '../../atoms/DayButton/DayButton.jsx';

const DayContainer = styled.div`
  display: flex;
  margin-right: 10px;
`;
const SelectedDate = styled.span`
  align-items: center;
  text-align: center;
  margin: 5px;
  padding: 7px;
`;

function DayItem2({ startDate, endDate }) {
  const day = useSelector(state => state.day);
  const jsxElements = [];

  // 날짜범위 생성
  const selectedDateRange = (start, end) => {
    const dates = [];
    const currentDate = new Date(start); // startDate -> Date
    while (currentDate <= end) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const dateRange = selectedDateRange(startDate, endDate); // 날짜 범위

  for (let i = 0; i < dateRange.length; i += 1) {
    const currentDate = dateRange[i];
    jsxElements.push(
      <DayContainer key={i}>
        <DayButton bgColor="bg-main" day={i + 1} />
        <SelectedDate>{`${
          currentDate.getMonth() + 1
        }.${currentDate.getDate()}`}</SelectedDate>
      </DayContainer>,
    );
  }
  return <div>{jsxElements}</div>;
}

export default DayItem2;
