import '../../../styles/globals.css';
import { useState } from 'react';
import WriteImgBox from '../../atoms/WriteImgBox/WriteImgBox.jsx';
import WriteDayContents from '../../organisms/WriteDayContents/WriteDayContents.jsx';
import PostButton from '../../atoms/PostButton/PostButton.jsx';
import MapCircle from '../../atoms/MapCircle/MapCircle.jsx';
import WriteDestination from '../../molecules/WriteDestination/WriteDestination.jsx';
import DayItem from '../../molecules/DayItem/DayItem.jsx';

function WritePage() {
  const [daysRange, setDaysRange] = useState(0); // 여행 기간 ex) 3일
  const selectDaysRange = length => {
    setDaysRange(length);
  };

  const [day, setDay] = useState(0); // 선택 날짜 ex) 1일차, 2일차..
  const changeDay = num => {
    // 추가 개발 해야할 것: if day > dayRange : error
    setDay(num);
  };

  return (
    <div className="writeWrapper">
      <WriteImgBox />
      <WriteDestination selectDaysRange={selectDaysRange} />
      <DayItem length={daysRange} changeDay={changeDay} day={day} />
      <WriteDayContents />
      <PostButton />
      <MapCircle />
    </div>
  );
}

export default WritePage;
