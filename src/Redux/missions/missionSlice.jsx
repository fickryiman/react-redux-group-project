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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMissions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMissions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.missions = action.payload;
    });
    builder.addCase(getMissions.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default missionSlice.reducer;
