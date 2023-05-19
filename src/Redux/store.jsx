import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketSlice';
import missionReducer from './missions/missionSlice';

const store = configureStore({
  reducer: {
    missions: missionReducer,
    rockets: rocketReducer,
  },
});

export default store;
