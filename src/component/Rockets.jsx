import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import showRocket from './showRocket';
import { getRockets } from '../Redux/rockets/rocketSlice';

const Rockets = () => {
  const { rockets, isLoading } = useSelector((state) => state.rockets);

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
    <div>
      <div>{showRocket(rockets)}</div>
    </div>
  );
};

export default Rockets;
