import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';

class App extends Component {
  render() { 
    return (
      <div className="App">
        <Banner />
        <h1> Welcome to the homepage </h1>
      </div>
    );
  }
}

export default App;
