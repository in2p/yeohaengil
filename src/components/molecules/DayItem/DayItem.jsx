import React, { useState } from 'react';
import DayButton from '../../atoms/DayButton/DayButton.jsx';

function DayItem({ items }) {
  const [day, setDay] = useState(1);
  return (
    <div className="d-flex" style={{ overflow: 'hidden' }}>
      {items.map((a, i) => {
        if (i === day - 1) {
          return <DayButton bgColor="bg-main-color" day={i + 1} />;
        }
        return <DayButton day={i + 1} bgColor="bg-default-color" />;
      })}
    </div>
  );
}
export default DayItem;
