import cs from 'classnames';

import './index.scss';

type MarioProps = {
  isActive: boolean;
};

function Mario({ isActive }: MarioProps): JSX.Element {
  return (
    <div className='relative w-12 h-12'>
      <div className={cs('mario', { 'mario-active': isActive })} />
    </div>
  );
}

export default Mario;
