import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {Route} from "react-router-dom";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import * as actions from"../../Actions/auth";


const HomePage = ({isAuthenticated,logout}) =>(
    <div>
        <h1>HomePage</h1>
        {isAuthenticated ? (
            <button onClick={() => logout()}>Logout</button>
        ):(
            <div>
        <Link to = "./login">Login Page</Link>
    </div>
        )}
        </div>
);

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state){
    return{
        isAuthenticated: !!state.user.token
    }
}

export default connect(mapStateToProps,{logout:actions.logout})(HomePage);