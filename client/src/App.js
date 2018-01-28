import React, { Component } from 'react';
import UsersContainer from './components/UsersContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Developer Network</h1>
        </header>
        <p className="App-intro">
          By Developers.  For Developers.
        </p>
        <div className='userlist'>
          <UsersContainer />
        </div>
      </div>
    );
  }
}

export default App;
