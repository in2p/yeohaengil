import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

import Header from './components/organisms/Header/Header.jsx';
import Footer from './components/organisms/Footer/Footer.jsx';

import SearchPage from './components/pages/SearchPage/SearchPage.jsx';
import Main from './components/pages/MainPage/Main.js';
import WritePage from './components/pages/WriterPage/WritePage.jsx';
import MessageListPage from './components/pages/MessageListPage/MessageListPage.jsx';
import MyPage from './components/pages/MyPage/MyPage.jsx';
import MapPage from './components/pages/MapPage/MapPage.jsx';
import FollowPage from './components/pages/FollowPage/FollowPage.jsx';
import LoginPage from './components/pages/Login/LoginPage.jsx';

import SettingPage1 from './components/pages/SettingPage/SettingPage1.jsx';
import LoginLoadingPage from './components/pages/Login/LoginLoadingPage.jsx';

import useToken from './hooks/useToken.js';

axios.defaults.withCredentials = true;

function App() {
  const { token, setToken } = useToken();
  const { isLoggedIn, setIsLoggedIn } = useState();

  if (!token) {
    return (
      <BrowserRouter>
        <div className="App fullContainer">
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route
              path="/login/oauth2/*"
              element={<LoginLoadingPage setToken={setToken} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
  // isLoggedIn 으로 토큰의 유효성을 서버에 검사 해야하나
  // 1. 서버에게 토큰의 유호성 검사 하라고 시키기
  // 2. 재랜더링 마다 리프레쉬 토큰으로 jwt 토큰 받아와서 성공하면 isLoggedIn 에 저장하기
  // 정답: 요청을 수신 할때마다 로그인의 상태를 확인 할 수 있다.

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="fullContainer">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/write" element={<WritePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/messages" element={<MessageListPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="follow" element={<FollowPage />} />
            <Route path="/map" element={<MapPage />} />
            {/* <Route path="/login" element={<LoginPage />} />
            <Route path="/login/oauth2/kakao" element={<LoginHandler />} />
            <Route path="/login/oauth2/naver" element={<LoginHandler />} /> */}
            <Route path="/setting" element={<SettingPage1 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
