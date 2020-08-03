import React, { Component } from "react"


class HeaderComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="menuitem">
         <div className="top-container d-xs-none">
            <img src={require("../images/lycafly_logo.png")} />
        </div>
        <div className="menu-items header" id="myHeader">
            <div className="container">
        <div className="navbar-header">
                  <span className="d-md-none mobile-logo">  <img src={require("../images/lycafly_logo.png")} /></span>
              </div>
        <div className="navbar-inverse side-collapse in navbar-desktop">
            <nav role="navigation" className="navbar-collapse">
                <div className="row">
                        <div className="col-md-3 logo hidden-sm hidden-xs"></div>
                        <div className="col-md-12 menu-bar nav navbar-nav text-center">
               <ul className=" list-inline">
                    <li className="list-inline-item" activeClassName='is-active' to='/'><a href="/"><i className="material-icons"> flight </i>Flight</a></li>
                    <li className="list-inline-item"><a href="/hotel"><i className="material-icons">hotel</i>Hotels </a></li>
                    <li className="list-inline-item"><a href="/flighthotel"> <i className="material-icons">flight</i><i className="material-icons">hotel</i>Flight + Hotel</a></li>
                    <li className="list-inline-item"><a href="/car"> <i className="material-icons">directions_car</i>Car Hire</a></li>
                </ul>
                </div>
                <div className="col-md-12 col-sm-12 support-dtls">
                           <p className="float-right"> <span><i className="material-icons">phone</i>902323244344</span> <span><i className="material-icons">work</i>My trip</span></p>
                        </div>
                        </div>
                </nav>
            </div>
            </div>
            </div>
</div>);
    }
}

export default HeaderComponent;