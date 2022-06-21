import React, { useLayoutEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Zooming from 'zooming';
import cs from 'classnames';

import Heading from './Heading';
import Link from './Link';
import Image from './Image';
import Code from './Code';

import './index.scss';

type MarkdownProps = {
  className?: string;
  content: string;
};

const zooming = new Zooming({
  bgColor: 'var(--black)',
  enableGrab: false,
});

const Markdown: React.FC<MarkdownProps> = ({ className, content }) => {
  useLayoutEffect(() => {
    zooming.listen('.img-zoomable');
  }, []);

  return (
    <div className='text-justify leading-relaxed'>
      <ReactMarkdown
        className={cs('markdown', className)}
        remarkPlugins={[remarkGfm]}
        components={{
          h1: Heading,
          h2: Heading,
          h3: Heading,
          h4: Heading,
          h5: Heading,
          h6: Heading,
          a: Link,
          img: Image,
          code: Code,
          pre: Code,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;
