import React, { useState } from 'react';
import { LuFilter } from 'react-icons/lu';
import styled from 'styled-components';

const FilterWrapper = styled.div`
  display: flex;
  font-size: 10px;
  cursor: pointer;
`;

const Filter = styled(LuFilter)`
  display: flex;
  font-size: 15px;
  margin: 10px 0px 10px 280px;
`;

const DropdownBtn = styled.button`
  border: none;
  background-color: transparent;
`;

function SearhFilter() {
  const [filterOpen, setFilterOpen] = useState(false);

  const FilterOption = [
    { value: 'all', name: '전체' },
    { value: 'lastest', name: '최신순' },
    { value: 'popular', name: '인기순' },
    { value: 'highest', name: '높은평균순' },
    { value: 'lowest', name: '낮은평균순' },
  ];

  return (
    <div>
      <FilterWrapper>
        <Filter />
        <DropdownBtn onClick={() => setFilterOpen(!filterOpen)}>
          전체<span>{filterOpen ? ' ▲' : ' ▼'}</span>
        </DropdownBtn>
      </FilterWrapper>
    </div>
  );
}

export default SearhFilter;
