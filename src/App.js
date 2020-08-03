import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComponent from "./header/headerComponent";
import FooterComponent from "./footer/footerComponent";
import SidebarComponent from "./sidebar/sidebarComponent";
import RoutesComponent from "./helper/routes";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <HeaderComponent />
        <div className="root">
          <RoutesComponent {...this.props} />
        </div>
        <FooterComponent />
      </Router>
    );
  }
}

export default App;

