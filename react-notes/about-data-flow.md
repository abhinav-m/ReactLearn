## The Data Flows Down

**Neither parent nor child components** can know if a certain component is stateful or stateless, and they shouldn't care whether it is defined as a function or a class.

This is why **state is often called local or encapsulated**. 

*It is not accessible to any component other than the one that owns and sets it.*

A component may choose to pass its state down as props to its child components:
```
<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
```
This also works for user-defined components:
```
<FormattedDate date={this.state.date} />
```
The FormattedDate component would receive the date in its props and **wouldn't know whether it came from the Clock's state, from the Clock's props, or was typed by hand:**
```
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
```


This is commonly called a **"top-down" or "unidirectional" data flow**
 

>Any state is always owned by some specific component, and any data or UI derived from that state can only affect components **"below"** them in the tree.

If you imagine a component tree as a waterfall of props, each component's state is like an additional water source that joins it at an arbitrary point but also flows down.

