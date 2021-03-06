import { cleanStyles } from '@lib/utils/utils';
import * as React from 'react';

const baseStyle = 'rounded-md text-sm p-2';

const primaryStyle =
  'border border-primary bg-primary hover:bg-primary-dark hover:border-primary-dark text-white';

const secondaryStyle =
  'border border-primary text-primary hover:bg-primary-dark hover:border-primary-dark hover:text-white';

const disabledStyle = 'pointer-events-none opacity-50';

export const PrimaryButton = ({
  children,
  disabled,
  link,
  className,
  target = '_blank',
  ...props
}) => {
  const styles = `
  ${baseStyle} ${primaryStyle}
  ${className ? className : ''}
  ${disabled ? disabledStyle : ''}`;

  if (link) {
    return (
      <a
        href={link}
        target={target}
        rel="nofollow noopener noreferrer"
        className="w-full"
      >
        <button className={cleanStyles(styles)} {...props}>
          {children}
        </button>
      </a>
    );
  }

  return (
    <button className={cleanStyles(styles)} {...props}>
      {children}
    </button>
  );
};

export const SecondaryButton = ({
  children,
  disabled,
  link,
  target = '_blank',
  className,
  ...props
}) => {
  const styles = `
  ${baseStyle} ${secondaryStyle}
  ${className ? className : ''}
  ${disabled ? disabledStyle : ''}`;

  if (link) {
    return (
      <a
        href={link}
        target={target}
        rel="nofollow noopener noreferrer"
        className="w-full"
      >
        <button className={cleanStyles(styles)} {...props}>
          {children}
        </button>
      </a>
    );
  }

  return (
    <button className={cleanStyles(styles)} {...props}>
      {children}
    </button>
  );
};
