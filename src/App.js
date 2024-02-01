import './App.css';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  BrowserRouter,
} from 'react-router-dom';

import Header from './components/organisms/Header/Header.jsx';
import Footer from './components/organisms/Footer/Footer.jsx';

import SearchPage from './components/pages/SearchPage/SearchPage.jsx';
import Main from './components/pages/MainPage/Main.js';
import WritePage from './components/pages/WriterPage/WritePage.jsx';
import MessageListPage from './components/pages/MessageListPage/MessageListPage.jsx';
import MyPage from './components/pages/MyPage/MyPage.jsx';
import MapPage from './components/pages/MapPage/MapPage.jsx';
import FollowPage from './components/pages/FollowPage/FollowPage.jsx';
import LoginPage from './components/pages/LoginPage/LoginPage.jsx';
import SettingPage1 from './components/pages/SettingPage/SettingPage1.jsx';


function App() {
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
            <Route path="/login" element={<LoginPage />} />
            <Route path="/setting" element={<SettingPage1 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
