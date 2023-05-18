import { useSelector } from 'react-redux';
import ShowRocket from './showRocket';
import './Rockets.css';

const Rockets = () => {
  const { rockets, isLoading } = useSelector((state) => state.rockets);

  if (isLoading) {
    return <div>Loading contents...</div>;
  }

  return (
    <div className="rockets-container">
      <div className="cards">
        {rockets.map((rocket) => ShowRocket(
          rocket.rocketId,
          rocket.rocketName,
          rocket.description,
          rocket.flickrImages,
        ))}
      </div>
    </div>
  );
};

export default Rockets;
