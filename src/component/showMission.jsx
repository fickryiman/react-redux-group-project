import { useDispatch } from 'react-redux';
import { joinMission } from '../Redux/missions/missionSlice';
import './showMission.css';

const ShowMission = (missionId, missionName, description) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td className="mission-name">{missionName}</td>
      <td className="mission-description">{description}</td>
      <td className="member-button"><button type="button">NOT A MEMBER</button></td>
      <td className="join-button"><button type="button" id={missionId} onClick={() => dispatch(joinMission(missionId))}>Join Mission</button></td>
    </tr>
  );
};

export default ShowMission;
