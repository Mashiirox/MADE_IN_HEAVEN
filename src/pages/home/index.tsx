import { useEffect } from 'react';

import PageLoading from '@/components/page-loading';

import { queryPoems } from '@/utils/service';

function Home(): JSX.Element {
  useEffect(() => {
    queryPoems().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className='bg-black h-full'>
      <PageLoading />
    </div>
  );
}

export default Home;
