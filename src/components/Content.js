import React, {Component} from 'react';
import '../stylesheets/content.css';
import { Switch, Route } from 'react-router-dom'

import { Home } from './Home';
import { Posts } from './Posts';

class Content extends Component {
  render(){
    return(
      <div className="mainPosts">
        <Switch>
          <Route exact path = "/about" component={Home}/>
          <Route path= "/posts" component={Posts} />
        </Switch>
      </div>
    );
  }
}
export default Content;
