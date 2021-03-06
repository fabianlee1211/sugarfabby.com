import * as React from 'react';

const defaultStyle = 'container mx-auto px-4 lg:px-24';
const blogStyle = 'container mx-auto px-4 lg:px-8';

const Container = ({ children, className, outerClassName, isBlog = false }) => (
  <section
    className={
      outerClassName ? `bg-background ${outerClassName}` : `bg-background`
    }
  >
    <div
      className={
        className
          ? `${isBlog ? blogStyle : defaultStyle} ${className}`
          : `${isBlog ? blogStyle : defaultStyle}`
      }
    >
      {children}
    </div>
  </section>
);

export default Container;
