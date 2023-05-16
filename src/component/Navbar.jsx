import { NavLink, Routes, Route } from 'react-router-dom';
import MyProfile from './MyProfile';
import Rockets from './Rockets';
import Missions from './Missions';
import './Navbar.css';
import Planet from '../images/planet.png';

const Navbar = () => (
  <nav>
    <div className="bar">
      <img className="logo" src={Planet} alt="planet" />
      <h1 className="title">Space Traveler&apos;s Hub</h1>
      <ul id="sidebar">
        <li>
          <NavLink to="/rockets" className={({ isActive, isPending }) => ((isPending ? 'pending' : isActive) ? 'active' : '')}>
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink to="/missions" className={({ isActive, isPending }) => ((isPending ? 'pending' : isActive) ? 'active' : '')}>
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={({ isActive, isPending }) => ((isPending ? 'pending' : isActive) ? 'active' : '')}>
            MyProfile
          </NavLink>
        </li>
      </ul>
    </div>
    <Routes>
      <Route path="/" element={<MyProfile />} />
      <Route path="/rockets" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
    </Routes>
  </nav>
);

export default Navbar;
