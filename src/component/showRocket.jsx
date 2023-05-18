import './showRocket.css';

const showRocket = (rockets) => (
  <div className="card" key={rockets.id}>
    <img src={rockets.flickr_images[0]} className="flickr-images" alt="flickr-images" />
    <div className="name-desc-button">
      <h3 className="rocket-name">{rockets.rocket_name}</h3>
      <p className="description">{rockets.description}</p>
      <button type="button" className="reserve-rocket">Reserve Rocket</button>
    </div>
  </div>
);

export default showRocket;
