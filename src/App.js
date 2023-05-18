import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './component/Navbar';
import { getRockets } from './Redux/rockets/rocketSlice';
import './App.css';

function App() {
  const { isLoading } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
