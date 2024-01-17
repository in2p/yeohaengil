import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/common/Header/Header.jsx';
import Footer from './components/common/Footer/Footer.jsx';
import WritePage from './pages/WriterPage/WritePage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <WritePage />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
