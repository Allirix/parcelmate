// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const suburbsSlice = createSlice({
  name: 'suburbs',
  initialState: {} as Record<string, string>,
  reducers: {
    addSuburb: (state, action: PayloadAction<string>) => {
      state[action.payload] = action.payload;
    },
    removeSuburb: (state, action: PayloadAction<string>) => {
      if (action.payload in state) delete state[action.payload];
    },
  },
});

export const { addSuburb, removeSuburb } = suburbsSlice.actions;

export default suburbsSlice.reducer;
