import './index.less';

function Homepage(): JSX.Element {
  return (
    <div className='font-es'>
      <div className='home-title font-es pt-12 mb-4 flex justify-center'>
        Embrace the front end
      </div>
      <div className='home-author flex justify-center text-center'>
        BY
        <br />
        MASHIIROX
      </div>
      <div className='home-description text-4xl'>
        This website is used to show my progress in fontend
      </div>
    </div>
  );
}

export default Homepage;
