import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Register from './Register.js';
import Login from './Login.js';
import {Route} from "react-router-dom";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from '../../Actions/auth'

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state={
          isLoginOpen: true,
          isRegisterOpen:false
        };
      }

      submit= data=>
        this.props.login(data).then(()=> this.props.history.push("/dashboard"));
    
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
    
      render() {
        return (
          
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
          
          
        );
      }
}



LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login:PropTypes.func.isRequired
};

export default connect(null,{login})(LoginPage);