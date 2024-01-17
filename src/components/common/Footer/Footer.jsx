import './Footer.css';
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlinePlusCircle,
  AiOutlineSend,
  AiOutlineUser,
} from 'react-icons/ai';

function Footer() {
  return (
    <div className="navWrapper">
      <div className="navItem">
        <AiOutlineHome />
      </div>
      <div className="navItem">
        <AiOutlineSearch />
      </div>
      <div className="navItem">
        <AiOutlinePlusCircle />
      </div>
      <div className="navItem">
        <AiOutlineSend />
      </div>
      <div className="navItem">
        <AiOutlineUser />
      </div>
    </div>
  );
}

export default Footer;
