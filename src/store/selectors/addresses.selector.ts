import { useCallback } from 'react';

import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from '..';

import { useAppDispatch } from '../hooks';
import { addAddress, removeAddress } from '../slices/addresses.slice';
import { Address } from '../types';
import { getLocations } from './locations.selector';

/* Selectors */
export const getAddresses = (state: RootState) => state.addresses;
export const selectAddressList = createSelector(
  [getAddresses, getLocations],
  (addresses, locations) =>
    Object.entries(addresses).map(([, address]: [string, Address]) => ({
      ...address,
      ...locations[address.locationId],
    })),
);

export const getAddressId = (_: RootState, id: string) => id;
export const selectAddress = () =>
  createSelector([getAddresses, getAddressId], (addresses, id) => addresses[id]);

/* Hooks */
export const useAddressList = () => useSelector(selectAddressList);
export const useAddresses = () => useSelector(getAddresses);
export const useAddress = (id: string) => {
  const selectAddressById = selectAddress();
  return useSelector((state: RootState) => selectAddressById(state, id));
};

/* Action Hooks */
export const useAddAddress = () => {
  const dispatch = useAppDispatch();
  return useCallback((address: Address) => dispatch(addAddress(address)), [dispatch]);
};
export const useRemoveAddress = () => {
  const dispatch = useAppDispatch();
  return useCallback((address: Address) => dispatch(removeAddress(address)), [dispatch]);
};
