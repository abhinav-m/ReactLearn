import React from 'react';
import { render } from 'react-dom';
import {PageHeader} from 'react-bootstrap'
import {Button} from 'react-bootstrap';
import {Nav,NavItem,Navbar,NavbarBrand}    from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {Grid,Row,Col}   from 'react-bootstrap'




class App extends React.Component {
    render() {
        return (<Grid fluid>
         
    <Navbar inverse collapseOnSelect fluid>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Think-Tank</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
        <Nav bsStyle= "pills" activeKey={1}>
        <NavItem  eventKey={1} title="home">Home</NavItem>
        <NavItem  eventKey={2} title="About">About</NavItem>
        <NavItem  eventKey={3} title="Portfolio">Portfolio</NavItem>
        </Nav>
         </Navbar.Collapse>
  </Navbar>
 
         <Row>
               <Col xs ={12}>
                <PageHeader > Full stack web developer</PageHeader>
                  <PageHeader> Abhinav Mishra</PageHeader>
                
                </Col>
                 </Row>
              
                   
        <Jumbotron>   
         
              
          </Jumbotron>
           
         
        </Grid>
        )
    }
}

render( < App/ > , document.getElementById('app'));
