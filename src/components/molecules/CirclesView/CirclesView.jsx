import React from 'react';
import styled from 'styled-components';

import '../../../styles/globals.css';

import CircleBox from '../../atoms/CircleBox/CircleBox.jsx';

const TripView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-right: 15px;
`;

function CirclesView({ travels }) {
  return (
    <div className="d-flex">
      {travels.map((t, i) => (
        <TripView key={{ i }}>
          <CircleBox img={t.img_url} />
          <p className="font-small mt-3 mb-0">{t.location}</p>
        </TripView>
      ))}
    </div>
  );
}
export default CirclesView;
