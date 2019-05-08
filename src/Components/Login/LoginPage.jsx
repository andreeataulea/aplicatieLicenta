import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Register from './Register.js';
import Login from './Login.js';
import {Route} from "react-router-dom";

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state={
          isLoginOpen: true,
          isRegisterOpen:false
        };
      }
    
      showLoginBox(){
        this.setState({
          isLoginOpen:true,
          isRegisterOpen:false
        });
      }
    
      showRegisterBox(){
        this.setState({
          isRegisterOpen:true,
          isLoginOpen:false
        });
      }

      submit= data=>{
          console.log(data);
      };
    
      render() {
        return (
          //<div>
          //   <Route path="/" exact component="Login"/>
          <div className="root-container">
           <div className="box-controller">
            <div className="controller" onClick={this.showLoginBox.bind(this)}>
              Login
            </div>
            <div className="controller" onClick={this.showRegisterBox.bind(this)}>
              Register
            </div>
           </div>
    
            <div className="box-container">
              {this.state.isLoginOpen && <Login submit={this.submit}/>}
              {this.state.isRegisterOpen && <Register/>}
            </div>
    
          </div>
          // </div>
          
        );
      }
}

export default LoginPage;