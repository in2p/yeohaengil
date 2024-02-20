import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import styled, { keyframes, css } from 'styled-components';

import ArrowButton from '../../atoms/ArrowButton/ArrowButton.jsx';

const SlideBox = styled.div`
  display: flex;
  align-items: center;
  width: ${props => props.width}px;
  transition: 1s;
  transform: translateX(-${props => props.shift}px);
  z-index: 0;
  }
`;

const RightArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translate(0, -50%);
  z-index: 1;
`;
const LeftArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translate(0, -50%);
  z-index: 1;
`;

function DayContents({ contents }) {
  const [divWidths, setDivWidths] = useState([]);
  const [divSumWidths, setDivSumWidths] = useState([]);
  const [width, setWidth] = useState('2000');

  const [currentContent, setCurrentContent] = useState(0);

  // 각각의 크기를 구해서 divWidths 배열에 저장한다. [206, 206, 206]
  // 각각의 크기를 모두 더해서 총 길이를 구한다. width = 618
  // 더한값 캐러셀위해서 [206, 412, 618]

  useEffect(() => {
    let totalWidth = 0;
    const updateDivWidths = () => {
      const widths = [];
      const sumWidhts = [];
      const divs = document.querySelectorAll('.content');
      divs.forEach(div => {
        sumWidhts.push(totalWidth);
        totalWidth += div.offsetWidth;
        widths.push(div.offsetWidth);
      });
      setDivWidths(widths);
      setDivSumWidths(sumWidhts);
    };
    updateDivWidths();
    setWidth(totalWidth + 50);
  }, []); // mount 시 1회 실행

  const slideBox = document.querySelectorAll('.slide-box')[0];
  const RightClickHandler = () => {
    if (currentContent < contents.length - 1) {
      setCurrentContent(currentContent + 1);
    } else {
      slideBox.animate(
        [
          { transform: `translateX( -${divSumWidths[currentContent]}px)` },
          {
            transform: `translateX( -${divSumWidths[currentContent] + 10}px)`,
          },
          { transform: `translateX( -${divSumWidths[currentContent]}px)` },
        ],
        {
          // timing options
          duration: 500,
        },
      );
    }
  };
  const LeftClickHandler = () => {
    if (currentContent > 0) {
      setCurrentContent(currentContent - 1);
    } else {
      slideBox.animate(
        [
          { transform: `translateX(0px)` },
          {
            transform: `translateX(10px)`,
          },
          { transform: `translateX(0px)` },
        ],
        {
          // timing options
          duration: 500,
        },
      );
    }
  };

  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      <LeftArrowContainer>
        <ArrowButton $back handleClick={LeftClickHandler} />
      </LeftArrowContainer>
      <SlideBox
        className="slide-box"
        width={width}
        shift={divSumWidths[currentContent]}
      >
        {contents.map((a, i) => (
          <div className="content d-flex" key={a.id}>
            <div className="content-img" />
            <div className="content-column">
              <h3>{a.title}</h3>
              <p>{a.category}</p>
              <p>예상 {a.price}</p>
            </div>
          </div>
        ))}
      </SlideBox>
      <RightArrowContainer>
        <ArrowButton handleClick={RightClickHandler} />
      </RightArrowContainer>
    </div>
  );
}
export default DayContents;
