import React from 'react';
import { Switch, Route, Link, } from 'react-router-dom';

import Post from "./Post";
import bloglist from "../bloglist";

import "../stylesheets/posts.css"

export const Posts = ({match}) => (
  Object.values(bloglist.book_reviews).map((review, i)=>
    <ul className="postLinks">
      <li className="postLink">
        <Link to = {match.url + review.url} key={i}>
          {review.name}
        </Link>
      </li>
      <hr />
      <div className="blogpost">
        <Route path= {match.path + review.url}
          render={()=><Post filename={review.filename}/>}/>
      </div>
    </ul>
));
