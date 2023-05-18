import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const missions = useSelector((state) => (state.missions.missions));
  const res = missions.filter((mission) => mission.reserved);
  return (
    <div className="profile-container">
      <table className="profile-table">
        <tr>
          <td>
            <table className="mission-table">
              <h1>My Missions</h1>
              <tbody>
                {res.map((mission) => (
                  <>
                    <div className="key-div" value={mission.missionId}> </div>
                    <tr className="mission-row">
                      <td>{mission.missionName}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </td>
          <td>
            <table className="rocket-table">
              <h1>My Rockets</h1>
              <tbody>
                No Rockets Available
              </tbody>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default MyProfile;
