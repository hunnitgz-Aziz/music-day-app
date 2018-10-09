import React, { Component } from 'react';
import AlbumComponent from './api.js';
import Header from './containers/header';
import ReactGA from 'react-ga';

function initializeReactGA() {
	ReactGA.initialize('UA-127143606-1');
	ReactGA.pageview('/');
}

class App extends Component {
	componentDidMount() {
		initializeReactGA();
	}
	
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
