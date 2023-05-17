import { useSelector } from 'react-redux';
import showRocket from './showRocket';

const Rockets = () => {
  const { rockets, isLoading } = useSelector((state) => state.rockets);

  if (isLoading) {
    return <div>Loading contents...</div>;
  }

  return (
    <div>
      <div>{showRocket(rockets)}</div>
    </div>
  );
};

export default Rockets;
