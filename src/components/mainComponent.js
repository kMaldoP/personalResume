import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {} from "react-bootstrap";
import "./styles.css";
import Home from "./homeComponent";
import AboutInfo from "./aboutComponent";
import Contact from "./contactComponent";
import Header from './headerComponent';
import Footer from './footerComponent';
import home from './homeComponent';
import SubmitForm from './newsletterComponent';

import { render } from "@testing-library/react";

class Main extends Component {
    render() {
        return (
            <React.Fragment>
            <Header/>
            <Home/>
            <Footer/>
            </React.Fragment>
        );
    }
    
}

export default Main;
