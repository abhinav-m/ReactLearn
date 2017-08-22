import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';

/* While creating react components, reusability and composability should be kept in mind.
 Try to make components which can be reused and components which 
 can be composed of other components. */

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red:0,
     
    }

    this.update = this.update.bind(this)
  }

  update(e) {
    this.setState({
      red:ReactDOM.findDOMNode(this.refs.red.refs.inp).value
    })
  }
  render( ){
    return (
     //THUS WE CAN DEFINE THE COMPONENT HERE , and reuse it as we want.
      <div className="App">
        <NumInput ref="red" 
        min ={0}
        max ={255}
        step={1}
        type='number'
        //To coerce the value to a string as we have propTypes as string.
        val={+this.state.red}
        label="Red"
        update ={this.update} />
      </div>
    );
  }
}


/*Declaring a reusable NumInput component here
  With its props as  min max step , val, label and  type
  Using ref to refer to the node inside the wrapping div.
  We also bind onChange to this.props.update which will trigger change in the parent */
class NumInput extends React.Component {
  render() {
    let label = this.props.label !== '' ?
    <label>{this.props.label} - {this.props.val}</label> : ''
    return(
      <div>
        <input ref='inp'
        type={this.props.type}
        min={this.props.min}
        max={this.props.max}
        step={this.props.step}
        defaultValue={this.props.val}
        onChange={this.props.update} />
        {label}
      </div>
    )
  }
}



/*To improve reusability we define the proptypes this component expects,
  Note how we add update method as required using func.isRequired and  types to be one
  of passed values ie, 'number','range' as a string. */
NumInput.propTypes = {
  min:React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val:  React.PropTypes.number,
  label:  React.PropTypes.string,
  update:  React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['number','range'])
}

/* Setting default properties for the component here for 
   making it usable when they are not explicitly defined. */
 NumInput.defaultProps = {
  min:0 ,
  max:0 ,
  step: 1,
  val: 0,
  label: '',
  type: 'range'
}

export default App;
