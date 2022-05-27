import './index.scss';

function PageLoading(): JSX.Element {
  return (
    <div className='windows_xp'>
      <div className='windows_xp-logo'>
        <p className='windows_xp-top'>Microsoft</p>
        <p className='windows_xp-mid'>
          Windows<span>XP</span>
        </p>
        <p className='windows_xp-bottom'>Professional</p>
      </div>
      <div className='windows_xp-container'>
        <div className='windows_xp-box' />
        <div className='windows_xp-box' />
        <div className='windows_xp-box' />
      </div>
    </div>
  );
}

export default PageLoading;
