import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Post extends Component {
  render() {
    return (
      <ul>
        {this.props.posts.map((posts, i) => <li key={i}> {post.title} </li>)}
      </ul>
    );
  }
}

Post.propTypes = {
  posts: PropTypes.array.isRequired
};
