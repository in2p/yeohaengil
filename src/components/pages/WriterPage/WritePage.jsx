import '../../../styles/globals.css';
import UploadImgBox from '../../atoms/UploadImgBox/UploadImgBox.jsx';
import WriteDestination from '../../molecules/WriteDestination/WriteDestination.jsx';
import WriteDayContents from '../../molecules/WriteDayContents/WriteDayContents.jsx';
import DayItem from '../../molecules/DayItem/DayItem.jsx';
import PostButton from '../../atoms/PostButton/PostButton.jsx';
import MapCircle from '../../atoms/MapCircle/MapCircle.jsx';

function WritePage() {
  return (
    <div className="writeWrapper">
      <UploadImgBox />
      <WriteDestination />
      <DayItem />
      <WriteDayContents />
      <PostButton />
      <MapCircle />
    </div>
  );
}

export default WritePage;
