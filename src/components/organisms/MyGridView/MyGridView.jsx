import React from 'react';
import styled from 'styled-components';

import '../../../styles/globals.css';
import MyPostModule from '../../molecules/MyPostModule/MyPostModule.jsx';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 5px;
  column-gap: 20px;
`;

// https://img.freepik.com/free-photo/traveling-concept-with-landmarks_23-2149153261.jpg
const items = [];
for (let i = 0; i < 13; i += 1) {
  items.push(
    <MyPostModule
      key={i}
      price="1200"
      likes="19"
      title="강원도 강릉"
      img="https://img.freepik.com/free-photo/traveling-concept-with-landmarks_23-2149153261.jpg"
    />,
  );
}
function MyGridView() {
  return <GridContainer>{items}</GridContainer>;
}
export default MyGridView;
