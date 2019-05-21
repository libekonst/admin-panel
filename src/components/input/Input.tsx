import React from 'react';
import s from './Input.module.scss';

interface IProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
}

/**
 * A function component that renders a styled <input /> element
 * and an accompanying <label />, if the label prop is not omitted.
 */
export const Input: React.FC<IProps> = props => {
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
