import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Comment from '@c/comment';
import Loading from '@c/loading';
import Markdown from '@c/markdown';

import { queryIssue } from '@/utils/service';
import { useLoading } from '@/utils/hook';
import { formatIssue } from '@/utils/format';

function Post(): JSX.Element {
  const { id = '' } = useParams();
  const delay = useLoading();
  const [loading, setLoading] = useState(true);
  const [issue, setIssue] = useState<Issue>();

  const handleQuery = (): void => {
    setLoading(true);
    queryIssue(id)
      .then(async (res) => {
        await delay();
        const data = formatIssue(res);
        setIssue(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    handleQuery();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading className='w-full flex justify-center mt-24 md:mt-36' />
      ) : (
        <>
          <div className='post article-card is-centered is-rounded nes-container with-title font-bold'>
            <p className='title article-title'>{issue?.title}</p>
            <Markdown content={issue?.body ?? ''} />
            <p className='absolute px-2 bg-white right-4 -bottom-4'>{issue?.created_at}</p>
          </div>
          <Comment id={id} />
        </>
      )}
    </div>
  );
}

export default Post;
