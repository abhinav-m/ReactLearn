import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
/*Contains example of updating 
lifecycle methods, and props */
class App extends Component {
  constructor() {
    super();
    this.state = {increasing: false}
  }
  update(){
    ReactDOM.render(
    <App val ={this.props.val + 1} />, 
    document.getElementById('root'))
  }

  /*This method fires when component recieves new properties.
    Here nextProps refers to as the newProps recieved by our component.
    which will be triggered by clicking on the button ,
    causing a render of the component with new props. 
    note the method itself, just sets the state in this example.*/
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps '+nextProps.val)
    this.setState( {increasing: nextProps.val > this.props.val})
  }
  //Takes in the nextProps and nextState
  //Returns true or false (Boolean)
  //NOTE: DOESNT PREVENT STATE OR PROPS FROM BEING UPDATED, SIMPLY PREVENTS RE-RENDERING.
  shouldComponentUpdate(nextProps,nextState) {
    console.log('shouldComponentUpdate props = '+nextProps.val+', state ='+nextState.increasing)
    console.log('returns ' + String(nextProps.val % 5 === 0))
    //This will cause re render every 5th click, PROPS AND STATE WILL STILL BE UPDATED.
    return nextProps.val % 5 === 0
  }

  //Takes previous props and previous state as arguments.
  //fired after component is updated.
  componentDidUpdate(prevProps,prevState){
    console.log('componentDidUpdate called')
    console.log(`prevProps: ${prevProps.val} , prevState: ${prevState.increasing}`)
  }

  render() {
    //Logs to test when the state is rendered.
    console.log('Rendering , new state:'+this.state.increasing)
    return (
      <button onClick = {this.update.bind(this)}>
      {this.props.val}
       </button>
    )
  }
}

App.defaultProps = {val: 0}

export default App;
