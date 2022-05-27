import { Suspense } from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';

import PageLoading from '@c/page-loading';
import Home from '@/pages/home';

function Routes(): JSX.Element {
  return (
    <Suspense fallback={<PageLoading />}>
      <RouterRoutes>
        <Route path='/' element={<Home />} />
      </RouterRoutes>
    </Suspense>
  );
}

export default Routes;
