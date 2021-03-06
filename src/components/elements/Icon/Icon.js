import * as React from 'react';

const Icon = ({ icon, link, label, ...props }) => {
  const src = require(`./icons/icon-${icon}.svg`).default;
  const iconStyle = {
    mask: `url(${src})`,
    maskSize: 'cover',
    WebkitMask: `url(${src})`,
    WebkitMaskSize: 'cover',
  };
  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="nofollow noopener noreferrer"
        {...(label && { 'aria-label': label })}
      >
        <span style={iconStyle} {...props} />
      </a>
    );
  }
  return <span style={iconStyle} {...props} />;
};

export default Icon;
