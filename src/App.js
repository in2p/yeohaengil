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

import Main from './components/pages/MainPage/Main.js';
import WritePage from './components/pages/WriterPage/WritePage.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="fullContainer">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/write" element={<WritePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
