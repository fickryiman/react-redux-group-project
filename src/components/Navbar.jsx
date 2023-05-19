import { NavLink, Routes, Route } from 'react-router-dom';
import MyProfile from './MyProfile';
import Rockets from './Rockets';
import Missions from './Missions';
import Planet from '../images/planet.png';
import './Navbar.css';

const Navbar = () => (
  <nav>
    <div className="bar">
      <img className="logo" src={Planet} alt="planet" />
      <h1 className="title">Space Traveler&apos;s Hub</h1>
      <ul id="sidebar">
        <li>
          <NavLink to="/" className={({ isActive, isPending }) => ((isPending ? 'pending' : isActive) ? 'active' : '')}>
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink to="/missions" className={({ isActive, isPending }) => ((isPending ? 'pending' : isActive) ? 'active' : '')}>
            Missions
          </NavLink>
        </li>
        <li>|</li>
        <li>
          <NavLink to="/myprofile" className={({ isActive, isPending }) => ((isPending ? 'pending' : isActive) ? 'active' : '')}>
            MyProfile
          </NavLink>
        </li>
      </ul>
      <hr className="separator" />
    </div>
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/myprofile" element={<MyProfile />} />
    </Routes>
  </nav>
);

export default Navbar;
