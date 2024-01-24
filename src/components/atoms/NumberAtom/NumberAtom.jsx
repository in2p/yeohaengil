import React from 'react';

import '../../../styles/globals.css';

function NumberAtom({ n }) {
  let value;
  if (n > 100) {
    value = '100+';
  } else {
    value = n;
  }

  return (
    <div
      className="bg-main-color"
      style={{ borderRadius: '20px', padding: '0px 5px' }}
    >
      {value}
    </div>
  );
}
export default NumberAtom;
