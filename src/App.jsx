import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { BrowserRouter} from 'react-router-dom';
import {Route} from "react-router-dom";
import HomePage from "./Components/Pages/Homepage";
import LoginPage from "./Components/Login/LoginPage";
import {BrowserRouter as Router,Link} from "react-router-dom";
import DashboardPage from "./Components/Pages/DashboardPage";
import UserRoute from "./Components/Routes/UserRoute";
import PropTypes from 'prop-types';

const App = ({location})=>(
  <div className="ui container">
  <Route location = {location} path="/login" exact component = {LoginPage}/>
  <Route location = {location} path="/" exact component={HomePage}/>
  <UserRoute location={location} path = "/dashboard" exact component = {DashboardPage}/>
  </div>
)

App.propTypes={
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email
  };
}
// class App extends Component {

//   render(){
//     return(
//       <Router>
//         <div className="ui-container">
//           <Route path="./Components/Homepage.jsx" exact component={HomePage}/>
//           <Route path="/" exact component = {LoginPage}/>
//         </div>
//       </Router>
//     );
//   }

  // constructor(props){
  //   super(props);
  //   this.state={
  //     isLoginOpen: true,
  //     isRegisterOpen:false
  //   };
  // }

  // showLoginBox(){
  //   this.setState({
  //     isLoginOpen:true,
  //     isRegisterOpen:false
  //   });
  // }

  // showRegisterBox(){
  //   this.setState({
  //     isRegisterOpen:true,
  //     isLoginOpen:false
  //   });
  // }

  // render() {
  //   return (
  //     //<div>
  //     //   <Route path="/" exact component="Login"/>
  //     <div className="root-container">
  //      <div className="box-controller">
  //       <div className="controller" onClick={this.showLoginBox.bind(this)}>
  //         Login
  //       </div>
  //       <div className="controller" onClick={this.showRegisterBox.bind(this)}>
  //         Register
  //       </div>
  //      </div>

  //       <div className="box-container">
  //         {this.state.isLoginOpen && <Login/>}
  //         {this.state.isRegisterOpen && <Register/>}
  //       </div>

  //     </div>
  //     // </div>
      
  //   );
  // }
//}



export default connect(mapStateToProps)(App);
