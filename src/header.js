import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import App from './App';
import Register from './components/Register';





export default class Header extends Component{
    render(){
        return(
          <Router>
         

        <Switch>
          
          <Route path="/register">
            <Register />
          </Route>
          
          <Route path="/">
            <App />
          </Route>
        </Switch>
        
        </Router>
        )
    }
}