import * as React from 'react';

const Code = ({ children }) => {
  return (
    <code className="text-code text-sm py-1 px-2 rounded-md bg-dark-dark">
      {children}
    </code>
  );
};

export default Code;
