import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {} from "react-bootstrap";
import "./styles.css";



class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <footer className="footer bg-Dark">
            <h3>Thank You For Your Consideration</h3>
            <a href="top">Back to top</a>
            <div className="row">
              <div className="col-6">
                <h5>Connect on Social Media</h5>
                <link></link>
              </div>
              <div className="col-6">
                <h5>Links To Some Of My Work</h5>
                <a href="https://github.com/kMaldoP">Github</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
export default Footer;

