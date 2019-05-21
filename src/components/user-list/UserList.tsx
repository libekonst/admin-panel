import React from 'react';
import { IUser } from '../../interfaces/IUser';
import { ListTile } from './ListTile';

interface IProps {
  users: IUser[];
  onSelectUser: (id: string) => () => void;
  selectedID?: string;
}

/** A stateless component that maps through and array of users an renders a list tile for each user */
export const UserList: React.FC<IProps> = props => {
  const { users, selectedID, onSelectUser } = props;

  return (
    <ul>
      {users.map(user => (
        <ListTile
          user={user}
          selected={selectedID === user.id}
          title={user.name}
          onClick={onSelectUser(user.id)}
          key={user.id}
        />
      ))}
    </ul>
  );
};
