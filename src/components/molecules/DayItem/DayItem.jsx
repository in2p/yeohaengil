import DayButton from '../../atoms/DayButton/DayButton.jsx';

function DayItem({ length, changeDay, day }) {
  const jsxElements = [];
  console.log(length);

  for (let i = 0; i < length; i += 1) {
    if (i === day - 1) {
      jsxElements.push(<DayButton bgColor="bg-main" day={i + 1} key={i} />);
    } else {
      jsxElements.push(
        <DayButton
          day={i + 1}
          bgColor="bg-default"
          changeDay={changeDay}
          key={i}
        />,
      );
    }
  }
  return (
    <div className="d-flex" style={{ overflow: 'hidden' }}>
      {jsxElements}
    </div>
  );
}

export default DayItem;
