import React from 'react';
import './App.scss';
import './normalize.css';
import './ListTile.scss';

const App: React.FC = () => {
  return <View />;
};

export default App;

const View: React.FC = () => {
  return (
    <article className="panel">
      <section className="panel__squeezeable-section">
        <ul>
          {Array(20)
            .fill(0)
            .map((el, i) => (
              <li key={i} className="list-tile">
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
