// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Address, FullAddress } from '../types';
import { getAddressId } from '../utils';

export const addressSlice = createSlice({
  name: 'addresses',
  initialState: {} as Record<string, Address>,
  reducers: {
    addAddress: (state, action: PayloadAction<Address>) => {
      state[getAddressId(action.payload)] = action.payload;
    },
    removeAddress: (state, action: PayloadAction<FullAddress | Address>) => {
      if (getAddressId(action.payload) in state) delete state[getAddressId(action.payload)];
    },
  },
});

export const { addAddress, removeAddress } = addressSlice.actions;

export default addressSlice.reducer;
