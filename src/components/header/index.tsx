import { useWindowScroll } from 'react-use';

import Mario from '@c/mario';

import './index.scss';

function Header(): JSX.Element {
  const { y } = useWindowScroll();
  const isActive = y > 200;

  return (
    <div className='header'>
      <div>
        <div className='flex'>
          <Mario isActive={isActive} />
          <span className='header-name'>MASHIIROX</span>
        </div>
        <div className='flex justify-center items-center mt-3'>
          Follow me on
          <a className='ml-3'>
            <i className='nes-icon github' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
