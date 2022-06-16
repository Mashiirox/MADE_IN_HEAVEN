import { useNavigate } from 'react-router-dom';

import './index.scss';

type ArticleProps = {
  title: string;
  description: string;
  time: string;
  num: number;
};

function Article({ title, description, time, num }: ArticleProps): JSX.Element {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate(`/post/${num}`);
  };

  return (
    <div
      className='article-card is-centered is-rounded nes-container with-title nes-pointer font-bold'
      data-aos='fade-up'
      onClick={handleClick}
    >
      <p className='title article-title'>{title}</p>
      <p>{description}</p>
      <p className='absolute px-2 bg-white right-4 -bottom-4'>{time}</p>
    </div>
  );
}

export default Article;
