import React from 'react';
import ReactDOM from 'react-dom';

/*Refs are a way to 
reference a DOM node 
or an instance of a component 
in your application. */

class App extends React.Component {
    constructor() {
        super();
        this.state = {a:'',b:''}
    }
    
    update(e) {
        this.setState({
        /*  a:this.refs.a.value,
            b:this.refs.b.value,
            When we use refs like this,
            it returns the node.
            Thus we are referencing the node directly.

            a:this.a.value, <- when we are referencing a node.
            a:ReactDOM.findDOMNode(this.a).value, //here we are finding the dom node from the component and then using it's value.
            This wont work when the component wraps the node we want to access in another DOM node.
            To overcome this,
            */
            a:this.a.refs.input.value, //Now this will use the ref in our App component to return it's component ,
                                       //which has its own ref and points to the components input node.
            b:this.refs.b.value,
        })
    }
    
    render() {
        return(
        <div>
        <Input
        /* <input>  
          type="text" 
          ref="a" we can use refs like this to assign a reference to the node directly
        // or use a callback as :*/
     //   ref= { node => this.a = node} // this.a will now refer to the node, and this.a.value will be its value, since the node is assigned to this.a in callback.
       ref ={ component => this.a = component} //Same case here now, ref refers to the component instead of the node. therefore this.a = component in this case
        update={this.update.bind(this)}
        /> {this.state.a}
        <hr/>
             <input
        type="text"
        //  ref="b"
        ref ="b"
        onChange={this.update.bind(this)}
        /> {this.state.b}
        </div>
        ) 
    
    }
}

class Input extends React.Component {
    render() {
        return (
            <div>
            <input type ="text" ref="input" onChange ={this.props.update}></input>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('app'))