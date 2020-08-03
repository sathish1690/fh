import React, { Component } from "react"
import { getflightData } from "./flightsearchComponent"
import SidebarComponent from "../../sidebar/sidebarComponent";

class FlightsearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNo: 0,
            flight: [],
        }
    }

    render() {
        return (
            <> 
              <div className="container">
                  <div className="row">
                        <div className="col-md-3 sidebar-filter hidden-xs hidden-sm">
                             <SidebarComponent />
                        </div>
                        <div className="col-md-9 col-xs-12 col-sm-12 mobile-view">
                        <div className="row">
                            <div className="col-md-9  col-xs-12 col-sm-8 search-sort text-center">
                    
                    <div className="col-md-6 col-xs-6 col-sm-4 cheapest">
                        <h3 className="">Cheapest</h3>
                        <h2>$415</h2>
                        <p>17h, 1 Stop</p>
                    </div>
                    <div className="col-md-6 col-xs-6 col-sm-4 fastest">
                        <h3 className="">Fastest</h3>
                        <h2>$455</h2>
                        <p>17h, 1 Stop</p>
                    </div>
                </div>
                            <div className="col-md-3 col-xs-12 col-sm-4 alternate-date text-center">
                                <h3>Alternative Dates</h3>
                                <h2><i className="material-icons">date_range</i>$480</h2>
                                <p>&nbsp </p>
                            </div>
                         </div>
                      <div className="col-md-12 col-sm-12 col-xs-12 flight-result">
                        <h4 className="cheapest-heading">Cheapest</h4>
                        <div className="row">
                      <div className="col-md-9 col-sm-8 col-xs-12 flight-dtls">
                         
                        <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                           <div className="col-md-2 col-sm-2 col-xs-3">
                              <p className="text-left">Economy</p>
                              <img src={require("../../images/VS.svg")} className="img-fluid" />
                           </div>
                           <div className="col-md-2 col-sm-3 col-xs-3">
                              <h3 className="">10:30</h3>
                              <h2>LHR</h2>
                              <p className="city">Heathrow</p>
                           </div>
                           <div className="col-md-4 col-sm-4 col-xs-3 text-center">
                              <p>16h</p>
                              <div className="takeoff-line">
                                 <span>	<i className="material-icons">flight_takeoff</i></span>
                              </div>
                              <p>1 Stop</p>
                           </div>
                           <div className="col-md-2 col-sm-3 col-xs-3 flight-dest">
                              <h3 className="">10:30</h3>
                              <h2>LHR</h2>
                              <p className="city">Heathrow</p>
                           </div>
                        </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                           <div className="col-md-2 col-sm-2 col-xs-3">
                              <p className="text-left">Economy</p>
                              <img src={require("../../images/VS.svg")} className="img-fluid" />
                           </div>
                           <div className="col-md-2 col-sm-3 col-xs-3">
                              <h3 className="">10:30</h3>
                              <h2>LHR</h2>
                              <p className="city">Heathrow</p>
                           </div>
                           <div className="col-md-4 col-sm-4 col-xs-3 text-center">
                              <p>16h</p>
                              <div className="takeoff-line">
                                 <span>	<i className="material-icons">flight_land</i></span>
                              </div>
                              <p>1 Stop</p>
                           </div>
                           <div className="col-md-2 col-sm-3 col-xs-3 flight-dest">
                              <h3 className="">10:30</h3>
                              <h2>LHR</h2>
                              <p className="city">Heathrow</p>
                           </div>
                        </div>
                        </div>
                        <div className="clearfix"></div>
                        <hr />
                        <div className="flight-result-itinerary">
                           <p className="itinerary-title">Full Itinerary
                              <span className="itinerary-inclusions">Includes 
                              <strong>30kg baggage per person  </strong>
                              </span>
                           </p>
                        </div>
                     </div> 
                     <div className="col-md-3 col-sm-4 col-xs-12 flight-price">
                        <div className="flightpice-cont">
                           <h3 className="">$450<span>per person</span></h3>
                           <h6 className="total-price">Total price : $900</h6>
                           <a href="flight-details.html" className="btn btn-success">Select Flight</a>
                           <p className="flight-fare-rules">
                              <span>Price includes taxes and fuel supplements - </span>
                              <span className="farerule-link" onClick="showHideDiv('divMsg')">Fare rules apply</span>
							  <div id="divMsg" className="fare" style="display:none">
							      <h2>Fare rules</h2>
										<h3>Fare Overview</h3>
										<dl>
										   <dt>From:</dt>
										   <dd>Heathrow</dd>
										   <dt>To:</dt>
										   <dd>Chennai Intl</dd>
										   <dt>Airline:</dt>
										   <dd>Oman Air</dd>
										   <dt>Adult Fare:</dt>
										   <dd>$125.00</dd>
										   <dt>Adult Tax:</dt>
										   <dd>$322.07</dd>
										   <dt>Cabin:</dt>
										   <dd>Economy</dd>
										   <dt>Fare Type:</dt>
										   <dd>Cat35</dd>
										</dl>
										<h3>Cancellation cost</h3>
										<dl>
										   <dt>Cancellation Charge:</dt>
										   <dd>$100</dd>
										</dl>
										<h3>Potential Costs</h3>
										<dl>
										   <dt>Pre Travel Return Date Change:</dt>
										   <dd>$100</dd>
										   <dt>Post Travel Return Date Change:</dt>
										   <dd>$100</dd>
										</dl>
								</div>
                           </p>
                        </div>
                     </div>
                        </div>
                        </div> 
                  </div>
                  </div>
              </div>
            </>
        )
    }
}

export default FlightsearchComponent;