import '../../../styles/globals.css';
import WriteButton from '../../atoms/WriteButton/WriteButton.jsx';
import WriteDestination from '../../organisms/WriteDestination/WriteDestination.jsx';
import CostAlert from '../../atoms/Alert/CostAlert.jsx';

function WritePage() {
  return (
    <div className="writeWrapper">
      <CostAlert />
      <WriteDestination />
      <WriteButton />
    </div>
  );
}

export default WritePage;
