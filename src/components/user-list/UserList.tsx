import React from 'react';
import { IUser } from '../../interfaces/IUser';
import { ListTile } from './ListTile';

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
        <ListTile
          user={user}
          selected={selected === user.id}
          title={user.name}
          onClick={onSelectUser(user.id)}
          key={user.id}
        />
      ))}
    </ul>
  );
};
