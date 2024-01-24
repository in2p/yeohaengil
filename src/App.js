import './App.css';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  BrowserRouter,
} from 'react-router-dom';

import Header from './components/common/Header/Header.jsx';
import Footer from './components/common/Footer/Footer.jsx';

import Main from './pages/MainPage/Main.js';
import WritePage from './pages/WriterPage/WritePage.jsx';
import SearchPage from './pages/SearchPage/SearchPage.jsx';
import UploadModal from './pages/WriterPage/UploadModal.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="fullContainer">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/write" element={<WritePage />} />
            <Route path="/search" element={<UploadModal />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
