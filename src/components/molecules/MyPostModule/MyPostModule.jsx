import React from 'react';
import styled from 'styled-components';

import { FcLike } from 'react-icons/fc';

const PostWrapper = styled.div`
  height: 180px;
  background-color: white;
`;
const PostImg = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 150px;
  background-image: url('${props => props.img}');
`;

function MyPostModule({ img, title, price, likes }) {
  return (
    <PostWrapper>
      <PostImg img={img} />
      <div className="d-flex flex-between">
        <div>
          <p className="font-small">{title}</p>
          <p className="font-xsmall">평균 {price} 원</p>
        </div>
        <div className="d-flex-column">
          <FcLike className="font-small" />
          <p className="font-xsmall mt-3">{likes}</p>
        </div>
      </div>
    </PostWrapper>
  );
}
export default MyPostModule;
