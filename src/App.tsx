import React from 'react';
import './App.scss';
import './normalize.css';
import './ListTile.scss';

class App extends React.Component {
  state = {
    selected: undefined,
  };
  handleSelectUser = (id: number) => () => this.setState({ selected: id });
  render() {
    return <View onSelectUser={this.handleSelectUser} selected={this.state.selected} />;
  }
}

export default App;

interface IProps {
  onSelectUser: (id: number) => () => void;
  selected?: number;
}
const View: React.FC<IProps> = props => {
  const { onSelectUser, selected } = props;
  return (
    <article className="panel">
      <section className="panel__squeezeable-section">
        <ul>
          {Array(20)
            .fill(0)
            .map((el, i) => (
              <li
                key={i}
                className={`list-tile list-tile--${selected === i ? 'selected' : 'with-hover'}`}
                onClick={onSelectUser(i)}
              >
                <div className="list-tile__avatar">hello</div>
                <div className="list-tile__details">{i}</div>
              </li>
            ))}
        </ul>
      </section>
      <section className="panel__section">hello from right</section>
    </article>
  );
};
