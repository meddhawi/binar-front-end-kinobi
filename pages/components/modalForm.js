import { connect } from "react-redux";
import { Card, Button, Modal } from 'react-bootstrap'
import React, { Component } from 'react'
import apiAction from "../../redux/action/apiAction";

class ModalForm extends Component{
    render(){
      const {show, type} = this.props
  
      if(type == 'update'){
        console.log('update')
      }else if(type == 'create'){
        console.log('create')
      }
      
      return(
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      )
    }
  }

export default connect(
    state => state, apiAction
)(ModalForm)