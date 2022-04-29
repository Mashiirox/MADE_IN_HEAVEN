import { Suspense, lazy } from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';

import PageLoading from '@c/page-loading';
import Home from '@/pages/home';

const PornHub = lazy(() => import('@/pages/pornhub'));
const Minesweeper = lazy(() => import('@/pages/minesweeper'));

function Routes(): JSX.Element {
  return (
    <Suspense fallback={<PageLoading />}>
      <RouterRoutes>
        <Route path='/' element={<Home />} />
        <Route path='/pornhub' element={<PornHub />} />
        <Route path='/minesweeper' element={<Minesweeper />} />
      </RouterRoutes>
    </Suspense>
  );
}

export default Routes;
