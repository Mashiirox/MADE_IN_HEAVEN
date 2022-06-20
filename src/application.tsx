import Header from '@c/header';
import ScrollUp from '@c/scroll-up';
import Routes from './routes';

function App(): JSX.Element {
  return (
    <div className='text-pixel'>
      <Header />
      <ScrollUp />
      <div className='pt-36 pb-12 max-w-4xl px-8 my-0 mx-auto'>
        <Routes />
      </div>
    </div>
  );
}

export default App;
