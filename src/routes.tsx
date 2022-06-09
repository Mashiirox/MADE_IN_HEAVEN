import { Routes as RouterRoutes, Route } from 'react-router-dom';

import Home from '@/pages/home';
import Post from '@/pages/post';

function Routes(): JSX.Element {
  return (
    <RouterRoutes>
      <Route path='/' element={<Home />} />
      <Route path='/post/:id' element={<Post />} />
    </RouterRoutes>
  );
}

export default Routes;
