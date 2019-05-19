import React from 'react';
import './App.scss';
import './normalize.css';
import { USERS } from './user_data';
import { UserList } from './components/UserList';
import { UserForm } from './components/user-form/UserForm';
import { IUSerInputs } from './interfaces/IUserInputs';

interface IState {
  selected?: string;
  formInputs: IUSerInputs;
}
class App extends React.Component<{}, IState> {
  state: IState = {
    selected: undefined,
    formInputs: {
      name: '',
      email: '',
      phone: '',
      address: '',
      company: '',
    },
  };

  getUserInputs = (id: string): IUSerInputs | undefined => USERS.find(u => u.id === id);

  handleSelectUser = (id: string) => () => {
    const inputs = this.getUserInputs(id);
    if (!inputs) return;

    return this.setState({ selected: id, formInputs: inputs });
  };

  render() {
    return (
      <View
        onSelectUser={this.handleSelectUser}
        selected={this.state.selected}
        formInputs={this.state.formInputs}
      />
    );
  }
}

export default App;

interface IProps {
  onSelectUser: (id: string) => () => void;
  selected?: string;
  formInputs: IUSerInputs;
}
const View: React.FC<IProps> = props => {
  const { onSelectUser, selected, formInputs } = props;
  return (
    <article className="panel">
      <section className="panel__squeezeable-section">
        <UserList users={USERS} {...props} />
      </section>
      <section className="panel__form-section">{<UserForm user={formInputs} />}</section>
    </article>
  );
};
