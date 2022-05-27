// import GitalkComponent from 'gitalk/dist/gitalk-component';
import PageLoading from '@/components/page-loading';

import 'gitalk/dist/gitalk.css';

function Home(): JSX.Element {
  return (
    <div className='bg-black h-full'>
      <PageLoading />
      {/* <GitalkComponent
        options={{
          clientID: '7134ff1c7af78c3f7bdf',
          clientSecret: 'd2c54280daadca07020d03754b6a6d7aa7f744c2',
          repo: 'gitalk_comment',
          owner: 'Mashiirox',
          admin: ['Mashiirox'],
          id: 'mashiirox.com', // Ensure uniqueness and length less than 50
          distractionFreeMode: false, // Facebook-like distraction free mode
        }}
      /> */}
    </div>
  );
}

export default Home;
