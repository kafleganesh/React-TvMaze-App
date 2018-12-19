import React, { Component } from 'react';
import './App.css';
import HomePage from './components/Home'
import Program from './components/program'

class App extends Component {
  render() {
    return (
      <div className="App">
      <HomePage/>
      {/* <Program/> */}
        
      </div>
    );
  }
}

export default App;
