import React from 'react';
import './ListTile.scss';
import { IUser } from '../../interfaces/IUser';

interface IProps {
  users: IUser[];
  onSelectUser: (id: string) => () => void;
  selected?: string;
}

export const UserList: React.FC<IProps> = props => {
  const { users, selected, onSelectUser } = props;

  return (
    <ul>
      {users.map(user => (
        <li
          key={user.id}
          className={
            selected === user.id
              ? 'list-tile list-tile--selected'
              : 'list-tile list-tile--with-hover'
          }
          onClick={onSelectUser(user.id)}
          title={user.name}
        >
          <div className="avatar">
            <img
              className="avatar__image"
              src={user.photo}
              alt={`${user.name}'s avatar`}
            />
          </div>
          <div className="details">
            <p
              className={
                selected === user.id
                  ? 'details__name details__name--selected'
                  : 'details__name'
              }
            >
              {user.name}
            </p>
            {user.email && (
              <p
                className={
                  selected === user.id
                    ? 'details__email details__email--selected'
                    : 'details__email'
                }
              >
                {user.email}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
