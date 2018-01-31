import React, {Component} from 'react';
import '../stylesheets/content.css';
import { Switch, Route } from 'react-router-dom'

import { Home } from './Home';
import { Posts } from './Posts';
import Post from './Post';

class Content extends Component {
  render(){
    return(
      <div className="mainPosts">
        <Switch>
          <Route exact path = "/" component={Home}/>
          <Route path= "/posts" component={Posts} />
          // don't really want this here
          <Route path= "/post" render={()=><Post filename="january-books"/>}/>
        </Switch>
      </div>
    );
  }
}
export default Content;
