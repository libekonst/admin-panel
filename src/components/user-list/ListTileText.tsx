import React from 'react';
import cn from 'classnames';
import s from './ListTileText.module.scss';

interface IProps {
  primary: string;
  secondary?: string;
  selected?: boolean;
}

export const ListTileText: React.FC<IProps> = props => {
  const { primary, secondary, selected } = props;

  // classnames
  const primaryClass = cn(s['primary'], { [s['primary--selected']]: selected });
  const secondaryClass = cn(s['secondary'], { [s['secondary--selected']]: selected });

  return (
    <div className={s.details}>
      <p className={primaryClass}>{primary}</p>
      {secondary && <p className={secondaryClass}>{secondary}</p>}
    </div>
  );
};
