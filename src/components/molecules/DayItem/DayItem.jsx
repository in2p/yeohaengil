import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import DayButton from '../../atoms/DayButton/DayButton.jsx';

const SlideWrapper = styled.div`
  display: flex;
  align-items: center;
  transform: translateX(-${props => props.shift}px);
  transition: 0.5s;
`;

function DayItem({ length, changeDay, day }) {
  const [shiftDay, setShiftDay] = useState(0);

  const jsxElements = [];
  for (let i = 0; i < length; i += 1) {
    if (i === day - 1) {
      jsxElements.push(<DayButton bgColor="bg-main" day={i + 1} key={i} />);
    } else {
      jsxElements.push(
        <DayButton
          day={i + 1}
          bgColor="bg-default"
          changeDay={changeDay}
          key={i}
        />,
      );
    }
  }
  // 버튼 누르면 자동으로 해당 day 가 가운데로 가도록 조정
  useEffect(() => {
    const dayContainer = document.querySelectorAll('.day-container')[0];
    const daySlide = document.querySelectorAll('.day-slide')[0];

    // 1. 부모의 width/2 구한다.
    // 2. 현재 day의 가운데 길이 구한다.
    // 3. 2 - 1 만큼 옮긴다.
    // 안되는 경우 1) 전체길이 - 2. < 1.   2) 3. < 0
    const containerWidth = dayContainer.offsetWidth;
    const slideWidth = daySlide.scrollWidth; // overflow: hidden 때문에 이렇게 해야함

    const currentWidth = ((2 * day - 1) * slideWidth) / (length * 2);
    const shiftWidth = currentWidth - containerWidth / 2;
    if (shiftWidth < 0) {
      setShiftDay(0); // 왼쪽 끝으로
    } else if (slideWidth - currentWidth < containerWidth / 2) {
      setShiftDay(slideWidth - containerWidth + 10); // 오른쪽 끝으로
    } else {
      setShiftDay(shiftWidth); // 현제 선택한거 가운데로
    }
  }, [setShiftDay, day, length, shiftDay]);

  return (
    <div className="day-container" style={{ overflow: 'hidden' }}>
      <SlideWrapper className="day-slide" shift={shiftDay}>
        {jsxElements}
      </SlideWrapper>
    </div>
  );
}
export default DayItem;
