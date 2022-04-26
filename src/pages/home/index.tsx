import { Link } from 'react-router-dom';

function Home(): JSX.Element {
  return (
    <div className='bg-red'>
      <Link to='./pornhub'>Hello World</Link>
    </div>
  );
}

export default Home;
