import './main.css';
import RecordedTravels from '../../organisms/RecordedTravels/RecordedTravels.jsx';
import TravelCard from '../../organisms/TravelCard/TravelCard.js';

function Main() {
  return (
    <div className="container">
      <p>다가오는 여행</p>
      <TravelCard />
      <RecordedTravels />
    </div>
  );
}

export default Main;
