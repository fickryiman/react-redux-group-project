import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import showRocket from './showRocket';
import { getRockets } from '../Redux/rockets/rocketSlice';
import './Rockets.css';

const Rockets = () => {
  const { rockets, isLoading } = useSelector((state) => state.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  if (isLoading) {
    return <div>Loading contents...</div>;
  }

  return (
    <div className="rockets-container">
      {/* <div>{showRocket(rockets)}</div> */}
      <div className="cards">
        {rockets.map((rocket) => showRocket(rocket))}
      </div>
    </div>
  );
};

export default Rockets;
