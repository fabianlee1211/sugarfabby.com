/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  color: var(--color-primary);
  font-weight: inherit;
  font-size: inherit;

  :hover {
    text-decoration: underline;
  }
`;

export default ({ children, ...props }) => {
  // Header anchor links
  if (props.className && props.className.includes('anchor')) {
    return <Link {...props}>{children}</Link>;
  }

  return (
    <Link target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </Link>
  );
};
