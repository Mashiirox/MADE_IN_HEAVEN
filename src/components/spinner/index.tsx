import Icon from '@c/icon';

import './index.scss';

function Spinner(): JSX.Element {
  return (
    <div className='flex justify-center'>
      <Icon name='coin' size={32} className='animate-bounce mr-4' />
      <Icon name='coin' size={32} className='reverse-coin' />
      <Icon name='coin' size={32} className='animate-bounce' />
    </div>
  );
}

export default Spinner;
