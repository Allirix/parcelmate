import AppShell from './components/shareds/AppShell';
import Router from './routes';
import './styles/vendors.scss';

const App = () => (
  <main>
    <AppShell>
      <Router />
    </AppShell>
  </main>
);

export default App;
