import React from 'react';

import '../../../styles/globals.css';

import CircleBox from '../../atoms/CircleBox/CircleBox.jsx';
import RectGrayButton from '../../atoms/RectButton/RectGrayButton.jsx';

function FollowModule({ name, img, buttonText, $primary }) {
  return (
    <div className="d-flex flex-between mb-15">
      <div className="d-flex">
        <CircleBox border="none" size="55px" />
        <h5 className="mg-10">{name}</h5>
      </div>
      <RectGrayButton $primary={$primary} width="50px">
        {buttonText}
      </RectGrayButton>
    </div>
  );
}
export default FollowModule;
