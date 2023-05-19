import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
      const newState = state.missions.map((mission) => {
        if (mission.missionId !== action.payload) return { ...mission };
        return { ...mission, reserved: !mission.reserved };
      });
      return { ...state, missions: newState };
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
          reserved: false,
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
