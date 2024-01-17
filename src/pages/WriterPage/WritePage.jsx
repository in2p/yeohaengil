import './WritePage.css';
import { LuImagePlus, LuPlane, LuCalendarDays, LuWallet } from 'react-icons/lu';

function WritePage() {
  return (
    <div className="writeBackground">
      <div className="uploadImgContainer">
        <LuImagePlus className="uploadImg" />
      </div>
      <div className="regionContainer">
        <div className="regionImgContainer">
          <LuPlane className="regionImg" />
        </div>
        <div className="writeText">지역</div>
      </div>
      <div className="dateContainer">
        <div className="dateImgContainer">
          <LuCalendarDays className="dateImg" />
        </div>
        <div className="writeText">년/월/일</div>
      </div>
      <div className="dayContainer">
        <LuWallet className="dayImg" />
        <div className="dayText">Day 1</div>
      </div>
    </div>
  );
}

export default WritePage;
