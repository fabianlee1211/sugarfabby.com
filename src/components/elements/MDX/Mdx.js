/* eslint-disable react/display-name */
import * as React from 'react';
import Blockquote from './Blockquote';
import Code from './Code';
import Link from './Link';

export default {
  h1: (props) => <h1 className="text-5xl font-bold mb-8 mt-12" {...props} />,
  h2: (props) => <h2 className="text-4xl font-bold mb-7 mt-11" {...props} />,
  h3: (props) => <h3 className="text-3xl font-bold mb-6 mt-10" {...props} />,
  h4: (props) => <h4 className="text-2xl font-bold mb-5 mt-9" {...props} />,
  h5: (props) => <h5 className="text-xl font-bold mb-4 mt-8" {...props} />,
  h6: (props) => <h6 className="text-lg font-bold mb-3 mt-7" {...props} />,
  p: (props) => <p className="mb-8 leading-7" {...props} />,
  a: (props) => <Link {...props} />,
  ul: (props) => <ul className="list-disc pl-4 mb-8" {...props} />,
  li: (props) => <li className="leading-7 mb-3 pl-1" {...props} />,
  ol: (props) => <ol {...props} />,
  inlineCode: (props) => <Code {...props} />,
  blockquote: (props) => <Blockquote {...props} />,
};
