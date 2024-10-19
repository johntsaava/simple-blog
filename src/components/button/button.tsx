import React from 'react';

import './button.styles.css';

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={['buttonRoot', className].join(' ')} {...props}>
      {children}
    </button>
  );
};
