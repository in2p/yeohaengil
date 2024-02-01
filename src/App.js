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
            <Route path="/setting" element={<SettingPage1 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
