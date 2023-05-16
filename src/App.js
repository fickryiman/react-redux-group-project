import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './component/Navbar';
import { getMissions } from './Redux/missions/missionSlice';
import './App.css';

function App() {
  const { isLoading } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
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
