import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AppShell from './components/shareds/AppShell';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppShell>
          <App />
        </AppShell>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
