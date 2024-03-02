import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useState } from 'react';
import DayButton from '../../atoms/DayButton/DayButton.jsx';
import MapModal from '../Modal/MapModal.jsx';

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
const AddPlaceBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  margin: 5px 0 0 270px;
  font-size: 12px;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

function DayItem2({ startDate, endDate, handleSearch, handleAddPlace }) {
  const day = useSelector(state => state.day);
  const jsxElements = [];
  const [uploadModal, setUploadModal] = useState(false);

  const handleCloseModal = () => {
    setUploadModal(false);
  };

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
      <div key={i}>
        <DayContainer>
          <DayButton bgColor="bg-main" day={i + 1} />
          <SelectedDate>{`${
            currentDate.getMonth() + 1
          }.${currentDate.getDate()}`}</SelectedDate>
        </DayContainer>
        <AddPlaceBtn onClick={() => setUploadModal(true)}>
          장소 추가
        </AddPlaceBtn>
        {uploadModal === true ? (
          <MapModal
            handleCloseModal={handleCloseModal}
            handleSearch={handleSearch}
          />
        ) : null}
      </div>,
    );
  }
  return <div>{jsxElements}</div>;
}

export default DayItem2;
