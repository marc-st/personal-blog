import React, {Component} from 'react';
import '../stylesheets/sidebar.css';
import { Link, } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return(
      <div className="sidebar">
        <ul>
          <li ><Link to ="/"> Home </Link> </li>
          <li><Link to = "/posts"> Blog Posts </Link> </li>
        </ul>
      </div>
    );
  }
}
export default Sidebar;
