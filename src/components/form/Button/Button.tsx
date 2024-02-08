import React, { ReactNode } from 'react';
import styles from './button.module.scss';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  );
};
