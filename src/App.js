import './App.css';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import axios from 'axios';
import {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  useCallback,
} from 'react';

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
