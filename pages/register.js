import React, { Component } from 'react';

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    set = name => event => {
        this.setState({[name]: event.target.value});
    }

    

    render(){
        return(
            <div>
                <div className="container-sm mt-4 text-center justify-content-center col-5">
                    <div className="container border border-dark p-4">
                        <h1>Register</h1>
                    <form >
                        <div className="form-group mt-3">
                            <input 
                            type="text" 
                            className="form-control" 
                            name="Name" 
                            onChange={this.set('username')}
                            placeholder="Name" />
                        </div>
                        <div className="form-group mt-3">
                            <input 
                            type="text" 
                            className="form-control" 
                            name="Email" 
                            onChange={this.set('email')}
                            placeholder="Email" />
                        </div>
                        <div className="form-group mt-3">
                            <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Password" />
                        </div>
                        <button className="col-12 mt-4 border border-secondary">Login</button>
                        <p className="mt-2">Already have an account? <a href="/login.html">Login!</a></p>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register