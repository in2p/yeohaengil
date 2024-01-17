import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';

// id가 root인 요소를 최상위 컨테이너로 설정
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);