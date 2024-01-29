import React from 'react';
import '../../../styles/globals.css';

function MyInfoModule({ title, number }) {
  return (
    <div className="d-flex-column ">
      <h4 className="mg-0">{number}</h4>
      <p className="font-small mt-3">{title}</p>
    </div>
  );
}
export default MyInfoModule;
