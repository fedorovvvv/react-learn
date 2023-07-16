import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: [],
  reducers: {
    addCity(state, action) {
        console.log('addCity', {state, action})
        state.push(action.payload)
    }
  },
});

export const { addCity } = weatherSlice.actions;