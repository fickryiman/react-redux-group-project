import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import './missionSlice.css';

const url = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
};

export const getMissions = createAsyncThunk('missions/getMissions', async () => {
  const resp = await axios.get(url);
  return resp.data;
});

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const btn = document.getElementById(action.payload);
      if (btn.classList.contains('border-red')) {
        btn.classList.remove('border-red');
        btn.innerText = 'Join Mission';
        const newState = state.newState.map((mission) => {
          if (mission.missionId !== action.payload) {
            return mission;
          }
          return { ...mission, reserved: false };
        });
        state.newState = newState;
      } else {
        btn.classList.add('border-red');
        btn.innerText = 'Leave Mission';
        let newState;
        if (state.newState) {
          newState = state.newState.map((mission) => {
            if (mission.missionId !== action.payload) {
              return mission;
            }
            return { ...mission, reserved: true };
          });
          state.newState = newState;
        } else {
          newState = state.missions.map((mission) => {
            if (mission.missionId !== action.payload) {
              return mission;
            }
            return { ...mission, reserved: true };
          });
          state.newState = newState;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMissions.fulfilled, (state, action) => {
      state.isLoading = false;
      const missionArr = action.payload.map((item) => {
        const { mission_id: missionId, mission_name: missionName, description } = item;
        return {
          missionId,
          missionName,
          description,
        };
      });
      state.missions = missionArr;
    });
    builder.addCase(getMissions.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { joinMission } = missionSlice.actions;
export default missionSlice.reducer;
