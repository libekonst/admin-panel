import React from 'react';
import s from './Input.module.scss';

interface IProps {
  label?: string;
}

type Props = IProps & React.HTMLProps<HTMLInputElement>;

export const Input: React.FC<Props> = props => {
  const { label, ...rest } = props;
  return (
    <>
      {label && (
        <label className={s.label} htmlFor={props.name}>
          {label}
        </label>
      )}
      <input className={s.input} {...rest} />
    </>
  );
};
