import rocketsReducer, { reserveRocket } from '../Redux/rockets/rocketSlice';

describe('rocketsSlice', () => {
  describe('reducer', () => {
    it('should handle Reserve Rocket', () => {
      const initialState = {
        rockets: [
          { rocketId: 1, reserved: false },
          { rocketId: 2, reserved: false },
        ],
      };
      const action = reserveRocket(1);
      const expectedState = {
        rockets: [
          { rocketId: 1, reserved: true },
          { rocketId: 2, reserved: false },
        ],
      };
      expect(rocketsReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle Cancel Reservation', () => {
      const initialState = {
        rockets: [
          { rocketId: 1, reserved: true },
          { rocketId: 2, reserved: false },
        ],
      };
      const action = reserveRocket(1);
      const expectedState = {
        rockets: [
          { rocketId: 1, reserved: false },
          { rocketId: 2, reserved: false },
        ],
      };
      expect(rocketsReducer(initialState, action)).toEqual(expectedState);
    });
  });
});
