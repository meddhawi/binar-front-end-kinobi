import React, { Component } from 'react';
import { connect } from "react-redux";
import apiAction from '../../redux/action/apiAction';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'
import Link from 'next/link';
class Navbars extends Component{
    constructor(props){
        super(props)
        this.state={
            logged: false
        }
    }
    componentDidMount(){
        if(localStorage.getItem('accessToken')){
            this.setState({
                logged: true
            })
        }
    }

    logStatus = () => {
        if(this.state.logged == true){
            return(
                <>
                    <Nav.Link className='border border-secondary ms-1' onClick={() => this.props.logOut()}>Sign Out</Nav.Link>
                </>
            )
        }else if(this.state.logged == false){
            return(
                <>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </>
            )
        }else{
            <Nav.Link href="/">Loading...</Nav.Link>
        }
    }    
    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className='mb-5 mb-lg-5'>
                <Container>
                    <Navbar.Brand href="/">Product List</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Button variant='outline-secondary' size='sm'>Create New</Button>
                        </Nav>
                        <Nav>
                            {this.logStatus()}                
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default connect(
    state => state, apiAction
)(Navbars)