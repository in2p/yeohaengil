import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../../assets/Gil_logo.png';

const HeaderContainer = styled.div`
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  max-width: 375px;
  top: 0px; /*상단고정*/
  left: 0;
  right: 0;
  background-color: white;
  padding: 0px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
`;

const HeaderLogo = styled.img`
  display: flex;
  //justify-content: center; /*수평정렬*/
  //align-items: center; /*수직정렬*/

  width: 130px;
  height: 130px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0px;
`;

function Header() {
  const hideHeader = useLocation();
  if (hideHeader.pathname.startsWith('/login')) return null;

  // if (hideHeader.pathname === '/setting') return null;
  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderLogo src={logo} alt="임시메인로고" />
      </Link>
    </HeaderContainer>
  );
}

export default Header;
