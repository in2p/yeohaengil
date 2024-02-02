import React from 'react';
import styled from 'styled-components';
import { IoMdGrid, IoMdHeartEmpty } from 'react-icons/io';

const SelectWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  border-top: 1.5px solid #eee;
  width: 100%;
`;
const IconWrapper = styled.div`
  width: 50%;
  text-align: center;
  font-size: 22px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-bottom: ${props =>
    props.$selected ? '1.5px solid #FE4C40' : '1.5px solid #eee'};
  color: ${props => (props.$selected ? '#FE4C40' : 'black')};
`;

function MySelectModule({ select, handleSelect }) {
  if (select === false)
    return (
      <SelectWrapper>
        <IconWrapper onClick={handleSelect}>
          <IoMdGrid />
        </IconWrapper>
        <IconWrapper $selected>
          <IoMdHeartEmpty />
        </IconWrapper>
      </SelectWrapper>
    );
  return (
    <SelectWrapper>
      <IconWrapper $selected>
        <IoMdGrid />
      </IconWrapper>
      <IconWrapper onClick={handleSelect}>
        <IoMdHeartEmpty />
      </IconWrapper>
    </SelectWrapper>
  );
}
export default MySelectModule;
