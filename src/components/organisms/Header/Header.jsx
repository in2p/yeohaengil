import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../../assets/Gil_logo2.png';

const HeaderContainer = styled.div`
  position: sticky;
  top: 0px; /*상단고정*/
  left: 0;
  right: 0;
  background-color: white;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
`;

const HeaderLogo = styled.img`
  display: flex;
  //justify-content: center; /*수평정렬*/
  //align-items: center; /*수직정렬*/

  width: 100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderLogo src={logo} alt="임시메인로고" />
      </Link>
    </HeaderContainer>
  );
}

export default Header;
