import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
   <Parent>
   <div className='childA'></div>
   </Parent>
    );
  }
}

class Parent extends React.Component {
  render() {
    /*Example map call when we expect this.props.children to be an array.
    this.props.children.map( v=> v)
    This will work when their is more than one child in this.props.children.
    If there is one child , we cant use map. To solve this, we use
    React.children which has many utility functions to use against react components.
    console.log(this.props.children) */

    /* The map function takes two arguments first what children do you want to perform 
     the mapping against and second the mapping function.
     let items = React.Children.map(this.props,children, child => child )
     Another way to do this is:
     let items = React.Children.toArray(this.props.children)
     Foreach example: (same as map)
     React.Children.forEach( this.props.children,child => console.log(child.props.className))
     Only function returns child if theres only ONE child in the component,
     otherwise throws error. */
     let items = React.Children.only(this.props.children)
    console.log(items)
    return null;
  }
}
export default App;
