import { useNavigate } from 'react-router-dom';
import { useWindowScroll } from 'react-use';
import cs from 'classnames';

import Mario from '@c/mario';

import './index.scss';

function Header(): JSX.Element {
  const navigate = useNavigate();
  const { y } = useWindowScroll();

  const isActive = y < 100;

  const handleClick = (): void => {
    navigate('/');
  };

  return (
    <div className={cs('header transition-all', { 'py-4': isActive })}>
      <div className='flex items-center'>
        <Mario isActive={isActive} />
        <div className='flex flex-col ml-3'>
          <div className='header-name' onClick={handleClick}>
            MASHIIROX
          </div>
          <div
            className={cs('flex justify-center items-center mt-1 text-xs md:text-base', {
              hidden: !isActive,
            })}
          >
            Follow me on
            <a className='ml-4' href='https://github.com/Mashiirox' target='_blank'>
              <i className='nes-icon github' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
