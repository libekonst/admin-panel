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
          className={`list-tile ${
            selected === user.id ? 'list-tile--selected' : 'list-tile--with-hover'
          }`}
          onClick={onSelectUser(user.id)}
          title={user.name}
        >
          <div className="list-tile__avatar">
            <img
              className="list-tile__avatar__image"
              src={user.photo}
              alt={`${user.name}'s avatar`}
            />
          </div>
          <div className="list-tile__details">
            <p
              className={`list-tile__details__name ${selected === user.id &&
                'list-tile__details__name--selected'}`}
            >
              {user.name}
            </p>
            {user.email && (
              <p
                className={`list-tile__details__email ${selected === user.id &&
                  'list-tile__details__email--selected'}`}
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
