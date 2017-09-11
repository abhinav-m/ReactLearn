import React, {Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import {fetchPost} from '../actions'
import {deletePost} from '../actions'

class PostsShow extends Component {

  componentDidMount() {
    //All the wildcards can be accessed using the param object, and the wildcard(id)
    const { id }  =  this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id }  =  this.props.match.params;
    //can also be this.props.post.id but that can be undefined (when the data has not yet loaded.)
    this.props.deletePost(id, () => {
      this.props.history.push('/')
    });
  }



  render() {
    const { post } = this.props;
    if(!post) {
      return <div>Loading..</div>;
    }
    return(
      <div>
      <Link to='/' className='btn btn-primary'>Back to Index </Link>
      <button className='btn btn-danger pull-xs-right'
              onClick = {this.onDeleteClick.bind(this)}>
      Delete Post
      </button>

      <h3>{post.title}</h3>
      <h6>Categories: {post.categories}</h6>
      <p>{post.content}</p>
      </div>
    );
  }
}

//First argument is application level state, ownProps -> props headed to current component. (which will have the id reference)
function mapStateToProps ( { posts },ownProps ) {
return {post : posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps,{fetchPost,deletePost})(PostsShow);
