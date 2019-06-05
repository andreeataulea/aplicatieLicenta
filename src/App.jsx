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
import TaskForm from './Components/Pages/TaskForm';
import AddTask from './Components/Pages/AddTask';
import FeedbackForm from './Components/Pages/FeedbackForm';


const App = ({location})=>(
  <div className="ui container">
  <Route location = {location} path="/login" exact component = {LoginPage}/>
  <Route location = {location} path="/" exact component={HomePage}/>
  <UserRoute location={location} path = "/dashboard" exact component = {DashboardPage}/>
  <Route location={location} path="/addTask" exact component={TaskForm}/>
  <Route location={location} path="/addFeedback" exact component={FeedbackForm}/>
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
export default connect(mapStateToProps)(App);
