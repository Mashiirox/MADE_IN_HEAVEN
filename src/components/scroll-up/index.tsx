import { useWindowScroll } from 'react-use';
import cs from 'classnames';

import './index.scss';

function ScrollUp(): JSX.Element {
  const { y } = useWindowScroll();

  const handleScrollUp = (): void => {
    scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type='button'
      className={cs('back-to-top nes-btn is-error', { 'bottom-6': y > 100 })}
      onClick={handleScrollUp}
    >
      <div>&gt;</div>
    </button>
  );
}

export default ScrollUp;
