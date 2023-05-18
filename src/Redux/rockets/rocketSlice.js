import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rockets: [],
};

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await axios.get(url);
  return response.data;
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRockets.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRockets.fulfilled, (state, action) => {
      state.isLoading = false;
      state.rockets = action.payload;
    });
    builder.addCase(getRockets.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default rocketSlice.reducer;
