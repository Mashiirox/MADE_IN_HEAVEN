import Header from '@c/header';
import ScrollUp from '@c/scroll-up';
import Routes from './routes';

import './application.scss';

function App(): JSX.Element {
  return (
    <div className='application'>
      <Header />
      <ScrollUp />
      <div className='page'>
        <Routes />
      </div>
    </div>
  );
}

export default App;
