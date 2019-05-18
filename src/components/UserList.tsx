import React from 'react';
import '../ListTile.scss';


interface IUser {
  // Properties useful to the list
  id: string;
  name: string;
  email?: string;

  // Anything else that is not of interest to the list
  [key: string]: any;
}

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
        >
          <div className="list-tile__avatar">hello</div>
          <div className="list-tile__details">{user.name}</div>
        </li>
      ))}
    </ul>
  );
};
