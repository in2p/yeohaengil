import Card from '../../components/organisms/Card.js';
import './main.css';
import TravelMainView from '../../components/organisms/TravelMainView.jsx';

function Main() {
  return (
    <div className="container">
      <p>다가오는 여행</p>
      <Card />
      <TravelMainView />
    </div>
  );
}

export default Main;
