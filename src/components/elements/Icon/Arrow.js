import arrow from '@assets/images/next.svg';
import { cleanStyles } from '@lib/utils/utils';
import * as React from 'react';

const baseStyle = 'w-5 h-5 block bg-black dark:bg-white';
const leftStyle = 'transform rotate-180 mr-2';
const rightStyle = 'ml-2';

const Arrow = ({ type }) => {
  const styles = `${baseStyle} ${type === 'left' ? leftStyle : rightStyle}`;

  return (
    <span
      type={type}
      className={cleanStyles(styles)}
      style={{
        mask: `url(${arrow})`,
        maskSize: 'cover',
        WebkitMask: `url(${arrow})`,
        WebkitMaskSize: 'cover',
      }}
    />
  );
};

export default Arrow;
