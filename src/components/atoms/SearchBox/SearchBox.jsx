import React, { useState } from 'react';
import { LuSearch } from 'react-icons/lu';
import styled from 'styled-components';

const SearchContainer = styled.div`
  width: 240px;
  height: 22px;
  border: 0.8px solid #707070;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 2px;
`;

const SearchIcon = styled(LuSearch)`
  font-size: 17px;
  position: absolute;
  right: 8px;
`;

function SearchBox({ onSearch }) {
  const [searchPlace, setSearchPlace] = useState(''); // 검색

  const onChange = e => {
    setSearchPlace(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(searchPlace);
    setSearchPlace(''); // 다시 placeholder로
  };

  return (
    <SearchContainer>
      <form onSubmit={handleSubmit}>
        <SearchIcon type="submit" />

        <input
          type="text"
          placeholder="장소를 검색하세요"
          onChange={onChange}
          value={searchPlace}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            paddingLeft: '15px',
            fontSize: '12px',
          }}
        />
      </form>
    </SearchContainer>
  );
}

export default SearchBox;
