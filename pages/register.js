import { Router } from 'next/router';
import React, { Component } from 'react';
import { connect } from "react-redux";
import apiAction from '../redux/action/apiAction';
import Link from 'next/link'
import Layout from './components/layout';
class Register extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    set = name => event => {
        this.setState({[name]: event.target.value});
    }

    handleSubmit = async(event) => {
        const { email, password, passwordConfirm, name}  = this.state;
        const dataUser = {
          email,
          password,
          name
        }
        event.preventDefault();
         if(!email || !password || !name) return alert('Please insert missing credentials!')
        await this.props.registerUser(dataUser)
        // if(this.props.auth.error){
        //   alert(this.props.auth.error.message || 'Register failed!')
        //   Router.push('/register')
        //   await this.props.authReset()
        // }else{
        //   Router.push('/login')
        // }
        
        Router.push('/login')
    }

    render(){
        return(
            <div>
                <Layout title="Sign Up">
                <div className="container-sm mt-4 text-center justify-content-center col-5">
                    <div className="container border border-dark p-4">
                        <h1>Register</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group mt-3">
                            <input 
                            type="text" 
                            className="form-control" 
                            name="Name" 
                            onChange={this.set('name')}
                            placeholder="Name" />
                        </div>
                        <div className="form-group mt-3">
                            <input 
                            type="text" 
                            className="form-control" 
                            name="email" 
                            onChange={this.set('email')}
                            placeholder="Email" />
                        </div>
                        <div className="form-group mt-3">
                            <input 
                            type="password" 
                            className="form-control" 
                            onChange={this.set('password')}
                            placeholder="Password" />
                        </div>
                        <button className="col-12 mt-4 border border-secondary">Register</button>
                        <p className="mt-2">Already have an account? <Link href="/login">Login!</Link></p>
                    </form>
                    </div>
                </div>
                </Layout>
            </div>
        )
    }
}

export default connect(
    state => state,
    apiAction
)(Register)