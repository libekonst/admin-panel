import React from 'react';
import './App.scss';
import './normalize.css';
import { USERS } from './user_data';
import { UserList } from './components/UserList';

interface IState {
  selected?: string;
}
class App extends React.Component<{}, IState> {
  state: IState = {
    selected: undefined,
  };
  handleSelectUser = (id: string) => () => this.setState({ selected: id });
  render() {
    return <View onSelectUser={this.handleSelectUser} selected={this.state.selected} />;
  }
}

export default App;

interface IProps {
  onSelectUser: (id: string) => () => void;
  selected?: string;
}
const View: React.FC<IProps> = props => {
  const { onSelectUser, selected } = props;
  return (
    <article className="panel">
      <section className="panel__squeezeable-section">
        <UserList users={USERS} {...props} />
      </section>
      <section className="panel__section">{selected}</section>
    </article>
  );
};
