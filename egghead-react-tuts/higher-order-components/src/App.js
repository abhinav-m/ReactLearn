import React, { Component } from 'react';

import './App.css';

// Purpose : Higher order components are used to share common functionality 
// between multiple components.
// Function: Takes in a component and returns a new component.
// Uses an anonymous class , similar to function expression
const HOC = (InnerComponent) => class extends React.Component {
  constructor() {
    super();
    this.state = {count: 0}
  }

  update() {
    this.setState({count: this.state.count + 1})
  }

  componentWillMount() {
    console.log('HOC mounts '+ this.state.count);
  }
  //The above message prints twice, for both the components in App.
  render(){
    return(
      <InnerComponent
      {...this.props}
      {...this.state}
      update = {this.update.bind(this)}
      />
    )
  }
}

class App extends Component {
  render() {
    return (
      <div >
        <Button> button </Button>
        <hr/>
        <LabelHOC>label</LabelHOC>
      </div>
    );
  }
}

//Functional component, takes props as argument and returns a value.
const Button = HOC((props) => <button onClick={props.update}>{props.children} - {props.count}</button>)

//Class component.
class Label extends React.Component {
  //Will print once, when label mounts.
  componentWillMount() {
    console.log('label will mount')
  }

  render(){
    return(
    <label onMouseMove={this.props.update}>{this.props.children} {this.props.count}</label>)
  }
}

const LabelHOC = HOC(Label);

/*
1 Button component is passed 'button' as a prop
2 This is a higher order component , thus props.children will refer to the value 'button'
3 The HOC itself has it's state passed to the inner component as a prop thus it renders the button with that state, also the label.
*/
export default App;
