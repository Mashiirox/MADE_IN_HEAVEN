import Side from '@c/side';
import Routes from './routes';

import './application.scss';

function App(): JSX.Element {
  return (
    <div className='application'>
      <Side />
      <div className='page'>
        <Routes />
      </div>
    </div>
  );
}

export default App;
