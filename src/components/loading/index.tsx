import './index.scss';

type LoadingProps = {
  className?: string;
};

function Loading({ className }: LoadingProps): JSX.Element {
  return (
    <div className={className}>
      <div className='flex absolute'>
        <div id='pikachu' />
        <div id='ash' />
      </div>
    </div>
  );
}

export default Loading;
