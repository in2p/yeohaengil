import React from 'react';

import '../../../styles/globals.css';
import './Message.css';

import CircleBox from '../../atoms/CircleBox/CircleBox.jsx';
import NumberAtom from '../../atoms/NumberAtom/NumberAtom.jsx';

function Message({ messageInfo }) {
  return (
    <div className="message-container w-100 ">
      <div className="d-flex mt-15 ">
        <CircleBox img={messageInfo.img} />
        <div className="message-content ml-10">
          <h4>{messageInfo.user}</h4>
          <p>{messageInfo.lastMessage}</p>
        </div>
      </div>
      <div className="float-right ">
        {messageInfo.notWatched > 0 ? (
          <div className="d-flex-column align-end">
            <p>{messageInfo.date}</p>
            <NumberAtom n={messageInfo.notWatched} />
          </div>
        ) : (
          <p>{messageInfo.date}</p>
        )}
      </div>
    </div>
  );
}
export default Message;
