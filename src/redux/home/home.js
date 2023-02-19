import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Motorcycles API
const motorcyclesURL = 'http://localhost:3001/motorcycles';

// Actions
const GET_MOTORCYCLES = 'vespa-app/motorcycles/getMotorcycles';

// Initial State
const initialState = [];

// Creating the thunk for all actions
export const fetchMotorcycles = createAsyncThunk(
  GET_MOTORCYCLES,
  async () => {
    try {
      const response = await axios.get(motorcyclesURL);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

// Creating the slice
export const motorcyclesSlice = createSlice({
  name: 'motorcycles',
  initialState,
  reducers: {
    toggleMotorcycle(state, action) {
      const motor = state.find((motor) => motor.id === action.payload);
      if (motor) {
        motor.reserved = !motor.reserved;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMotorcycles.fulfilled, (state, action) => {
        const motors = action.payload.map((motor) => ({
          id: motor.id,
          name: motor.name,
          model_no: motor.model_no,
          finance_fee: motor.finance_fee,
          purchase_fee: motor.purchase_fee,
          description: motor.description,
          image: motor.id === 'motorcycle1' ? motor.flickr_images[1] : motor.flickr_images[0],
        }));
        return motors;
      });
  },
});

export const { toggleMotorcycle } = motorcyclesSlice.actions;
// Exporting the reducer
export default motorcyclesSlice.reducer;
