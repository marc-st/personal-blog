import React, {Component} from 'react';
import { Switch, Route, Link, } from 'react-router-dom';

import Post from "./Post";
import bloglist from "../bloglist";

import "../stylesheets/posts.css"

const ListItem = (props) => (
  <li className="postLink">
    <Link to = {props.match.url + props.review.url} key={props.key}>
      {props.review.name}
    </Link>
  </li>
);
class List extends Component {
  render() {
    return (
      <ul className="postLinks">
        {Object.values(bloglist.book_reviews).map((review, i) =>
          <ListItem review={review} key={i} match={this.props.match} />
        )}
      </ul>
    );
  }
}
const Blog = ({match}) => (
  Object.values(bloglist.book_reviews).map((review, i) =>
    <Route path= {match.path + review.url}
      render={()=><Post filename={review.filename}/>}/>
));

export const Posts = ({match}) => (
  <div>
    <List match={match}/>
    <Blog match={match}/>
  </div>
);
