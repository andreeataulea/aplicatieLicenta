import React, { Component } from 'react';
import ReactDOM from "react-dom";
import  './Login.css';
import {Form, Button,Message} from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../Messages/InlineError.js';
import PropTypes from 'prop-types'


class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
          data:{
            email: '',
            password: ''
          },
          loading: false,
          errors:{}
        };

        
      }

      onChange = e => this.setState({data: {... this.state.data, [e.target.name] : e.target.value}
      });
    
      submitLogin = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
          this.setState({ loading: true });
          this.props
            .submit(this.state.data)
            .catch(err => 
              this.setState({ errors: err, loading:false})
            );
        }
      }

      validate = (data) =>{
        const errors = {};
        if(!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if(!data.password) errors.password = "Password can't be empty!"
        return errors;
      }

      render() {

        const {data,errors,loading} = this.state;

        return (
          <Form onSubmit = {this.submitLogin} loading={loading}>
          {errors.global && (
          <Message negative>
            <Message.Header>Something went wrong</Message.Header>
            <p>{errors.global}</p>
          </Message>
        )}
          <div className="inner-container">
            <div className="title-Login">
              Login
            </div>
            <div className="box">
              <Form.Field error={!!errors.email}>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="login-input"
                  placeholder="Email"
                  value={this.state.data.email}
                  onChange={this.onChange}/>
                  
               
                {errors.email && <InlineError text = {errors.email}/>}
                </Form.Field>
                 
              <Form.Field error={!!errors.password}>
              
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id = "password"
                  name="password"
                  className="login-input"
                  placeholder="Password"
                  value = {data.password}
                  onChange={this.onChange}/>
                  
              
              {errors.password && <InlineError text = {errors.password}/>}
              </Form.Field>
              <button 
                type="button"
                className="login-btn"
                onClick={this.submitLogin.bind(this)}>Login</button>
            </div>
          </div>
          </Form>
        );
      }
    
}

Login.propTypes = {
  submit: PropTypes.func.isRequired
};

export default Login;

