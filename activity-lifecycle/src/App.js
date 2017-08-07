import React from 'react';


class Clock extends React.Component {
//Class components should always call the base constructor with props.

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }


  //These methods are called lifecycle hooks
  //The componentDidMount() hook runs after the component output has been rendered to the DOM. This is a good place to set up a timer:
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
 /*While this.props is set up by React itself and this.state has a special meaning,
  you are free to add additional fields to the class manually if you need to store something that is not used for the visual output.*/
  //IMPORTANT: If you don't use something in render(), it shouldn't be in the state.
  componentWillUnmount() {
  clearInterval(this.timerID);
  }
  
  tick() {
    this.setState({
      date:new Date()
    });
  }

 render() {
    return (
     <div>
      <h1>The time is :</h1>
      <h2>{this.state.date.toLocaleTimeString()}</h2>
    </div>
          )
  }
}

export default Clock;