import React from 'react';
import { USERS } from '../../user_data';
import { IUSerInputs } from '../../interfaces/IUserInputs';
import { IUser } from '../../interfaces/IUser';
import { View } from './View';

interface IState {
  selected?: string;
  users: IUser[];
}
interface IProps {
  users?: IUser[];
}
/**
 * A container component holidng the App's state.
 * Handles selecting a user and provides a save user service.
 */
class App extends React.Component<IProps, IState> {
  state: IState = {
    selected: undefined,
    users: this.props.users || USERS,
  };
  /**
   * Changes the selected user id.
   * Provides a way to select a user and render based on the selected user.
   */
  handleSelectUser = (id: string) => () => this.setState({ selected: id });

  /** Saves changes made to a user to the App's state. */
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
