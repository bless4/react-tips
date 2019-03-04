import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hey I am ReactApp</h1>
        <p>This really working! JSX uses only one root element</p>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="25"/>
        <Person name="Marry" age="29"/>
      </div>
    );
  }
}

export default App;
