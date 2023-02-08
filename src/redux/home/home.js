import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Dragons API
const dragonsURL = 'https://api.spacexdata.com/v3/dragons';

// Actions
const GET_DRAGONS = 'travelers-hub/dragons/getDragons';

// Initial State
const initialState = [];

// Creating the thunk for all actions
export const fetchDragons = createAsyncThunk(
  GET_DRAGONS,
  async () => {
    try {
      const response = await axios.get(dragonsURL);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

// Creating the slice
export const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    toggleDragon(state, action) {
      const dragon = state.find((dragon) => dragon.id === action.payload);
      if (dragon) {
        dragon.reserved = !dragon.reserved;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragons.fulfilled, (state, action) => {
        const dragons = action.payload.map((dragon) => ({
          id: dragon.id,
          name: dragon.name,
          description: dragon.description,
          image: dragon.id === 'dragon1' ? dragon.flickr_images[1] : dragon.flickr_images[0],
          reserved: false,
        }));
        return dragons;
      });
  },
});

export const { toggleDragon } = dragonsSlice.actions;
// Exporting the reducer
export default dragonsSlice.reducer;
