import React from 'react';
import { USERS } from '../../user_data';
import { IUSerInputs } from '../../interfaces/IUserInputs';
import { IUser } from '../../interfaces/IUser';
import { View } from './View';

interface IState {
  selected?: string;
  users: IUser[];
}
class App extends React.Component<{}, IState> {
  state: IState = {
    selected: undefined,
    users: USERS,
  };

  handleSelectUser = (id: string) => () => this.setState({ selected: id });

  handleSave = (newData: IUSerInputs) => {
    this.setState(prev => ({
      users: prev.users.map(user =>
        user.id === prev.selected ? { ...user, ...newData } : user,
      ),
    }));
  };

  render() {
    return (
      <View
        users={this.state.users}
        onSelectUser={this.handleSelectUser}
        selected={this.state.selected}
        onSave={this.handleSave}
      />
    );
  }
}

export default App;
