# JSX

**JSX** is a syntax extension to Javascript. 

**JSX** is a preprocessor step that adds **XML** syntax to JavaScript. 

You can definitely use React without **JSX** but **JSX** makes React a lot more elegant.

Just like **XML**, JSX tags have a tag name, attributes, and children. 

If an attribute value is enclosed in quotes, the value is a string. Otherwise, **wrap the value in braces and the value is the enclosed JavaScript expression.**

JSX produces **React 'Elements'**


Example:

```

<div className='xyz'>
<div className='Hello'>text</div>
</div>
```
gets transpiled to:
```
'use strict';

React.createElement(
  'div',
  { className: 'xyz' },
  React.createElement(
    'div',
    { className: 'Hello' },
    'text'
  )
);
```


## Embedding expressions in JSX

**Javascript expressions** can be embedded in JSX

From **MDN**:

>An expression is any valid unit of code that resolves to a value.


Every syntactically valid expression resolves to some value but conceptually, there are two types of expressions:  **with side effects** (for example: those that assign value to a variable) and those that in some sense evaluate and therefore **resolve to a value**.

The expression `x = 7` is an example of the first type. This expression uses the `=` operator to assign the value seven to the variable `x`. 

The expression itself evaluates to **seven**.

The code `3 + 4` is an example of the **second expression type**. This expression uses the `+` operator to add three and four together **without assigning the result, seven, to a variable**.

More on expressions  [here]( :[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions](Expressions))


For example, `2 + 2`, `user.firstName`, and `formatName(user)` are all valid expressions:

```
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

We split **JSX** over multiple lines for readability.

 While it isn't required, when doing this, we also recommend wrapping it in parentheses to avoid the pitfalls of  **automatic semicolon insertion **.
 
 
### JSX is an expression too

After compilation, **JSX** expressions become regular JavaScript objects.

This means that you can use **JSX** inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:

```
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```
## JSX Represents Objects

Babel compiles **JSX** down to `React.createElement()` calls.

These two examples are identical:
```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```
`React.createElement()` performs a few checks to help you write bug-free code but essentially it creates an object like this:

```
// Note: this structure is simplified
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world'
  }
};
```
These objects are called `"React elements"`. You can think of them as descriptions of what you want to see on the screen. `React` reads these objects and uses them to construct the **DOM**  and keep it up to date.

## Specifying the React Element type

The first part of a **JSX**   tag determines the **type**   of the React element.

**Capitalized types**   indicate that the **JSX**   tag is referring to a React component. 
These tags get compiled into a direct reference to the named variable, so if you use the JSX `<Foo />` expression, Foo must be in scope.

### **React Must Be in Scope**  
>Since **JSX**  compiles into calls to `React.createElement`, the **React library must also always be in scope from your JSX code**.


For example, both of the imports are necessary in this code, even though `React` and `CustomButton` are not directly referenced from JavaScript:

```js
import React from 'react';
import CustomButton from './CustomButton';

function WarningButton() {
  // return React.createElement(CustomButton, {color: 'red'}, null);
  return <CustomButton color="red" />;
}
```

**If you don't use a JavaScript bundler and loaded React from a `<script>` tag, it is already in scope as the React global**.

### Using Dot Notation for JSX Type

You can also refer to a React component using dot-notation from within **JSX**.

 This is convenient if you have a single module that exports many React components. 
 
 For example, if `MyComponents.DatePicker` is a component, you can use it directly from  **JSX** with:

```
import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}
```

### User-Defined Components Must Be Capitalized

When an element type **starts with a lowercase letter**, it refers to a **built-in component** like `<div>` or `<span>` and **results in a string `'div'` or `'span'` passed to`React.createElement`**. 

Types that start with a capital letter like `<Foo />` compile to `React.createElement(Foo)` and correspond to a component defined or imported in your JavaScript file.

We recommend naming components with a capital letter. If you do have a component that starts with a lowercase letter, assign it to a capitalized variable before using it in **JSX**.

For example, this code will not run as expected:

```
import React from 'react';

// Wrong! This is a component and should have been capitalized:
function hello(props) {
  // Correct! This use of <div> is legitimate because div is a valid HTML tag:
  return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
  // Wrong! React thinks <hello /> is an HTML tag because it's not capitalized:
  return <hello toWhat="World" />;
}
```
To fix this, we will rename `hello` to `Hello` and use `<Hello />` when referring to it:

```
import React from 'react';

// Correct! This is a component and should be capitalized:
function Hello(props) {
  // Correct! This use of <div> is legitimate because div is a valid HTML tag:
  return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
  // Correct! React knows <Hello /> is a component because it's capitalized.
  return <Hello toWhat="World" />;
}
```

### Choosing the Type at Runtime

You **cannot use a general expression as the React element type**.
 
If you do want to use a general expression to indicate the type of the element, just assign it to a capitalized variable first. 

This often comes up when you want to render a different component based on a prop:

```
import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // Wrong! JSX type can't be an expression.
  return <components[props.storyType] story={props.story} />;
}
```

To fix this, we will assign the type to a  **capitalized variable first**:
```
import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};


function Story(props) {
  // Correct! JSX type can be a capitalized variable.
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}

```



 

