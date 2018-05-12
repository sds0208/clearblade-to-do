import * as React from 'react';
import './App.css';
import ToDo from './components/ToDo';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sarah's To-Do App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        < ToDo />
      </div>
    );
  }
}

export default App;
