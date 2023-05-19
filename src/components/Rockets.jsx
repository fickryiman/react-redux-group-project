import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getRockets } from '../Redux/rockets/rocketSlice';
import showRocket from './showRocket';

import './Rockets.css';

const Rockets = () => {
  const { rockets, isLoading } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRockets());
    }
  }, []);

  if (isLoading) {
    return <div>Loading contents...</div>;
  }

  return (
    <div className="rockets-container">
      <div className="cards">
        {rockets.map((rocket) => showRocket(
          rocket.rocketId,
          rocket.rocketName,
          rocket.description,
          rocket.flickrImages,
          rocket.reserved,
        ))}
      </div>
    </div>
  );
};

export default Rockets;
