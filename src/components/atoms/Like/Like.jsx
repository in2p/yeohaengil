import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const LikeContainer = styled.div`
  font-size: 20px;
  float: inline-end;
  padding: 5px 5px 0 0;

  .cntLike {
    display: flex;
    float: right;
    font-size: 15px;
  }
`;

function Like() {
  const [like, setLike] = useState(false);
  const [cntLike, setCntLike] = useState(0);

  useEffect(() => {}, [cntLike]);

  const handleLike = () => {
    setLike(!like);

    if (like === true) {
      setCntLike(cntLike + 1);
    } else if (like === false && like > 0) {
      setCntLike(cntLike - 1);
    }
  };

  return (
    <LikeContainer onClick={handleLike}>
      <span className="cntLike">{cntLike}</span>
      {like ? <AiFillHeart style={{ color: 'red' }} /> : <AiOutlineHeart />}
    </LikeContainer>
  );
}

export default Like;
