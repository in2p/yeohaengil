import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 330px;
  height: 49px;
  border-radius: ${({ borderTop, borderBottom }) => {
    if (borderTop) {
      return '9px 9px 0 0';
    }
    if (borderBottom) {
      return '0 0 9px 9px';
    }
    return '0';
  }};
  border: 1px solid #9f9d9d;
  border-bottom: ${({ borderBottom }) =>
    borderBottom ? '1px solid #9f9d9d' : 'none'};

  margin: 0 auto;
  margin-top: ${({ marginTop }) => (marginTop ? '5px' : '0')};

  .txt {
    font-size: 13px;
    margin-left: 20px;
    line-height: 49px;
  }
`;

const Container = styled.div``;

const Header = styled.div`
  color: #676565;
  font-size: 13px;
  font-weight: 700;
  padding: 0 5px;
  margin-top: 50px;
`;

function SettingBox() {
  return (
    <div>
      <Container>
        <Header>소통 및 알람</Header>
        <Box borderTop marginTop>
          <div className="txt">메세지 설정</div>
        </Box>
        <Box borderBottom>
          <div className="txt">댓글 설정</div>
        </Box>
        <Header>정보</Header>
        <Box borderTop marginTop>
          <div className="txt">개인정보 취급방침</div>
        </Box>
        <Box borderBottom>
          <div className="txt">자주 묻는 질문</div>
        </Box>
      </Container>
    </div>
  );
}

export default SettingBox;
