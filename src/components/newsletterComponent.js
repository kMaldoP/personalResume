import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {} from "react-bootstrap";
import "./styles.css";
import { Route, Switch } from "react-router-dom";

class submitForm extends Component{
    render(){
    return (
        <React.Fragment>
        <form>
            <label for='name'>name</label>
          <input id='name' type= 'text' placeholder='enter text here'> </input>
          <button type='submit'>Submit Data</button>
        </form>
    </React.Fragment>
      );
 }
}
export default submitForm;