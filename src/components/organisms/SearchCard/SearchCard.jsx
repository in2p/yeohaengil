import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CircleBox from '../../atoms/CircleBox/CircleBox.jsx';
import Like from '../../atoms/Like/Like.jsx';

const Card = styled.div`
  width: 340px;
  height: 128px;
  border-radius: 8px;
  border: 0.2px solid black;
  background-image: url({userURL.img});
  margin: 0 auto;
  margin-bottom: 10px;

  //안에 요소 가운데 정렬
  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: 13px;
`;

const Date = styled.div`
  margin-top: 25px;
`;
const Destination = styled.div`
  margin: 7px 0 12px 0;
  font-size: 15px;
  font-weight: 500;
`;
const Average = styled.div`
  width: 110px;
  height: 35px;
  border-radius: 35px;
  border: 0.5px solid #707070;

  margin: 0 auto;
  text-align: center;
  line-height: 35px;
`;

const UserBox = styled(CircleBox)`
  width: 25px;
  height: 25px;
`;

function SearchCard({ userURL, img }) {
  return (
    <div>
      <Card>
        <Like />
        <Date>{userURL.date}</Date>
        <Destination>{userURL.destination}</Destination>
        <Average> 평균 {userURL.average}원</Average>
        <UserBox />
      </Card>
    </div>
  );
}

export default SearchCard;
