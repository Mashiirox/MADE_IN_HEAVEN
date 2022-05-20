import { Link } from 'react-router-dom';
import GitalkComponent from 'gitalk/dist/gitalk-component';

import Icon from '@c/icon';

import 'gitalk/dist/gitalk.css';

function Home(): JSX.Element {
  return (
    <div className='bg-red'>
      <Link to='./pornhub'>Hello World</Link>
      <Icon name='camera' color='red' />
      <GitalkComponent
        options={{
          clientID: '7134ff1c7af78c3f7bdf',
          clientSecret: 'd2c54280daadca07020d03754b6a6d7aa7f744c2',
          repo: 'gitalk_comment',
          owner: 'Mashiirox',
          admin: ['Mashiirox'],
          id: 'mashiirox.com', // Ensure uniqueness and length less than 50
          distractionFreeMode: false, // Facebook-like distraction free mode
        }}
      />
    </div>
  );
}

export default Home;
