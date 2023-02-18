import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Home from './Home';

const History = lazy(() => import('./History'));
const Locations = lazy(() => import('./Locations'));
const Map = lazy(() => import('./Map'));
const Settings = lazy(() => import('./Settings'));
const Account = lazy(() => import('./Account'));
const Help = lazy(() => import('./Help'));
const Login = lazy(() => import('./Login'));
const Logout = lazy(() => import('./Logout'));
const Signup = lazy(() => import('./Signup'));

const Router = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/history" element={<History />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/map" element={<Map />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/account" element={<Account />} />
      <Route path="/help" element={<Help />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  </Suspense>
);

export default Router;
