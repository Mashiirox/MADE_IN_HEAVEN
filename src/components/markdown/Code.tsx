/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { CodeComponent } from 'react-markdown/lib/ast-to-react';
import cs from 'classnames';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

import conf from 'react-syntax-highlighter/dist/cjs/languages/prism/apacheconf';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import c from 'react-syntax-highlighter/dist/cjs/languages/prism/c';
import cpp from 'react-syntax-highlighter/dist/cjs/languages/prism/cpp';
import csharp from 'react-syntax-highlighter/dist/cjs/languages/prism/csharp';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import docker from 'react-syntax-highlighter/dist/cjs/languages/prism/docker';
import git from 'react-syntax-highlighter/dist/cjs/languages/prism/git';
import go from 'react-syntax-highlighter/dist/cjs/languages/prism/go';
import graphql from 'react-syntax-highlighter/dist/cjs/languages/prism/graphql';
import java from 'react-syntax-highlighter/dist/cjs/languages/prism/java';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json5';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import kotlin from 'react-syntax-highlighter/dist/cjs/languages/prism/kotlin';
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import rust from 'react-syntax-highlighter/dist/cjs/languages/prism/rust';
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss';
import swift from 'react-syntax-highlighter/dist/cjs/languages/prism/swift';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import yaml from 'react-syntax-highlighter/dist/cjs/languages/prism/yaml';

import './index.scss';

const lang = {
  conf,
  bash,
  c,
  cpp,
  csharp,
  css,
  docker,
  git,
  go,
  graphql,
  java,
  javascript,
  js: javascript,
  json,
  jsx,
  kotlin,
  python,
  rust,
  scss,
  swift,
  tsx,
  typescript,
  ts: typescript,
  yaml,
};
Object.entries(lang).map(([k, v]) => SyntaxHighlighter.registerLanguage(k, v));

const Code: CodeComponent = ({ className, inline, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || '');

  return !inline && match ? (
    <SyntaxHighlighter
      className='code'
      style={theme as any}
      language={match[1]}
      showLineNumbers={true}
      showInlineLineNumbers={true}
      {...props}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={cs({ 'inline-code': inline })} {...props}>
      {children}
    </code>
  );
};

export default Code;
