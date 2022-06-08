import { useWindowScroll } from 'react-use';
import cs from 'classnames';

import './index.scss';

function BackToTop(): JSX.Element {
  const { y } = useWindowScroll();

  return (
    <button type='button' className={cs('back-to-top nes-btn is-error', { 'bottom-6': y > 100 })}>
      <div>&gt;</div>
    </button>
  );
}

export default BackToTop;
