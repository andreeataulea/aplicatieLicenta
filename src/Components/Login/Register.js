import React, { Component } from 'react';
import ReactDOM from "react-dom";
import  './Login.css';

class Register extends Component{

constructor(props) {
    super(props);
    this.state = { 
      first : "", 
      last : "",
      // username : "", 
      email : "", 
      bachelor : "", 
      password : "", 
      errors: [],
      pwdState:null,
     };
  }

  showValidationError(elm, msg){
    this.setState((prevState)=>({errors:[...prevState.errors,{elm,msg}]}));

  }

  clearValidationError(elm){
    this.setState((prevState)=>{
      let newArr =[];
      for(let err of prevState.errors){
          if(elm != err.elm){
            newArr.push(err);
          }
      }
      return {errors: newArr};
    });
  }

  onFirstChange(e){
    this.setState({first: e.target.value});
    this.clearValidationError("first");
  }

  onLastChange(e){
    this.setState({last: e.target.value});
    this.clearValidationError("last");
  }

  // onUsernameChange(e){
  //     this.setState({username: e.target.value});
  //     this.clearValidationError("username");
  // }

  onEmailChange(e){
    this.setState({email: e.target.value});
    this.clearValidationError("email");
  }

  onBachelorChange(e){
    this.setState({bachelor: e.target.value});
    this.clearValidationError("bachelor");
  }

  onPasswordChange(e){
    this.setState({password: e.target.value});
    this.clearValidationError("password");

    this.setState({pwdState: "weak"});
    if(e.target.value.length > 8){
      this.setState({pwdState: "medium"});
    }
     if(e.target.value.length > 12){
      this.setState({pwdState: "strong"});
    }
  }

  submitRegister(e) {

    console.log(this.state);

    if(this.state.first == ""){
       this.showValidationError("first", "First name cannot be empty!");
    } if(this.state.last == ""){
       this.showValidationError("last","Last name cannot be empty!");
    // } if (this.state.username == ""){
    //    this.showValidationError("username","Username cannot be empty!");
    } if(this.state.email == ""){
       this.showValidationError("email","Email cannot be empty!");

    } if(this.state.bachelor == ""){
       this.showValidationError("bachelor","Bachelor cannot be empty!");
    } if(this.state.password == ""){
       this.showValidationError("password", "Password cannot be empty!");
    }
  }

  render() {

    let firstErr = null,
     lastErr = null,
    //  usernameErr = null,
     passwordErr = null,
     emailErr = null,
     bachelorErr = null;

    for(let err of this.state.errors){
      if(err.elm === "first"){
        firstErr = err.msg;
      }if(err.elm === "last"){
        lastErr = err.msg;
      // }if(err.elm === "username"){
      //   usernameErr = err.msg;
      }if(err.elm === "email"){
        emailErr = err.msg;
      }if(err.elm === "bachelor"){
        bachelorErr = err.msg;
      }if(err.elm === "password"){
        passwordErr = err.msg;
      }
    }

    let pwdWeak = false,
        pwdMedium = false,
        pwdStrong = false;

    if(this.state.pwdState === "weak"){
      pwdWeak = true;
    }else if(this.state.pwdState === "medium"){
      pwdWeak = true;
      pwdMedium = true;
    }else if (this.state.pwdState === "strong"){
      pwdWeak = true;
      pwdMedium = true;
      pwdStrong = true;
    }
  


    return (
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
              onChange={this.onFirstChange.bind(this)}/>
              <small className="danger-error">{firstErr ? firstErr : ""}</small>
          </div>

          
          
          <div className="input-group">
            <label htmlFor="last">Last Name</label>
            <input
              type="text"
              name="last"
              className="login-input"
              placeholder="Last Name"
              onChange={this.onLastChange.bind(this)}/>
               <small className="danger-error">{lastErr ? lastErr : ""}</small>
          </div>
         

          {/* <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"
              onChange={this.onUsernameChange.bind(this)}/>
               <small className="danger-error">{usernameErr ? usernameErr : ""}</small>
          </div> */}
         

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="text" 
            name="email" 
            className="login-input" 
            placeholder="Email"
            onChange={this.onEmailChange.bind(this)}/>
             <small className="danger-error">{emailErr ? emailErr : ""}</small>
          </div>
         

          <div className="input-group">
            <label htmlFor="Bachelor">Bachelor-programm</label>
            <input
              type="text"
              name="bachelor"
              className="login-input"
              placeholder="Bachelor-programm"
              onChange={this.onBachelorChange.bind(this)}/>
               <small className="danger-error">{bachelorErr ? bachelorErr : ""}</small>

               
          </div>
         

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
              onChange={this.onPasswordChange.bind(this)}/>
               <small className="danger-error">{passwordErr ? passwordErr : ""}</small>

               {this.state.password && <div className="password-state">
                  <div
                    className={"pwd pwd-weak " + (pwdWeak ? "show" : "")}></div>
                  <div
                    className={"pwd pwd-medium " + (pwdMedium ? "show" : "")}></div>
                  <div
                    className={"pwd pwd-strong " + (pwdStrong ? "show" : "")}></div>
               </div>}
          </div>
         
          <button
            type="button"
            className="login-btn"
            onClick={this.submitRegister.bind(this)}>Register</button>
        </div>
      </div>
    );
  }
}

export default Register;