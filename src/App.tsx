import * as React from 'react';
import './App.css';
import ToDo from './components/ToDo';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sarah's To-Do App</h1>
        </header>
        < ToDo />
      </div>
    );
  }
}

export default App;
