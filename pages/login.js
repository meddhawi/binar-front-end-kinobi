import React, { Component } from 'react';

class Login extends Component{
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
                        <h1>Login</h1>
                    <form action="" method="post">
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" name="title" placeholder="Email" />
                        </div>
            
                        <div className="form-group mt-3">
                            <input type="password" className="form-control" rows="3" placeholder="Password" />
                        </div>
                        <button className="col-12 mt-4 border border-secondary">Login</button>
                        <p className="mt-2"> Dont have an account? <a href="/register">Register!</a></p>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login