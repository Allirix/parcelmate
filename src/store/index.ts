import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import storage from 'localforage';
import { persistReducer } from 'redux-persist';

import persistStore from 'redux-persist/lib/persistStore';
import addressesReducer from './slices/addresses.slice';
import locationsReducer from './slices/locations.slice';
import suburbsReducer from './slices/suburbs.slice';

const persistConfig = { key: 'root', storage, debug: true };

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    suburbs: suburbsReducer,
    locations: locationsReducer,
    addresses: addressesReducer,
  }),
);

export const store = configureStore({ reducer: persistedReducer });

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
