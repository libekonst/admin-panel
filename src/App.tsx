import React from 'react';
import './App.scss';
import './normalize.css';
import { USERS } from './user_data';
import { UserList } from './components/UserList';
import { UserForm } from './components/user-form';
import { IUSerInputs } from './interfaces/IUserInputs';

interface IState {
  selected?: string;
}
class App extends React.Component<{}, IState> {
  state: IState = {
    selected: undefined,
  };

  handleSelectUser = (id: string) => () => this.setState({ selected: id });

  getUserInputs = (): IUSerInputs => {
    const user = USERS.find(u => u.id === this.state.selected);
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
        onSelectUser={this.handleSelectUser}
        selected={this.state.selected}
        getUserInputs={this.getUserInputs}
      />
    );
  }
}

export default App;

interface IProps {
  onSelectUser: (id: string) => () => void;
  selected?: string;
  getUserInputs: () => IUSerInputs;
}
const View: React.FC<IProps> = props => {
  return (
    <article className="panel">
      <section className="panel__squeezeable-section">
        <UserList users={USERS} {...props} />
      </section>
      <section className="panel__form-section">
        {<UserForm inputs={props.getUserInputs()} />}
      </section>
    </article>
  );
};
