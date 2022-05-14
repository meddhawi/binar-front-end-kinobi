import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from "react-redux";
import apiAction from '../redux/action/apiAction';
import Layout from './components/layout';
import Router from 'next/router';
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    set = name => event => {
        this.setState({[name]: event.target.value});
    }

    handleSubmit = async(event) => {
        event.preventDefault();
          const { email, password}  = this.state;
          const loginData = {
            email,
            password
        }
        // Validasi
          if(!email || !password) return alert('Please insert missing credentials!')
          
          await this.props.loginUser(loginData)


        Router.push('/')
      }

    render(){
        return(
            <div>
                <Layout title='Login'>
                <div className="container-sm mt-4 text-center justify-content-center col-5">
                    <div className="container border border-dark p-4">
                        <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group mt-3">
                            <input 
                            type="text" 
                            className="form-control" 
                            name="email" 
                            onChange={this.set('email')}
                            placeholder="Email" />
                        </div>
            
                        <div className="form-group mt-3">
                            <input type="password" 
                            className="form-control" 
                            onChange={this.set('password')}
                            placeholder="Password" />

                        </div>
                        <button className="col-12 mt-4 border border-secondary">Login</button>
                        <p className="mt-2"> Dont have an account? <Link href="/register">Register!</Link></p>
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
)(Login)