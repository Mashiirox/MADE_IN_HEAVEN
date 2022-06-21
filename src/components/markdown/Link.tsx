import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ComponentPropsWithoutRef,
  ComponentType,
  ReactMarkdownProps,
} from 'react-markdown/lib/ast-to-react';

type LinkProps = ComponentPropsWithoutRef<'a'> & ReactMarkdownProps;

type LinkComponent = ComponentType<LinkProps>;

const Link: LinkComponent = ({ href, children }) => {
  const navigate = useNavigate();

  const handleRedirect = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    e.stopPropagation();
    if (!href) return;
    const toUrl = new URL(href);
    const locateUrl = new URL(window.location.href);
    if (toUrl.host === locateUrl.host) {
      e.preventDefault();
      const pathArr = toUrl.pathname.split('/').filter(Boolean);
      const headPath = pathArr[0];
      switch (headPath) {
        case 'posts': {
          navigate('/posts/[number]');
          break;
        }
        default: {
          navigate(toUrl.pathname);
        }
      }
    }
  };

  return (
    <a
      className='link'
      href={href}
      onClick={handleRedirect}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  );
};

export default Link;
