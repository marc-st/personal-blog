import React, {Component} from 'react';
import logo from '../logo.svg';
import '../stylesheets/header.css';

class Header extends Component {
  render(){
    return (
      <header className="header">
        <h1 style={{marginTop:0}} className="App-title">Marc Stevens</h1>
      </header>
    );
  }
}
export default Header;
