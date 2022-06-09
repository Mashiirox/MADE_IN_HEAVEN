import cs from 'classnames';

import './index.scss';

type MarioProps = {
  isActive: boolean;
  className?: string;
};

function Mario({ isActive, className }: MarioProps): JSX.Element {
  return (
    <div className={cs('relative w-12 h-12', className)}>
      <div className={cs('mario', { 'mario-active': isActive })} />
    </div>
  );
}

export default Mario;
