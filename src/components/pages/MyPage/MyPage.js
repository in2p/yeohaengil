import React from 'react';
import '../../../styles/globals.css';
import CircleBox from '../../atoms/CircleBox/CircleBox.jsx';

function MyPage() {
  return (
    <div className="d-flex">
      <div>
        <div className="d-flex-column">
          <h4 className="bg-default-color">user_id</h4>
          <CircleBox className="bg-default-color" />
        </div>
        <div />
      </div>
    </div>
  );
}
export default MyPage;
