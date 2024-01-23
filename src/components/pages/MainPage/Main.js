import Card from '../../organisms/Card.js';
import './main.css';
import RecordedTravels from '../../molecules/RecordedTravels/RecordedTravels.jsx';

function Main() {
  return (
    <div className="container">
      <p>다가오는 여행</p>
      <Card />
      <RecordedTravels />
    </div>
  );
}

export default Main;
