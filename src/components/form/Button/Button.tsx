import React, { ReactNode } from 'react';
import styles from './button.module.scss';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={`${styles.button}`} {...props}>
      {children}
    </button>
  );
};
