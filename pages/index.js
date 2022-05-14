import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from './components/layout'
import { connect } from "react-redux";
import apiAction from '../redux/action/apiAction';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Card, Button, Modal,  } from 'react-bootstrap'
import { Input, Form } from 'reactstrap';
import React, { Component } from 'react'
import ModalForm from './components/ModalForm'
import axios from 'axios';
class ModalFormUpdate extends Component{
  constructor(props){
    super(props)

    this.state = {
      name: null,
      price: null,
      imageurl: null
    }
  }

  set = name => event => {
    this.setState({[name]: event.target.value});
  }
  
  componentDidMount(){
    const {item} = this.props
    this.setState({
      id: item.id,
      name: item.name,
      price: item.price,
      imageurl: item.imageurl
    })
  }
  handleUpdate = async () => {
    const {name, price, imageurl} = this.state
    const {item} = this.props
    const config = {
      headers: {
        authorization: `${localStorage.getItem('accessToken')}`,
      },
    }
    const id = item.id
    const itemInfo = {
      name, 
      price, 
      imageurl
    }
    // console.log('WORKING')
    const {data} = await axios.put(`https://test-binar.herokuapp.com/v1/products/${id}`, itemInfo, config)
    console.log(data)
  }

  render(){
    const {name, price, imageurl} = this.state
    const {show, hide} = this.props
    return(
      <div>
        <Modal show={show} onHide={hide}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleUpdate}>
              <div className="form-group mt-3">
                <Input
                type='text'
                name='Product Name'
                placeholder='Product Name'
                value={name}
                onChange={this.set('name')} />
              </div>
              <div className="form-group mt-3">
                <Input
                type='text'
                name='Price'
                placeholder='Price'
                value={price}
                onChange={this.set('price')}/>
              </div>
              <div className="form-group mt-3">
                <Input
                type='text'
                name='image'
                placeholder='image url'
                value={imageurl}
                onChange={this.set('imageurl')}/>
              </div>
              <br/>
              <Button onClick={this.handleUpdate} className="col-12 mt-4 border border-secondary">Update</Button>
              {/* <Input placeholder='Update' className='col-12 mt-4 border border-secondary' type='submit'/> */}

            </Form>
          </Modal.Body>

        </Modal>
      </div>
    )
  }
}

class ModalFormCreate extends Component{
  constructor(props){
    super(props)

    this.state = {
      name: null,
      price: null,
      imageurl: null
    }
  }

  set = name => event => {
    this.setState({[name]: event.target.value});
  }

  handleCreate = async () => {
    const {name, price, imageurl} = this.state
    const config = {
      headers: {
        authorization: `${localStorage.getItem('accessToken')}`,
      },
    }
    const itemInfo = {
      name, 
      price, 
      imageurl
    }
    console.log('WORKING')
    const {data} = await axios.post(`https://test-binar.herokuapp.com/v1/products`, itemInfo, config)
    console.log(data)
  }

  render(){
    const {name, price, imageurl} = this.state
    const {show, hide} = this.props
    return(
      <div>
        <Modal show={show} onHide={hide}>
          <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleCreate}>
              <div className="form-group mt-3">
                <Input
                type='text'
                name='Product Name'
                placeholder='Product Name'
                onChange={this.set('name')} />
              </div>
              <div className="form-group mt-3">
                <Input
                type='text'
                name='Price'
                placeholder='Price'
                onChange={this.set('price')}/>
              </div>
              <div className="form-group mt-3">
                <Input
                type='text'
                name='image'
                placeholder='image url'
                onChange={this.set('imageurl')}/>
              </div>
              <br/>
              <Button onClick={this.handleCreate} className="col-12 mt-4 border border-secondary">Save Changes</Button>
              {/* <Input placeholder='Update' className='col-12 mt-4 border border-secondary' type='submit'/> */}

            </Form>
          </Modal.Body>

        </Modal>
      </div>
    )
  }
}


class ModalFormDelete extends Component{
  constructor(props){
    super(props)

    this.state = {}
  }

  set = name => event => {
    this.setState({[name]: event.target.value});
  }
  
  componentDidMount(){
    const {item} = this.props
 
  }
  handleDelete = async () => {
    const {name, price, imageurl} = this.state
    const {item} = this.props
    const config = {
      headers: {
        authorization: `${localStorage.getItem('accessToken')}`,
      },
    }
    const id = item.id
    const itemInfo = {
      name, 
      price, 
      imageurl
    }
    console.log('WORKING')
    const {data} = await axios.delete(`https://test-binar.herokuapp.com/v1/products/${id}`, config)
    console.log(data)
  }

  render(){
    const {show, hide, item} = this.props
    return(
      <div>
        <Modal show={show} onHide={hide}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure want to delete {item.name} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleDelete}>
              <br/>
              <Button onClick={this.handleDelete} className="col-12 mt-4 border border-secondary">Yes Delete IT!</Button>
              {/* <Input placeholder='Update' className='col-12 mt-4 border border-secondary' type='submit'/> */}

            </Form>
          </Modal.Body>

        </Modal>
      </div>
    )
  }
}

class Home extends Component{
  constructor(props) {
    super(props)

    this.state = {
      data: {},
      logged: false,
      showNew: false,
      showEdit: false,
      showDelete: false,
      editKey: null,
      name: null,
      price: null,
      imageurl: null,
      id: null
    }
  }

  set = name => event => {
    this.setState({[name]: event.target.value});
  }

  async componentDidMount(){
    if(localStorage.getItem('accessToken')){
      await this.props.getAllItem()
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

  handleClose = name => event => {
    this.setState({[name]: false});
  }

  handleOpen = name => event => {
    this.setState({[name]: true});
  }


  handleEdit(key){
    console.log(key)
    this.setState({
      showEdit : true,
      editKey: key
    })
  }

  handleRemove(key){
    this.setState({
      showDelete :true,
      editKey: key
    })
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
    const { data, showNew, showEdit, showDelete, editKey } = this.state

    return (
      <Layout title="Dashboard">

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className='mb-5 mb-lg-5'>
          <Container>
            <Navbar.Brand href="/">Product List</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Button variant='outline-secondary' 
                    size='sm' 
                    className='col'
                    onClick={this.handleOpen('showNew')}>Create New</Button>
                </Nav>
                <Nav>
                    {this.logStatus()}                
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <ModalFormCreate show={showNew} type='create' hide={this.handleClose('showNew')} />
        
        {showEdit == true && editKey != null ? <ModalFormUpdate show={showEdit}  hide={this.handleClose('showEdit')} item={data[editKey]}/> : null}
        {showDelete == true && editKey != null ? <ModalFormDelete show={showDelete}  hide={this.handleClose('showDelete')} item={data[editKey]}/> : null}

        <div className='container p-5 m-5 row'>
          {data != null ?
            Object.keys(data).map((name, i)=>{
              return(
                <Card style={{ width: '18rem' }} key={i}>
                  <Card.Img 
                  variant="top" 
                  style={{ width: '100%', height: '15vw', objectFit: 'contain' }}
                  src={data[name].imageurl} 
                  />
                  
                  <div className={`${styles.column} ${styles.btnoverlay}`}>
                    <button className={`${styles.btncard}`} onClick={() => this.handleEdit(name)}>
                      <Image src="/edit.svg" alt='edit' width={20} height={20} />
                    </button>
                    <button className={`${styles.btncard}`} onClick={() => this.handleRemove(name)}>
                      <Image src="/trash.svg" alt='edit' width={20}height={20}/>
                    </button>
                  </div>  
      
                  <Card.Body>
                    <Card.Title>{data[name].name}</Card.Title>
                    <Card.Text>
                      {data[name].price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              )
            })
          : <div> Loading </div> }
        </div>
        
        


      </Layout>
    )
  }
}


export default connect(
  state => state, apiAction
)(Home)
