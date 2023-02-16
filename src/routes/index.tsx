import { Spin } from 'antd';
import { FunctionComponent, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';

const About = lazy(() => import('./About'));

const Router: FunctionComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="about"
      element={
        <Suspense fallback={<Spin />}>
          <About />
        </Suspense>
      }
    />
  </Routes>
);

export default Router;
