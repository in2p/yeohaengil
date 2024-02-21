import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

import App from './App.js';
import './index.css';

import store from './store.jsx';

// id가 root인 요소를 최상위 컨테이너로 설정
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
        <App />
      </CookiesProvider>
    </Provider>
    ,
  </React.StrictMode>,
);
