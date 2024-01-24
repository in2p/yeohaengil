import React from 'react';

function DayContents({ contents }) {
  return (
    <div className="d-flex" style={{ width: '300vw' }}>
      {contents.map((a, i) => (
        <div className="d-flex" key={{ i }}>
          <div className="content-img" />
          <div className="content-column">
            <h3>{a.title}</h3>
            <p>{a.category}</p>
            <p>예상 {a.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default DayContents;
