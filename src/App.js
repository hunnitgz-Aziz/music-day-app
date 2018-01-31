import React, { Component } from 'react';
import AlbumComponent from './api.js';
import Carousel from './components/carousel';

class App extends Component {
  render() {
    return (
      <div className="main">
        <AlbumComponent />
      </div>
    );
  }
}

export default App;
