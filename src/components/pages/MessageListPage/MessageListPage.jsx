import React from 'react';
import Message from '../../organisms/Message/Message.jsx';

function MessageListPage() {
  const messages = [
    {
      user: 'user1',
      img: 'https://images.unsplash.com/photo-1499591934245-40b55745b905?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      notWatched: 200,
      lastMessage: 'Hello world!',
      date: '2023-01-01',
    },
    {
      user: 'user1',
      img: 'https://images.unsplash.com/photo-1499591934245-40b55745b905?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      notWatched: 24,
      lastMessage: 'Hello world!',
      date: '2023-01-02',
    },
    {
      user: 'user1',
      img: 'https://images.unsplash.com/photo-1499591934245-40b55745b905?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      notWatched: 0,
      lastMessage: 'Hello world!',
      date: '2023-01-03',
    },
  ];

  return (
    <div className="d-flex-column align-start mt-3">
      {messages.map((message, i) => (
        <Message messageInfo={message} />
      ))}
    </div>
  );
}
export default MessageListPage;
