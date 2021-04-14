import React from 'react';
import { Navbar, InputGroup, Nav, Form, FormControl, Button } from 'react-bootstrap';
import '../css/navBar.css';

const NavBarComponent = () => {
    return (
        <Navbar bg="ligth" expand="lg">
            <Navbar.Brand href="#home">Todo App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <InputGroup >
                    <InputGroup.Radio value="1" name="filterOptions" aria-label="Radio 1" className="custom-css" />All
                    <InputGroup.Radio value="2" name="filterOptions" aria-label="Radio 2" />Complete
                    <InputGroup.Radio value="3" name="filterOptions" aria-label="Radio 3" />Uncomplete
                </InputGroup>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBarComponent;
