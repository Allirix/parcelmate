/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-extraneous-dependencies */

import { render, RenderOptions } from '@testing-library/react';
import React, { FC, ReactElement, StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => (
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading="Loading...">
        <BrowserRouter>{children}</BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
