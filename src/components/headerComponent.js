import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Navbar, NavbarBrand, NavLink, Nav} from "react-bootstrap";
import AboutInfo from './aboutComponent'
import './styles.css';
import {Switch, Route,Redirect} from 'react-router-dom';



class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar>
          <NavbarBrand href="Home">Home</NavbarBrand>
          <Nav className="mr-auto">
            <NavLink href="#contact">Contact</NavLink>
            <NavLink href="#About">About</NavLink>
          </Nav>
        </Navbar>
        <Jumbotron className="jumbotron-fluid">
          <h1>Krystopher Maldonado</h1>
          <h4>Hospitality Manager/ Jr. Web Developer</h4>
        </Jumbotron>
      </React.Fragment>
    );
  }
}
export default Header;
