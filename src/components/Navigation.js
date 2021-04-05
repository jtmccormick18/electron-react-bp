import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';

import {Nav,Navbar,Form,FormControl,Button} from 'react-bootstrap';



const NavigationBar=(props)=><Navbar bg="dark" variant="dark">
<Navbar.Brand as={Link} to="/home"><img src={props.logo} style={{height:25,width:'auto '}}/></Navbar.Brand>
<Nav className="mr-auto">
    {props.routes.map(route=><Link to={route.path} className="nav-link">{route.name}</Link>)}
  {/* <Nav.Link href="#home">Home</Nav.Link>
  <Nav.Link href="#features">Features</Nav.Link>
  <Nav.Link href="#pricing">Pricing</Nav.Link> */}
</Nav>
{/* <Form inline>
  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
  <Button variant="outline-info">Search</Button>
</Form> */}
</Navbar>

export default NavigationBar;