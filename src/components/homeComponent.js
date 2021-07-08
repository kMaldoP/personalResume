import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {} from "react-bootstrap";
import "./styles.css";
import { Route, Switch } from "react-router-dom";

class Home extends Component {
    render(){
        return(

<React.Fragment>
  <div className="container">
    <div className Name="card">
      <div className="card-header">
        <h3>Summary</h3>
        <p className="card-subtitle"> A Quick Introduction</p>
      </div>
    </div>
    <div className Name="card-body">
      <p>
        A 14 year service industry professional looking to make the transition
        into programming. Currently attending a full stack developer course and
        very excited for any and all opportunities to grown and learn in my new
        chosen field.
      </p>
    </div>
  </div>
  <h2 className="section-header">Work History</h2>
  <div className="container">
    <h5 className="job">
      7 Seas Brewing Company <small>Gig Harbor, Wa</small>
    </h5>
    <h6>Taproom Assistant Manager</h6>
    <div className="d-none d-sm-block">
      <ul>
        <li>
          Responsible for taproom setup,operation, and breakdown on daily basis
        </li>
        <li>
          Responsible for staff with attention to levels of service an ensuring
          a welcoming atmosphere.
        </li>
        <li>
          Daily administration work, including safe reconciliation and
          processeing sales and staff gratuities on a weekly basis
        </li>
        <li>
          Responsible for training and overseeing staff and taproom are upheld
          to highest service standard
        </li>
      </ul>
    </div>
    <h5 className="job">
      Thorn Brewing Company <small>San Diego, CA</small>
    </h5>
    <h6>Beertender/Warehouse</h6>
    <div className="d-none d-sm-block">
      <ul>
        <li>
          Responsible for taproom setup,operation, and breakdown on daily basis
        </li>
        <li>
          High volume sales with customer service and cash handling accuracy
          paramount.
        </li>
        <li>
          Many A time working alone, responsible for tap room atmosphere and
          presentation
        </li>
        <li>
          Assisting in the warehouse, Responsible for filling large account
          orders
        </li>
      </ul>
    </div>
    <h5 className="job">
      Latchkey Brewing Company <small>San Diego, CA</small>
    </h5>
    <h6>Brewtility</h6>
    <div className="d-none d-sm-block">
      <ul>
        <li>
          Many a time alone, Responsible for tap room operation and atmosphere
          on daily basis
        </li>
        <li>Job included requistion and stocking of product.</li>
        <li>Represented brand at special events and beer functions</li>
        <li>Limited assistance in production work.</li>
      </ul>
    </div>
    <h5 className="job">
      Viejas Casino and Resort <small>Alpine, CA</small>
    </h5>
    <h6>Beverage Manager</h6>
    <div className="d-none d-sm-block">
      <ul>
        <li>
          Responsible for the operation of 5 bars and beverage servers with over
          50+ employees daily
        </li>
        <li>
          Customer service was paramount to guest interaction with conflict
          resolution.
        </li>
        <li>
          Support staff in their role as well as a liason between staff and
          upper management
        </li>
        <li>Worked long and irregular hours with focus on consistency.</li>
      </ul>
    </div>
  </div>

  <h3 className="section-header">Skillset/On-going Training</h3>
  <div className="container">
    <ul>
      <li>
        Finished full stack web developement bootcamp through Nucamp in May
        2021.
      </li>
      <li>
          Attend back end bootcamp through Nucampt starting Aug. 9th
      </li>
      <li>Strong communication and collaboration skills</li>
      <li>Ability to work unsupervised</li>
      <li>Self starter. Eager to see a project completed once tasked</li>
      <li>
        Strong potential for working with a client, or even service industry
        facing role
      </li>
      <li>Constant willingness to learn and grow</li>
    </ul>
  </div>
  <h3 className="section-header"> References </h3>
  <div className="container">
    <p> References available upon request</p>
  </div>
</React.Fragment>
        )
    }
}

export default Home;