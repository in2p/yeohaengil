import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';

const Container = styled.div`
  border: 1px solid #707070;
  border-radius: 6px;

  // 기본 틀
  .react-calendar {
    width: 300px;
    max-width: 100%;
    background-color: #fff;
    color: #222;
    border: none;
  }

  // 오늘 날짜 표시
  .react-calendar__tile--now {
    background: #fff;
    border-radius: 6px;
    color: #fe4c40;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    color: #fe4c40;
  }

  // 상단 년/월
  .react-calendar__navigation__label > span {
    height: 90px;
    font-weight: 500;
    color: #fe4c40;
  }

  // 요일
  .react-calendar__month-view__weekdays {
    background: fff;
    abbr {
      /*월,화,수... 글자 부분*/
      color: #707070;
      font-weight: 500;
    }
  }

  // day 타일 한개 모양
  .react-calendar__tile {
    color: black;
    background: #fff;
    text-align: center;
  }

  // day 타일 hover, focus 시 모양
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #fe4c40;
    border-radius: 6px;
    color: #fff;
  }

  // 날짜 선택 시 day 커스텀
  .react-calendar__tile--active {
    color: #fff;
    background-color: #fe4c40;
    border-radius: 6px;
  }

  // range 선택 시, 범위선택, 시작, 끝, 중간
  .react-calendar__tile--range {
    background: #eeeded;
    color: #fe4c40;
    border-radius: 0;
  }
  .react-calendar__tile--rangeStart {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    background: #fe4c40;
    color: white;
  }
  .react-calendar__tile--rangeEnd {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background: #fe4c40;
    color: white;
  }

  // range 중간 날짜
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #eeeded;
  }
`;

const SelectDate = styled.button`
  width: 280px;
  height: 30px;

  margin: 10px;
  border-radius: 5px;
  border: none;
  font-size: 12px;
  &:hover {
    opacity: 0.8;
  }
`;

function WriteCalendar({ onApply }) {
  const [value, setValue] = useState([new Date(), new Date()]);

  const selectDate = () => {
    onApply(value);
  };

  return (
    <Container>
      <Calendar
        calendarType="hebrew" // 일요일부터 시작
        onChange={setValue}
        value={value}
        selectRange // 범위 허용
        formatDay={(locale, date) =>
          // xx일 -> xx 으로 format 변경
          date instanceof Date
            ? date.toLocaleDateString('en-us', {
                day: '2-digit',
              })
            : ''
        }
        showNeighboringMonth={false} // 앞뒤 달 이어지는 날짜
        minDetail="year"
      />
      <SelectDate className="main-center" onClick={selectDate}>
        선택 완료
      </SelectDate>
    </Container>
  );
}

export default WriteCalendar;
