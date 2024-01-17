import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

import Header from './components/common/Header/Header.jsx';
import Footer from './components/common/Footer/Footer.jsx';

import Main from './pages/Main.js';
import WritePage from './pages/WriterPage/WritePage.jsx';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/write" element={<WritePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
