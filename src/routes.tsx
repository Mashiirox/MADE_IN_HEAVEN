import { Suspense, lazy } from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';

import Home from './pages/home';

const PornHub = lazy(() => import('./pages/pornhub'));

function Routes(): JSX.Element {
  return (
    <Suspense fallback={<div>加载中...</div>}>
      <RouterRoutes>
        <Route path='/' element={<Home />} />
        <Route path='/pornhub' element={<PornHub />} />
      </RouterRoutes>
    </Suspense>
  );
}

export default Routes;
