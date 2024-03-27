import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import '../../../styles/globals.css';

import CircleBox from '../../atoms/CircleBox/CircleBox.jsx';
import ArrowButton from '../../atoms/ArrowButton/ArrowButton.jsx';

const TripView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-right: 15px;
`;
const RightArrowContainer = styled.div`
  position: absolute;
  top: 45%;
  right: 0px;
  transform: translate(0, -50%);
`;

function CirclesView({ travels }) {
  let comebackShift = null;
  // stack 자료구조를 이용해서 현재 어디까지 shift 되어 있는지 상태를 관리한다.
  const shiftPoint = [0];

  const clickHandler = () => {
    const circleContainer = document.querySelectorAll('.circle-container')[0];
    const circleView = document.querySelectorAll('.circle-view')[0];
    circleView.style.transition = '1s';
    const containerWidth = circleContainer.offsetWidth;
    const overflowWidth = circleContainer.scrollWidth;

    if (shiftPoint[shiftPoint.length - 1] + containerWidth > overflowWidth) {
      circleView.animate(
        [
          { transform: `translateX( -${shiftPoint[shiftPoint.length - 1]}px)` },
          {
            transform: `translateX( -${
              shiftPoint[shiftPoint.length - 1] + 10
            }px)`,
          },
          { transform: `translateX( -${shiftPoint[shiftPoint.length - 1]}px)` },
        ],
        {
          // timing options
          duration: 500,
        },
      );
    } else {
      const moveLength =
        shiftPoint[shiftPoint.length - 1] + containerWidth - 100;
      shiftPoint.push(moveLength);
      circleView.style.transform = `translateX( -${moveLength}px)`;
      console.log(`shift right:${shiftPoint}`);
    }
    // eslint-disable-next-line no-undef
    if (comebackShift) clearInterval(comebackShift);
    let i = shiftPoint.length - 1;

    // stack 을 이용한 왼쪽오른쪽 움직이기
    // 클릭시 2초 마다 왼쪽으로 한번씩 옮겨진다.
    comebackShift = setInterval(() => {
      if (i === 0) {
        clearInterval(comebackShift);
      } else {
        circleView.style.transform = `translateX( -${shiftPoint[i - 1]}px)`;
        shiftPoint.pop();
        console.log(`shift left:${shiftPoint}`);
        i -= 1;
      }
    }, 3000);
  };

  return (
    <div
      className="d-flex circle-container"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div className="d-flex circle-view">
        {travels.map((t, i) => (
          <TripView key={t.id}>
            <CircleBox img={t.img_url} />
            <p className="font-small mt-3 mb-0">{t.location}</p>
          </TripView>
        ))}
      </div>

      <RightArrowContainer>
        <ArrowButton handleClick={clickHandler} />
      </RightArrowContainer>
    </div>
  );
}
export default CirclesView;
