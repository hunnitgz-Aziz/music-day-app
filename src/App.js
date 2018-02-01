import React, { Component } from 'react';
import AlbumComponent from './api.js';
import Header from './containers/header';

class App extends Component {
  render() {
    return (
      <div className="main">
      	<Header />
        <AlbumComponent />
      </div>
    );
  }
}

export default App;
