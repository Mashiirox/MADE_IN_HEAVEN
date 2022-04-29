import AbsoluteCentered from '@c/absolute-centered';

import './index.scss';

function PageLoading(): JSX.Element {
  return (
    <AbsoluteCentered>
      <div className='tetrominos'>
        <div className='tetromino box1' />
        <div className='tetromino box2' />
        <div className='tetromino box3' />
        <div className='tetromino box4' />
      </div>
    </AbsoluteCentered>
  );
}

export default PageLoading;
