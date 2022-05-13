import React, { Component } from 'react';
import { connect } from "react-redux";
import apiAction from '../../redux/action/apiAction';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'
import Link from 'next/link';
class Navbars extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    componentDidMount(){

    }
    
    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
            <Container>
                <Navbar.Brand href="/">Product List</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Button variant='outline-secondary' size='sm'>Create New</Button>
                    </Nav>
                    <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>            
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        )
    }
}

export default Navbars