import { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Article from '@c/article';

import { useLoading } from '@/utils/hook';
import { formatIssue } from '@/utils/format';
import { queryArchive } from '@/utils/service';

import './index.scss';
import Loading from '@/components/loading';

function ArticleCard(): JSX.Element {
  const [issues, setIssues] = useState<Array<Issue>>([]);
  const [page] = useState(1);
  const loadingRef = useRef(false);
  const finishedRef = useRef(false);
  const loading = useLoading();

  const fetchArticles = (): void => {
    queryArchive(page)
      .then(async (data) => {
        if (page === 1) {
          await loading();
        }

        if (data.length) {
          const dataSource = data.map(formatIssue);
          setIssues([...issues, ...dataSource]);
        } else {
          finishedRef.current = true;
        }
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        loadingRef.current = false;
      });
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease',
      debounceDelay: 50,
      throttleDelay: 100,
      offset: 0,
    });
    fetchArticles();
  }, []);

  return (
    <>
      <div className='mb-8'>
        <div className='text-pixel-en font-bold text-2xl'>
          <span className='mr-4 text-blue-500'>#</span>
          Post
        </div>
      </div>
      {!issues.length ? (
        <div className='w-full flex justify-center mt-24 md:mt-36'>
          <Loading />
        </div>
      ) : (
        <div className='article-list'>
          {issues.map(({ title, description, created_at, number }) => (
            <Article
              title={title}
              description={description}
              time={created_at}
              key={number}
              num={number}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default ArticleCard;
