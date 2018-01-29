import React, { Component } from 'react';
import logo from './logo.svg';
import AlbumComponent from './api.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AlbumComponent />
      </div>
    );
  }
}

export default App;
