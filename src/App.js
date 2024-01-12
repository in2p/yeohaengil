import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Main from './pages/Main.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
