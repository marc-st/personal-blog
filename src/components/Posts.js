import React from 'react';
import { Switch, Route, Link, } from 'react-router-dom';

import Post from "./Post";
import bloglist from "../bloglist";

export const Posts = ({match}) => (
  <div>
    <div className="postLinks">
      <Link to = {match.url + bloglist.book_reviews.jan.url}> {bloglist.book_reviews.jan.name} </Link>
    </div>
    <div>
      <Switch>
        <Route path= {match.path + bloglist.book_reviews.jan.url}
          render={()=><Post filename={bloglist.book_reviews.jan.filename}/>}/>
      </Switch>
    </div>
  </div>
);
