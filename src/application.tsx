import Header from '@c/header';
import BackToTop from '@c/back-to-top';
import Routes from './routes';

import './application.scss';

function App(): JSX.Element {
  return (
    <div className='application'>
      <Header />
      <BackToTop />
      <div className='page'>
        <Routes />
      </div>
    </div>
  );
}

export default App;
