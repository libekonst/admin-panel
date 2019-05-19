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

  getUserInputs = (): IUSerInputs => {
    const user = this.state.users.find(u => u.id === this.state.selected);
    if (!user)
      return {
        name: '',
        email: '',
        phone: '',
        address: '',
        company: '',
      };

    return {
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      company: user.company,
    };
  };

  render() {
    return (
      <View
        users={this.state.users}
        onSelectUser={this.handleSelectUser}
        selected={this.state.selected}
        getUserInputs={this.getUserInputs}
        onSave={this.handleSave}
      />
    );
  }
}

export default App;

interface IProps {
  onSelectUser: (id: string) => () => void;
  selected?: string;
  getUserInputs: () => IUSerInputs;
  users: IUser[];
  onSave: (newData: IUSerInputs) => void;
}
const View: React.FC<IProps> = props => {
  return (
    <article className="panel">
      <section className="panel__squeezeable-section">
        <UserList users={props.users} {...props} />
      </section>
      <section className="panel__form-section">
        {<UserForm inputs={props.getUserInputs()} onSave={props.onSave} />}
      </section>
    </article>
  );
};
