import { useSelector } from 'react-redux';
import showMissions from './showMission';

const Missions = () => {
  const { missions, isLoading } = useSelector((state) => state.missions);
  if (isLoading === undefined) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="missions-div">
        {showMissions(missions)}
      </div>
    </div>
  );
};

export default Missions;
