import missionsReducer, { joinMission } from '../Redux/missions/missionSlice';

describe('missionsSlice', () => {
  describe('reducer', () => {
    it('should handle Join Mission', () => {
      const initialState = {
        missions: [
          { missionId: 1, reserved: false },
          { missionId: 2, reserved: false },
        ],
      };
      const action = joinMission(1);
      const expectedState = {
        missions: [
          { missionId: 1, reserved: true },
          { missionId: 2, reserved: false },
        ],
      };
      expect(missionsReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle Leave Mission', () => {
      const initialState = {
        missions: [
          { missionId: 1, reserved: true },
          { missionId: 2, reserved: false },
        ],
      };
      const action = joinMission(1);
      const expectedState = {
        missions: [
          { missionId: 1, reserved: false },
          { missionId: 2, reserved: false },
        ],
      };
      expect(missionsReducer(initialState, action)).toEqual(expectedState);
    });
  });
});
