import { useSelector } from 'react-redux';
import DayButton from '../../atoms/DayButton/DayButton.jsx';

function DayItem({ length }) {
  const day = useSelector(state => state.day);
  const jsxElements = [];

  for (let i = 0; i < length; i += 1) {
    if (i === day - 1) {
      jsxElements.push(<DayButton bgColor="bg-main" day={i + 1} />);
    } else {
      jsxElements.push(<DayButton day={i + 1} bgColor="bg-default" />);
    }
  }
  return (
    <div className="d-flex" style={{ overflow: 'hidden' }}>
      {jsxElements}
    </div>
  );
}
export default DayItem;
