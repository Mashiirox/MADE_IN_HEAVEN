import { useState, useEffect } from 'react';
import {
  ComponentPropsWithoutRef,
  ComponentType,
  ReactMarkdownProps,
} from 'react-markdown/lib/ast-to-react';
import cs from 'classnames';

import Spinner from '@c/spinner';

import { useLoading } from '@/utils/hook';

type ImageProps = ComponentPropsWithoutRef<'img'> & ReactMarkdownProps;

type ImageComponent = ComponentType<ImageProps>;

const Image: ImageComponent = ({ src = '', alt = '' }) => {
  const [loading, setLoading] = useState(true);
  const delay = useLoading();

  useEffect(() => {
    const img = new window.Image();
    img.onload = async (): Promise<void> => {
      await delay();
      setLoading(false);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      <img
        className={cs('img-zoomable m-auto fade rounded shadow-md', { hidden: loading })}
        src={src}
        alt={alt}
      />
      {loading && <Spinner />}
      {alt && <span className='block mt-2 text-center italic'>◭ {alt}</span>}
    </>
  );
};

export default Image;
