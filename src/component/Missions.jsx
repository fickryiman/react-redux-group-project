import { useSelector } from 'react-redux';
import showMission from './showMission';
import './Mission.css';

const Missions = () => {
  const { missions, isLoading } = useSelector((state) => state.missions);
  if (isLoading === undefined) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="missions-div">
        <table>
          <thead>
            <tr>
              <td>Mission</td>
              <td>Description</td>
              <td>Status</td>
              <td> </td>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => showMission(mission))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Missions;
