import React from 'react';
import cn from 'classnames';
import { IUser } from '../../interfaces/IUser';
import { ListTileText } from './ListTileText';
import s from './ListTile.module.scss';

interface IProps extends React.HTMLProps<HTMLLIElement> {
  user: IUser;
  selected: boolean;
}
export const ListTile: React.FC<IProps> = props => {
  const {
    user: { name, email, photo },
    selected,
    ...rest
  } = props;

  // classnames
  const listClass = cn(s['list-tile'], { [s['list-tile--selected']]: selected });

  return (
    <li className={listClass} {...rest}>
      <div className={s['avatar']}>
        <img className={s['avatar__image']} src={photo} alt={`${name}'s avatar`} />
      </div>
      <ListTileText primary={name} secondary={email} selected={selected} />
    </li>
  );
};
