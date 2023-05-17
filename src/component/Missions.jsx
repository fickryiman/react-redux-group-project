import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMissions } from '../Redux/missions/missionSlice';
import ShowMission from './showMission';

import './Mission.css';

const Missions = () => {
  const { missions, isLoading } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, []);
  console.log(missions);
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
            {missions.map((mission) => (
              ShowMission(mission.missionId,
                mission.missionName,
                mission.description,
                mission.reserved)))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Missions;
