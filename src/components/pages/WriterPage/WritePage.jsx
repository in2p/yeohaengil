import '../../../styles/globals.css';
import WriteImgBox from '../../atoms/WriteImgBox/WriteImgBox.jsx';
import WriteDayContents from '../../organisms/WriteDayContents/WriteDayContents.jsx';
import PostButton from '../../atoms/PostButton/PostButton.jsx';
import MapCircle from '../../atoms/MapCircle/MapCircle.jsx';
import WriteDestination from '../../molecules/WriteDestination/WriteDestination.jsx';

function WritePage({ numDaysSelected }) {
  return (
    <div className="writeWrapper">
      <WriteImgBox />
      <WriteDestination />
      <WriteDayContents length={numDaysSelected} />
      <PostButton />
      <MapCircle />
    </div>
  );
}

export default WritePage;
