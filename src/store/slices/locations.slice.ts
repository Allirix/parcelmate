// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Location } from '../types';
import { getLocationId } from '../utils';

export const locationsSlice = createSlice({
  name: 'locations',
  initialState: {} as Record<string, Location>,
  reducers: {
    addLocation: (state, action: PayloadAction<Location>) => {
      state[getLocationId(action.payload)] = action.payload;
    },
    removeLocation: (state, action: PayloadAction<Location>) => {
      if (getLocationId(action.payload) in state) delete state[getLocationId(action.payload)];
    },
  },
});

export const { addLocation, removeLocation } = locationsSlice.actions;

export default locationsSlice.reducer;
