import React, { Component } from 'react';
import './App.css';
//import './Components/Login/Login.js';
// import Register from './Components/Login/Register.js';
// import Login from './Components/Login/Login.js';
// import Homepage from "./Components/Homepage.jsx";
// import News from "./Components/News";
// import About from "./Components/About.jsx";
// import PageNavbar from "./Components/PageNavbar";
import { BrowserRouter} from 'react-router-dom';
import {Route} from "react-router-dom";
import HomePage from "./Components/Homepage";
import LoginPage from "./Components/Login/LoginPage";
import {BrowserRouter as Router,Link} from "react-router-dom";


const App = ()=>(
  <div className="ui container">
  <Route path="/login" exact component = {LoginPage}/>
  <Route path="/" exact component={HomePage}/>
  </div>
)
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



export default App;
