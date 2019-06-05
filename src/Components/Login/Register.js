import React, { Component } from 'react';
import ReactDOM from "react-dom";
import  './Login.css';
import { Form, Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import isEmail from 'validator/lib/isEmail';
import InlineError from "../Messages/InlineError"

class Register extends Component{

constructor(props) {
    super(props);
    this.state = {
      data:{ 
      first : "", 
      last : "", 
      email : "", 
      bachelor : "", 
      password : "", 
      pwdState:null,
      isAdmin: false
     },
     loading: false,
     errors:{}
    };
  }

  onChange = e =>
  this.setState({
    ...this.state,
    data: { ...this.state.data, [e.target.name]: e.target.value }
  });

  onCheckBoxChange = e =>
  this.setState({
    ...this.state,
    data: { ...this.state.data, [e.target.name]: e.target.checked }
  });

  submitRegister = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  validate = data => {
    const errors = {};
    if (!data.first) errors.first = "First name cannot be empty";
    if (!data.last) errors.last = "Password cannot be empty";
    if (!isEmail(data.email)) errors.email = "Invalid email";
    if (!data.bachelor) errors.bachelor = "Bachelor cannot be empty";
    if (!data.password) errors.password = "Password cannot be empty";

    return errors;
  };
  
  render() {
     const{data, errors,loading} = this.state;

    return (
      <Form  onSubmit = {this.submitRegister} loading = {loading}>
      <div className="inner-container">
        <div className="title-Login">
          Register
        </div>
        <div className="box">

        <div className="input-group">
            <label htmlFor="first">First Name</label>
            <input
              type="text"
              name="first"
              className="login-input"
              placeholder="First Name"
              onChange={this.onChange.bind(this)}/>
              {/* <small className="danger-error">{firstErr ? firstErr : ""}</small> */}
              {errors.first && <InlineError text={errors.first} />}
          </div>

          
          
          <div className="input-group">
            <label htmlFor="last">Last Name</label>
            <input
              type="text"
              name="last"
              className="login-input"
              placeholder="Last Name"
              onChange={this.onChange.bind(this)}/>
               {/* <small className="danger-error">{lastErr ? lastErr : ""}</small> */}
               {errors.last && <InlineError text={errors.last} />}
          </div>
         

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="text" 
            name="email" 
            className="login-input" 
            placeholder="Email"
            onChange={this.onChange.bind(this)}/>
             {errors.email && <InlineError text={errors.email} />}
          </div>

          <div className="input-group">
            <label htmlFor="isAdmin">Admin</label>
            <input type="checkbox" 
            name="isAdmin" 
            className="login-input" 
            onChange={this.onCheckBoxChange.bind(this)}/>
          </div>
         

          <div className="input-group">
            <label htmlFor="Bachelor">Bachelor-programm</label>
            <input
              type="text"
              name="bachelor"
              className="login-input"
              placeholder="Bachelor-programm"
              onChange={this.onChange.bind(this)}/>
               {/* <small className="danger-error">{bachelorErr ? bachelorErr : ""}</small> */}
               {errors.bachelor && <InlineError text={errors.bachelor} />}
               
          </div>
         

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
              onChange={this.onChange.bind(this)}/>
               {errors.password && <InlineError text={errors.password} />}
          </div>
         
          <button
            type="button"
            className="login-btn"
            onClick={this.submitRegister.bind(this)}>Register</button>
        </div>
      </div>
      </Form>
    );
  }
}

Register.propTypes = {
  submit: PropTypes.func.isRequired
};

export default Register;