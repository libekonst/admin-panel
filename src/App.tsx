import React from 'react';
import './App.scss';
import './normalize.css';
import { USERS } from './user_data';
import { UserList } from './components/UserList';
import { UserForm } from './components/user-form';
import { IUSerInputs } from './interfaces/IUserInputs';
import { IUser } from './interfaces/IUser';

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

interface IProps {
  users: IUser[];
  selected?: string;
  onSelectUser: (id: string) => () => void;
  onSave: (newData: IUSerInputs) => void;
}
const View: React.FC<IProps> = props => {
  const { onSave, users, selected, onSelectUser } = props;

  return (
    <article className="panel">
      <section className="panel__squeezeable-section">
        <UserList onSelectUser={onSelectUser} users={users} selected={selected} />
      </section>
      <section className="panel__form-section">
        <UserForm user={users.find(u => u.id === selected)} onSave={onSave} />
      </section>
    </article>
  );
};
