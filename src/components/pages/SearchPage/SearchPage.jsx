import React from 'react';
import styled from 'styled-components';

import { LuSearch, LuFilter } from 'react-icons/lu';

function SearchPage() {
  const FilterOption = [
    { value: 'lastest', name: '최신순' },
    { value: 'popular', name: '인기순' },
    { value: 'highest', name: '높은평균순' },
    { value: 'lowest', name: '낮은평균순' },
  ];

  return (
    <SearchBox>
      <LuSearch
        style={{
          fontSize: '20px',
          position: 'absolute',
          right: '70px',
          border: 'none',
          padding: '2px',
        }}
      />
      <SearhFilter>
        <LuFilter
          style={{
            fontSize: '20px',
          }}
        />
      </SearhFilter>
    </SearchBox>
  );
}

export default SearchPage;

const SearchBox = styled.div`
  width: 240px;
  height: 24px;
  border: 0.7px solid #000;
  border-radius: 10px;

  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

const SearhFilter = styled.div`
  display: flex;
`;
