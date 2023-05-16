import { BrowserRouter } from 'react-router-dom';
import Navbar from './component/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
