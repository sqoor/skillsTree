import React, { Component } from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import './AdminLogin.css';

export class AdminLogin extends Component {
    submitHandler = (e) => {
        e.preventDefault();

        const name = this.username.value;
        const password = this.password.value;

        Axios.post('/login', {name, password})
            .then(res => {
                const authenticated = res.data;

                if(authenticated)
                    this.props.history.push('/admin');
            })
            .catch(err => console.log(err));
    }
    
    render() {
        return (
            <>
                <div className="body"></div>
                <div className="grad"></div>
                <div className="header">
                    <div>Skills<span>Tree</span></div>
                </div>
                <br />
                <form className="login" onSubmit={this.submitHandler}>
                    <input
                        ref={elem => this.username = elem}
                        type="text"
                        placeholder="username" 
                    /><br />
                    <input 
                        ref={elem => this.password = elem}
                        type="password"
                        placeholder="password"
                    /><br />
                    <input type="submit" value="Login" />
                </form>
            </>
        )
    }
}

export default withRouter(AdminLogin)
