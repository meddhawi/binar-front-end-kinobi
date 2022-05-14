import { connect } from "react-redux";
import { Card, Button, Modal, Form } from 'react-bootstrap'
import React, { Component } from 'react'
import apiAction from "../../redux/action/apiAction";
import Router from 'next/router';

class ModalForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            title: '',
            button: '',
            name: null,
            price: null,
            imageurl: null,
            id: null


        }
    }

    set = name => event => {
        this.setState({[name]: event.target.value});
    }

    componentDidMount(){
      const { type, item } = this.props

        if(type == 'update'){
            // console.log('item', item)
            this.setState({
                title: 'Edit Product',
                button: 'Save Changes',
                id: item.id,
                name: item.name,
                price: item.price,
                imageurl: item.imageurl
            })
            // console.log('update')
        }else if(type == 'create'){
            this.setState({
                title: 'Add Product',
                button: 'Create'
            })
        }
    }

    async handleUpdate(){
        const {name, price, imageurl, id} = this.state

        const itemData ={
            name, price, imageurl
        }
        await this.props.updateItem(itemData, id)
    }

    async handleCreate(){
        const {name, price, imageurl} = this.state

        const itemData ={
            name, price, imageurl
        }

        // await this.props.addItem(itemData)

    }

    buttonChanger = () => {
        const { type} = this.props

        if(type == 'update'){
        <Button variant="primary" onClick={this.handleUpdate()}>
            Save Changes
        </Button>
        }else if(type == 'create'){
        <Button variant="primary" onClick={this.handleCreate()}>
            Add Product
        </Button>
        } 
    }

    render(){
      const {show, type, hide, item} = this.props
      const {name, price, imageurl} = this.state
      return(
          <div>
              {}
            <Modal show={show} onHide={hide}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.state.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group mt-3">
                            <input
                            type='text'
                            className='form-control'
                            name='Product Name'
                            placeholder='Product Name'
                            value={name}
                            onChange={this.set('name')}/>
                        </div>
                        <div className="form-group mt-3">
                            <input
                            type='text'
                            className='form-control'
                            name='Price'
                            placeholder='Price'
                            value={price}
                            onChange={this.set('price')}/>
                        </div>
                        <div className="form-group mt-3">
                            <input
                            type='text'
                            className='form-control'
                            name='image'
                            placeholder='image url'
                            value={imageurl}
                            onChange={this.set('imageurl')}/>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    {this.buttonChanger()}
                </Modal.Footer>
            </Modal>
          </div>
      )
    }
  }

export default connect(
    state => state, apiAction
)(ModalForm)