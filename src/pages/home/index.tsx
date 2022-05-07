import { Link } from 'react-router-dom';
import Icon from '@c/icon';

function Home(): JSX.Element {
  return (
    <div className='bg-red'>
      <Link to='./pornhub'>Hello World</Link>
      <Icon name='camera' color='red' />
    </div>
  );
}

export default Home;
