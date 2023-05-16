import './showMission.css';

const showMission = (mission) => (
  <tr>
    <td className="mission-name">{mission.mission_name}</td>
    <td className="mission-description">{mission.description}</td>
    <td className="member-button"><button type="button">NOT A MEMBER</button></td>
    <td className="join-button"><button type="button">JOIN MISSION</button></td>
  </tr>
);

export default showMission;
