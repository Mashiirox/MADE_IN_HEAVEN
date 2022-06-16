import { useWindowScroll } from 'react-use';

function ScrollUp(): JSX.Element {
  const { y } = useWindowScroll();

  const handleScrollUp = (): void => {
    scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type='button'
      className={`text-pixel-en fixed right-8  z-10 shadow-2xl transition-all duration-300 nes-btn is-error ${
        y > 100 ? 'bottom-6' : '-bottom-16'
      }`}
      onClick={handleScrollUp}
    >
      <div className='-rotate-90'>&gt;</div>
    </button>
  );
}

export default ScrollUp;
