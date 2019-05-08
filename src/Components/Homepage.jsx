import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {Route} from "react-router-dom";
import {Link} from "react-router-dom";

const HomePage = () =>(
    <div>
        <h1>HomePage</h1>
        <Link to = "src\Components\Login\LoginPage.js">Login Page</Link>
    </div>
);

export default HomePage;