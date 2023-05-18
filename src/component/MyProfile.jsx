import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const missions = useSelector((state) => (state.missions.missions));
  const rockets = useSelector((state) => (state.rockets.rockets));
  console.log(rockets);
  const res = missions.filter((mission) => mission.reserved);
  const rocketReserved = rockets.filter((rocket) => rocket.reserved);
  return (
    <div className="containers">
      <div className="header">
        <h1 className="my-missions">My Missions</h1>
        <h1 className="my-rockets">My Rockets</h1>
      </div>
      <div className="lists">
        <div className="missions-lists">
          <ul className="ul-missions">
            {res.map((mission) => (
              <li key={mission.missionId} className="mission-list">{mission.missionName}</li>
            ))}
          </ul>
        </div>
        <div className="rockets-lists">
          <ul className="ul-rockets">
            {rocketReserved.map((rocket) => (
              <li key={rocket.rocketId} className="rocket-list">{rocket.rocketName}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    // <div className="profile-container">
    //   <table className="profile-table">
    //     <tr>
    //       <td className="missions-td">
    //         <table className="mission-table">
    //           <h1 className="my-missions">My Missions</h1>
    //           <tbody>
    //             {res.map((mission) => (
    //               <>
    //                 <div className="key-div" value={mission.missionId}> </div>
    //                 <tr className="mission-row">
    //                   <td>{mission.missionName}</td>
    //                 </tr>
    //               </>
    //             ))}
    //           </tbody>
    //         </table>
    //       </td>
    //       <td className="rockets-td">
    //         <table className="rocket-table">
    //           <h1 className="my-rockets">My Rockets</h1>
    //           <tbody>
    //             {rocketReserved.map((rocket) => (
    //               <>
    //                 <div className="key-div" value={rocket.rocketId}> </div>
    //                 <tr className="rocket-row">
    //                   <td>{rocket.rocketName}</td>
    //                 </tr>
    //               </>
    //             ))}
    //           </tbody>
    //         </table>
    //       </td>
    //     </tr>
    //   </table>
    // </div>
  );
};

export default MyProfile;
