import React from 'react';

import '../../../styles/globals.css';

import CircleBox from '../../atoms/CircleBox/CircleBox.jsx';

function CirclesListView({ travels }) {
  return (
    <div>
      {travels.map((t, i) => (
        <div className="d-flex mb-10" key={t.id}>
          <CircleBox img={t.img_url} />
          <div className="d-flex-column flex-center align-start ml-5 ">
            <p className="font-small mg-0">{t.location}</p>
            <p className="font-small mg-0">{t.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default CirclesListView;
