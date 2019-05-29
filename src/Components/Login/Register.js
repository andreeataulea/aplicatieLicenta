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
     },
     loading: false,
     errors:{}
    };
  }



  // showValidationError(elm, msg){
  //   this.setState((prevState)=>({errors:[...prevState.errors,{elm,msg}]}));

  // }

  // clearValidationError(elm){
  //   this.setState((prevState)=>{
  //     let newArr =[];
  //     for(let err of prevState.errors){
  //         if(elm != err.elm){
  //           newArr.push(err);
  //         }
  //     }
  //     return {errors: newArr};
  //   });
  // }

  // onFirstChange(e){
  //   this.setState({first: e.target.value});
  //   this.clearValidationError("first");
  // }

  // onLastChange(e){
  //   this.setState({last: e.target.value});
  //   this.clearValidationError("last");
  // }

  // onEmailChange(e){
  //   this.setState({email: e.target.value});
  //   this.clearValidationError("email");
  // }

  // onBachelorChange(e){
  //   this.setState({bachelor: e.target.value});
  //   this.clearValidationError("bachelor");
  // }

  // onPasswordChange(e){
  //   this.setState({password: e.target.value});
  //   this.clearValidationError("password");

  //   this.setState({pwdState: "weak"});
  //   if(e.target.value.length > 8){
  //     this.setState({pwdState: "medium"});
  //   }
  //    if(e.target.value.length > 12){
  //     this.setState({pwdState: "strong"});
  //   }
  
  

  onChange = e =>
  this.setState({
    ...this.state,
    data: { ...this.state.data, [e.target.name]: e.target.value }
  });

  // submitRegister(e) {

  //   console.log(this.state);

    // if(this.state.first == ""){
    //    this.showValidationError("first", "First name cannot be empty!");
    // } if(this.state.last == ""){
    //    this.showValidationError("last","Last name cannot be empty!");
    // } if(this.state.email == ""){
    //    this.showValidationError("email","Email cannot be empty!");
    // } if(this.state.bachelor == ""){
    //    this.showValidationError("bachelor","Bachelor cannot be empty!");
    // } if(this.state.password == ""){
    //    this.showValidationError("password", "Password cannot be empty!");
    // }
    
  //}

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

    // let firstErr = null,
    //  lastErr = null,
    //  passwordErr = null,
    //  emailErr = null,
    //  bachelorErr = null;

    // for(let err of this.state.errors){
    //   if(err.elm === "first"){
    //     firstErr = err.msg;
    //   }if(err.elm === "last"){
    //     lastErr = err.msg;
    //   }if(err.elm === "email"){
    //     emailErr = err.msg;
    //   }if(err.elm === "bachelor"){
    //     bachelorErr = err.msg;
    //   }if(err.elm === "password"){
    //     passwordErr = err.msg;
    //   }
    // }

    // let pwdWeak = false,
    //     pwdMedium = false,
    //     pwdStrong = false;

    // if(this.state.pwdState === "weak"){
    //   pwdWeak = true;
    // }else if(this.state.pwdState === "medium"){
    //   pwdWeak = true;
    //   pwdMedium = true;
    // }else if (this.state.pwdState === "strong"){
    //   pwdWeak = true;
    //   pwdMedium = true;
    //   pwdStrong = true;
    // }
  


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
             {/* <small className="danger-error">{emailErr ? emailErr : ""}</small> */}
             {errors.email && <InlineError text={errors.email} />}
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
               {/* <small className="danger-error">{passwordErr ? passwordErr : ""}</small>

               {this.state.password && <div className="password-state">
                  <div
                    className={"pwd pwd-weak " + (pwdWeak ? "show" : "")}></div>
                  <div
                    className={"pwd pwd-medium " + (pwdMedium ? "show" : "")}></div>
                  <div
                    className={"pwd pwd-strong " + (pwdStrong ? "show" : "")}></div>
               </div>} */}
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