import React, { RefObject } from 'react';
import styles from './input.module.scss';

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>{
      ref?:  RefObject<HTMLInputElement>;
    }

export const Input = ({className, ...props }: InputProps) => {
  return (
    <input className={`${styles.input} ${className}`} {...props} />
  );
};