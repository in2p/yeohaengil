import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../../assets/Gil_logo1.png';

function Header() {
  const hideHeader = useLocation();
  if (hideHeader.pathname === '/login') return null;
  return (
    <div className="headerContainer">
      <div className="headerLogo">
        <Link to="/">
          <img src={logo} alt="임시메인로고" />
        </Link>
      </div>
      <div className="gilNotice" />
    </div>
  );
}

export default Header;
