import React, { Component } from 'react';
import '../stylesheets/App.css';

import {Header} from './Shared';
import Navigation from './Navigation';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-content">
          <Navigation />
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
