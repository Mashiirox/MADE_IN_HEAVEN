import './index.scss';

type ArticleProps = {
  title: string;
  description: string;
  time: string;
};

function Article({ title, description, time }: ArticleProps): JSX.Element {
  return (
    <div
      className='is-centered is-rounded nes-container with-title nes-pointer font-bold article-card'
      data-aos='fade-up'
    >
      <p className='title article-title'>{title}</p>
      <p>{description}</p>
      <p className='absolute px-2 bg-white right-4 -bottom-4'>{time}</p>
    </div>
  );
}

export default Article;
