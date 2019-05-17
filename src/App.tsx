import React from 'react';
import './App.css';
import './normalize.css';

const App: React.FC = () => {
  return <View />;
};

export default App;

const View: React.FC = () => {
  return (
    <article className="panel">
      <section className="panel__left">
        <ul>
          {Array(20)
            .fill(0)
            .map((el, i) => (
              <li key={i} className="list-item">
                hello {i}
              </li>
            ))}
        </ul>
      </section>
      <section className="panel__right">hello from right</section>
    </article>
  );
};
