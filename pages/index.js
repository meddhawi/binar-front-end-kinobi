import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from './components/layout'
import { connect } from "react-redux";
import apiAction from '../redux/action/apiAction';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Card, Button, Modal } from 'react-bootstrap'
import React, { Component } from 'react'

class Home extends Component{
  constructor(props) {
    super(props)

    this.state = {
      data: {},
      logged: false,
      showNew: false,
      showEdit: false,
      showDelete: false,
    }
  }

  handleClose = name => event => {
    this.setState({[name]: false});
  }

  handleOpen = name => event => {
    this.setState({[name]: true});
  }
  
  async componentDidMount(){
    await this.props.getAllItem()
    if(localStorage.getItem('accessToken')){
      this.setState({
          logged: true
      })
  }
    this.setState({
      data: this.props.api.data
    })
    // console.log(this.state.data)
  }

  loggedOut = () => {
    this.setState({
        logged: false
    })
    this.props.logOut()
}

logStatus = () => {
    if(this.state.logged == true){
        return(
            <>
                <Nav.Link className='border btn-secondary-outline border-secondary ms-1' onClick={() => this.loggedOut()}>Sign Out</Nav.Link>
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
    const { data, showNew, showEdit, showDelete } = this.state
    return (
      <Layout title="Dashboard">

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className='mb-5 mb-lg-5'>
          <Container>
            <Navbar.Brand href="/">Product List</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Button variant='outline-secondary' size='sm' className='col'>Create New</Button>
                </Nav>
                <Nav>
                    {this.logStatus()}                
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Button variant='outline-secondary' size='sm' className='m-3'>Create New</Button>
        <div className='container p-5 m-5 row'>
          {data != null ?
            Object.keys(data).map(function(name){
              return(
                <Card style={{ width: '18rem' }} key={name}>
                  <Card.Img 
                  variant="top" 
                  style={{ width: '100%', height: '15vw', objectFit: 'contain' }}
                  src={data[name].imageurl} 
                  />
                  <Card.ImgOverlay>
                    <div className={`${styles.column}`}>
                      <button className={`${styles.btncard}`}>
                        <Image src="/edit.svg" alt='edit' width={20} height={20}
                        />
                      </button>
                      <button className={`${styles.btncard}`}>
                        <Image src="/trash.svg" alt='edit' width={20}height={20}/>
                      </button>
                    </div>  
      
                  </Card.ImgOverlay>
                  <Card.Body>
                    <Card.Title>{data[name].name}</Card.Title>
                    <Card.Text>
                      {data[name].price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              )
            })
          : <div> Loading</div> }
        </div>
        
        


      </Layout>
    )
  }
}


export default connect(
  state => state, apiAction
)(Home)
