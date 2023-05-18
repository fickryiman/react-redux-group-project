import { useDispatch } from 'react-redux';
import { reserveRocket } from '../Redux/rockets/rocketSlice';
import './showRocket.css';

const ShowRocket = (rocketId, rocketName, description, flickrImages) => {
  const dispatch = useDispatch();

  return (
    <div className="card" key={rocketId}>
      <img src={flickrImages[0]} className="flickr-images" alt="flickr-images" />
      <div className="name-desc-button">
        <h3 className="rocket-name">{rocketName}</h3>
        <p className="description">{description}</p>
        <button
          type="button"
          className="reserve-rocket"
          id={rocketId}
          onClick={() => dispatch(reserveRocket(rocketId))}
        >
          Reserve Rocket
        </button>
      </div>
    </div>
  );
};

export default ShowRocket;
