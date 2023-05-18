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
  reducers: {
    reserveRocket: (state, action) => {
      const reserveButton = document.getElementById(action.payload);

      if (reserveButton.classList.contains('cancel-reservation')) {
        reserveButton.classList = 'reserve-rocket';
        reserveButton.innerText = 'Reserve Rocket';

        const newState = state.newState.map((rocket) => {
          if (rocket.rocketId !== action.payload) {
            return rocket;
          }
          return { ...rocket, reserved: true };
        });
        state.newState = newState;
      } else {
        reserveButton.classList = 'cancel-reservation';
        reserveButton.innerText = 'Cancel Reservation';

        let newState;

        if (state.newState) {
          newState = state.newState.map((rocket) => {
            if (rocket.rocketId !== action.payload) {
              return rocket;
            }
            return { ...rocket, reserved: true };
          });
          state.newState = newState;
        } else {
          newState = state.rockets.map((rocket) => {
            if (rocket.rocketId !== action.payload) {
              return rocket;
            }
            return { ...rocket, reserved: true };
          });
          state.newState = newState;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRockets.fulfilled, (state, action) => {
      state.isLoading = false;
      const rocketArray = action.payload.map((item) => {
        const {
          rocket_id: rocketId,
          rocket_name: rocketName,
          description,
          flickr_images: flickrImages,
        } = item;
        return {
          rocketId,
          rocketName,
          description,
          flickrImages,
        };
      });
      state.rockets = rocketArray;
    });
    builder.addCase(getRockets.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { reserveRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
