/* eslint-disable react/display-name */
import * as React from 'react';

export default ({ children, ...props }) => {
  // Header anchor links
  if (props.className && props.className.includes('anchor')) {
    return (
      <a className="text-primary hover:underline" {...props}>
        {children}
      </a>
    );
  }

  return (
    <a
      className="text-primary hover:underline"
      target="_blank"
      rel="noopener noreferrer"
      style={{ fontSize: 'inherit' }}
      {...props}
    >
      {children}
    </a>
  );
};
