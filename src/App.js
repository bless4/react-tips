import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state =  {
    person: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 25},
      {name: 'Marry', age: 29}
    ]
   }
  render() {
    return (
      <div className="App">
        <h1>Hey I am ReactApp</h1>
        <p>This really working! JSX uses only one root element</p>
        <button>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} />
        <Person name={this.state.person[1].name} age={this.state.person[1].age} />
        <Person name={this.state.person[2].name} age={this.state.person[2].age} />
      </div>
    );
  }
}

export default App;
