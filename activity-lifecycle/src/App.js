import React from 'react';


class Clock extends React.Component {
    //Class components should always call the base constructor with props.

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
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
            date: new Date()
        });
    }

    render() {
        return ( <
            div >
            <
            h1 > The time is: < /h1> <
            h2 > { this.state.date.toLocaleTimeString() } < /h2> <
            /div>
        )
    }
}

/* ORDER OF EXECUTION 
1) When <Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock component. Since Clock needs to display the current time, it initializes this.state with an object including the current time. We will later update this state.

2) React then calls the Clock component's render() method. This is how React learns what should be displayed on the screen. React then updates the DOM to match the Clock's render output.

3) When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle hook. Inside it, the Clock component asks the browser to set up a timer to call tick() once a second.

4) Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling setState() with an object containing the current time. Thanks to the setState() call, React knows the state has changed, and calls render() method again to learn what should be on the screen. This time, this.state.date in the render() method will be different, and so the render output will include the updated time. React updates the DOM accordingly.

5) If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle hook so the timer is stopped. */

export default Clock;