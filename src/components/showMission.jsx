import { useDispatch } from 'react-redux';
import { joinMission } from '../Redux/missions/missionSlice';
import './showMission.css';

const ShowMission = (missionId, missionName, description, reserved) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td className="mission-name">{missionName}</td>
      <td className="mission-description">{description}</td>
      <td className="member-button">
        {
        !reserved ? (
          <button className="non-active" type="button">NOT A MEMBER</button>
        )
          : (
            <button className="active-member" type="button">Active Member</button>
          )
        }
      </td>
      <td className="join-button">
        {
        !reserved ? (
          <button type="button" id={missionId} onClick={() => dispatch(joinMission(missionId))}>
            Join Mission
          </button>
        )
          : (
            <button type="button" className="border-red" id={missionId} onClick={() => dispatch(joinMission(missionId))}>
              Leave Mission
            </button>
          )
        }
      </td>
    </tr>
  );
};

export default ShowMission;
