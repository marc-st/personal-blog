import React, { Component } from 'react';
import '../stylesheets/App.css';

import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-content">
          <Sidebar />
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
