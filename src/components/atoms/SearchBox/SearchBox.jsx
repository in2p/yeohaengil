import React from 'react';

import { LuSearch } from 'react-icons/lu';
import styled from 'styled-components';

const SearchContainer = styled.div`
  width: 240px;
  height: 24px;
  border: 0.7px solid #000;
  border-radius: 10px;

  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

const SearchIcon = styled(LuSearch)`
  font-size: 20px;
  position: absolute;
  right: 70px;
  border: none;
  padding: 2px;
`;

function SearchBox() {
  return (
    <SearchContainer>
      <SearchIcon />
    </SearchContainer>
  );
}

export default SearchBox;
