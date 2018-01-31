import React, {Component} from 'react';
import marked from "marked";

class Post extends Component {

  constructor(props){
    super(props);
    this.state = { markdown: "" };
  }

  componentWillMount() {
    const readmePath = require("../markdown/"+this.props.filename+".md");
    fetch(readmePath)
      .then(response => {
        return response.text()
    })
    .then(text => {
      this.setState({
        markdown: marked(text)
      })
    })
  }

  render() {
    return(
      <section>
        <article dangerouslySetInnerHTML={{__html: this.state.markdown}}></article>
      </section>
    );
  }
}
export default Post;
