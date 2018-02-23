import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts};
}

//Example of a higher order component.
//Wrapping a react component inside a helper component.
//The connect component is a higher order component which communicates with the provider and manages the redux store(app level state).
export default connect(mapStateToProps)(App);
