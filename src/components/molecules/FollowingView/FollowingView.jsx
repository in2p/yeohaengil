import React from 'react';
import styled from 'styled-components';
import FollowModule from '../FollowModule/FollowModule.jsx';

const SelectWrapper = styled.div`
  width: 100%;
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 15px;
  border-bottom: ${props =>
    props.$selected ? '1.5px solid #FE4C40' : '1.5px solid #eee'};
  padding-bottom: 5px;
  color: ${props => (props.$selected ? 'black' : 'gray')};
`;
function FollowingView({ items, handleSelector }) {
  return (
    <div>
      <div className="d-flex">
        <SelectWrapper onClick={handleSelector}>1614 팔로워</SelectWrapper>
        <SelectWrapper $selected>903 팔로잉</SelectWrapper>
      </div>
      {items.map((item, i) => {
        if (item.following) {
          return <FollowModule name={item.name} buttonText="팔로잉" />;
        }
        return <FollowModule name={item.name} buttonText="팔로우" $primary />;
      })}
    </div>
  );
}
export default FollowingView;
