import React, {Component} from 'react';
import '../stylesheets/navigation.css';
import { Link, } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return(
      <div className="navigation">
        <ul>
          <li><Link to ="/about"><img src={require("../images/info.svg")} alt="Info" /></Link> </li>
          <li><Link to = "/posts"> <img src={require("../images/blog.svg")} alt="Blog" /> </Link> </li>
        </ul>
      </div>
    );
  }
}
export default Navigation;
