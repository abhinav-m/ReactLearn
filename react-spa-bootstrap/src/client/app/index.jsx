import React from 'react';
import { render } from 'react-dom';
import {Button} from 'react-bootstrap';

class App extends React.Component {
    render() {
        return (<div>
        <p> Hello React! </p>;
        <Button> Test </Button>
        </div>
        )
    }
}

render( < App/ > , document.getElementById('app'));
