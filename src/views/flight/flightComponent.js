import React, { Component } from "react"
import flight from "./flightComponent"

class FlightComponent extends Component {
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
                <div className="row">
                <div className="banner-sec">
                <div className="banner-overlay">
                <div className="col-md-12 text-center" id="myRadioGroup">
               <input id="id_radio1" type="radio" name="name_radio" value="value_radio1" checked="checked"/><label for="id_radio1">Return</label>
               <input id="id_radio2" type="radio" name="name_radio" value="value_radio2" /><label for="id_radio2">One-Way</label>
               <input id="id_radio3" type="radio" name="name_radio" value="value_radio3" /><label for="id_radio3">Multi-City</label>
               <div className="booking-radio">
                  <div className="container">
                     <div id="div1">
                     <div className="row">
                     <div className="col-md-10 col return-cty">
                     <div className="row">
                     <div className="form-group col-md-3">
                             <span className="label-input"><label>Departure</label></span>
                              <input type="text" className="form-control" id="departure" placeholder="" />
                              <i className="material-icons">flight_takeoff</i>
                          </div>
                          <div className="form-group col-md-3">
                          <span className="label-input"><label>Destination</label></span>
                              <input type="text" className="form-control" id="destination" placeholder="" />
                              <i className="material-icons">flight_land</i>
                          </div>
                          <div className="form-group col-md-3">
                          <input type="text" name="book-date" className="form-control br-1" readonly="readonly" />
                              <i className="material-icons">date_range</i>
                          </div>
                          <div className="form-group col-md-3">
                          <span className="label-input"><label>Passenger</label></span>
                              <input type="dropdown" className="form-control" id="destination" placeholder="" />
                              <i className="material-icons">people</i>
                           </div>
                           </div>
                       </div>
                       <div className="form-group col-md-2">
                       <button className="btn btn-success btn-livesearch">Find Flights</button>;
                       
                        </div>
    </div>
                       
                          
                       
                     </div>
                     
                  </div>
                </div>
           </div>
         </div>
            </div>
              <div className="clearfix"></div>
            <div className="container-fluid flight-offer">
               <div className="container">
               <h2 className="text-center">Compare the latest flight deals</h2>
            <p className="text-center">Crackin good deals to make your Grinfreeze</p>
            <div className="row flight-offer-dtls" style={{marginTop:'30px;'}}>
               <div className="col-md-4 col-sm-4 col-xs-12">
                  <img src={require("../../images/offer1.jpg")} className="img-fluid" />
               </div>
               <div className="col-md-4 col-sm-4 col-xs-12">
                  <img src={require("../../images/offer2.jpg")} className="img-fluid" />
               </div>
               <div className="col-md-4 col-sm-4 col-xs-12">
                  <img src={require("../../images/offer3.jpg")} className="img-fluid" />
               </div>
            </div>
            <div className="clearfix"></div>
            

               </div>
            </div>
            <div className="container-fluid popular-cities">
         <div className="container">
         <h2 className="text-center">Popular cities</h2>
               <p className="text-center">Compare flights to these top spots</p>
            <div className="row flight-offer-dtls">
               
               <div className="col-md-4 col-sm-4 col-xs-12 popular-citiesdis" style={{marginTop:'20px;'}}>
                  <img src={require("../../images/dubai.jpg")} className="img-fluid" />
                  <div className="city-overlay">
                     <div className="popularcity-loc">
                        <span><i className="fa fa-map-marker"></i>  Dubai</span>
                     </div>
                     <h3><span>Cheap flights to</span> <br />Dubai</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $558</span> <br />
                        <span>per person</span> 
                     </p>
                  </div>
               </div>
               <div className="col-md-4 col-sm-4 col-xs-12 popular-citiesdis" style={{marginTop:'20px;'}}>
                  <img src={require("../../images/maldives.jpg")} className="img-fluid" />
                  <div className="city-overlay">
                     <div className="popularcity-loc">
                        <span><i className="fa fa-map-marker"></i>  Maldives</span>
                     </div>
                     <h3><span>Cheap flights to</span> <br />Maldives</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $456</span> <br />
                        <span>per person</span> 
                     </p>
                  </div>
               </div>
               <div className="col-md-4 col-sm-4 col-xs-12 popular-citiesdis" style={{marginTop:'20px;'}}>
                  <img src={require("../../images/srilanka.jpg")} className="img-fluid" />
                  <div className="city-overlay">
                     <div className="popularcity-loc">
                        <span><i className="fa fa-map-marker"></i>  Sri lanka</span>
                     </div>
                     <h3><span>Cheap flights to</span> <br />Sri lanka</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $569</span> <br />
                        <span>per person</span> 
                     </p>
                  </div>
               </div>
            </div>
            <div className="clearfix"></div>
            <div className="row  d-xs-none populardtls" style={{marginTop:'20px;'}}>
               <div className="col-md-2 col-sm-2 col-xs-12 offer-city">
                  <div className="popularcity-content">
                     <img src={require("../../images/india.jpg")} className="img-fluid" />
                     <div className="offer-overlay"></div>
                     <div className="country-name">
                        <span><i className="fa fa-map-marker"></i>  India</span>
                     </div>
                     <h3>Cheap flights to Delhi</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $345</span> <br />
                        <span>per person</span> 
                     </p>
                     <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                  </div>
               </div>
               <div className="col-md-2 col-sm-2 col-xs-12 offer-city">
                  <div className="popularcity-content">
                     <img src={require("../../images/bangkok_1.jpg")} className="img-fluid" />
                     <div className="offer-overlay"></div>
                     <div className="country-name">
                        <span><i className="fa fa-map-marker"></i>  Bangkok</span>
                     </div>
                     <h3>Cheap flights to Bangkok</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $678</span> <br />
                        <span>per person</span> 
                     </p>
                     <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                  </div>
               </div>
               <div className="col-md-2 col-sm-2 col-xs-12 offer-city">
                  <div className="popularcity-content">
                     <img src={require("../../images/Manila.jpg")} className="img-fluid" />
                     <div className="offer-overlay"></div>
                     <div className="country-name">
                        <span><i className="fa fa-map-marker"></i>   Manila</span>
                     </div>
                     <h3>Cheap flights to Manila</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $898</span> <br />
                        <span>per person</span> 
                     </p>
                     <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                  </div>
               </div>
               <div className="col-md-2 col-sm-2 col-xs-12 offer-city">
                  <div className="popularcity-content">
                     <img src={require("../../images/Islamabad.jpg")} className="img-fluid" />
                     <div className="offer-overlay"></div>
                     <div className="country-name">
                        <span><i className="fa fa-map-marker"></i>  Islamabad</span>
                     </div>
                     <h3>Cheap flights to Islamabad</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $564</span> <br />
                        <span>per person</span> 
                     </p>
                     <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                  </div>
               </div>
               <div className="col-md-2 col-sm-2 col-xs-12 offer-city">
                  <div className="popularcity-content">
                     <img src={require("../../images/hongkong.jpg")} className="img-fluid" />
                     <div className="offer-overlay"></div>
                     <div className="country-name">
                        <span><i className="fa fa-map-marker"></i>  Hong Kong</span>
                     </div>
                     <h3>Cheap flights to Hong Kong</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $787</span> <br />
                        <span>per person</span> 
                     </p>
                     <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                  </div>
               </div>
               <div className="col-md-2 col-sm-2 col-xs-12 offer-city">
                  <div className="popularcity-content">
                     <img src={require("../../images/New South Wales.jpg")} className="img-fluid" />
                     <div className="offer-overlay"></div>
                     <div className="country-name">
                        <span><i className="fa fa-map-marker"></i>   New South Wales </span>
                     </div>
                     <h3>Cheap flights to Islamabad</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $546</span> <br />
                        <span>per person</span> 
                     </p>
                     <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col d-md-none visible-sm visible-xs" style={{marginTop:'30px;'}}>
                  <div className="owl-carousel owl-theme" id="owl-carousel1">
                     <div className="item">
                        <div className="col-xs-12 offer-city">
                           <div className="popularcity-content">
                              <img src={require("../../images/india.jpg")} className="img-fluid" />
                              <div className="offer-overlay"></div>
                              <div className="country-name">
                                 <span><i className="fa fa-map-marker"></i>  India</span>
                              </div>
                              <h3>Cheap flights to Delhi</h3>
                              <p className="offer-card-desc"> 
                                 <span className="price"> from $898</span> <br />
                                 <span>per person</span> 
                              </p>
                              <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                           </div>
                        </div>
                     </div>
                     <div className="item">
                        <div className="col-xs-12 offer-city">
                           <div className="popularcity-content">
                              <img src={require("../../images/bangkok_1.jpg")} className="img-fluid" />
                              <div className="offer-overlay"></div>
                              <div className="country-name">
                                 <span><i className="fa fa-map-marker"></i>  Bangkok</span>
                              </div>
                              <h3>Cheap flights to Bangkok</h3>
                              <p className="offer-card-desc"> 
                                 <span className="price"> from $432</span> <br />
                                 <span>per person</span> 
                              </p>
                              <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                           </div>
                        </div>
                     </div>
                     <div className="item">
                        <div className="offer-city">
                           <div className="popularcity-content">
                              <img src={require("../../images/Manila.jpg")} className="img-fluid" />
                              <div className="offer-overlay"></div>
                              <div className="country-name">
                                 <span><i className="fa fa-map-marker"></i>   Manila</span>
                              </div>
                              <h3>Cheap flights to Manila</h3>
                              <p className="offer-card-desc"> 
                                 <span className="price"> from $345</span> <br />
                                 <span>per person</span> 
                              </p>
                              <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                           </div>
                        </div>
                     </div>
                     <div className="item">
                        <div className="offer-city">
                           <div className="popularcity-content">
                              <img src={require("../../images/Islamabad.jpg")} className="img-fluid" />
                              <div className="offer-overlay"></div>
                              <div className="country-name">
                                 <span><i className="fa fa-map-marker"></i>  Islamabad</span>
                              </div>
                              <h3>Cheap flights to Islamabad</h3>
                              <p className="offer-card-desc"> 
                                 <span className="price"> from $632</span> <br />
                                 <span>per person</span> 
                              </p>
                              <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                           </div>
                        </div>
                     </div>
                     <div className="item">
                        <div className="offer-city">
                           <div className="popularcity-content">
                              <img src={require("../../images/hongkong.jpg")}  className="img-fluid" />
                              <div className="offer-overlay"></div>
                              <div className="country-name">
                                 <span><i className="fa fa-map-marker"></i>  Hong Kong</span>
                              </div>
                              <h3>Cheap flights to Hong Kong</h3>
                              <p className="offer-card-desc"> 
                                 <span className="price"> from $565</span> <br />
                                 <span>per person</span> 
                              </p>
                              <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                           </div>
                        </div>
                     </div>
                     <div className="item">
                        <div className="col-xs-12 offer-city">
                           <div className="popularcity-content">
                              <img src={require("../../images/New South Wales.jpg")} className="img-fluid" />
                              <div className="offer-overlay"></div>
                              <div className="country-name">
                                 <span><i className="fa fa-map-marker"></i>   New South Wales </span>
                              </div>
                              <h3>Cheap flights to Islamabad</h3>
                              <p className="offer-card-desc"> 
                                 <span className="price"> from $657</span> <br />
                                 <span>per person</span> 
                              </p>
                              <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
            <div className="container-fluid ourbestairlines">
                <div className="container">
                <h2 className="text-center">Our bestselling airlines</h2>
                    <p className="text-center">Bag a bargain with these popular airlines</p>
                <div className="row flight-offer-dtls">
                
                    <div className="col-md-4 col-sm-4 col-xs-12 airlines" style={{marginTop:'20px;'}}>
                    <img src={require("../../images/thaiairways.jpg")} className="img-fluid" />
                    <div className="city-overlay1">
                        <div className="airlines-cnt">
                            <h3>Thai Airways</h3>
                            <p className="offer-card-desc"> 
                                <span className="price">  price from $756</span> <br />
                                <span style={{fontSize:'13px;'}}>London Gatwick to New York</span> 
                            </p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12 airlines" style={{marginTop:'20px;'}}>
                    <img src={require("../../images/qatarairways.jpg")} className="img-fluid" />
                    <div className="city-overlay1">
                        <div className="airlines-cnt">
                            <h3>Qatar Airways</h3>
                            <p className="offer-card-desc"> 
                                <span className="price">  price from $655</span> <br />
                                <span style={{fontSize:'13px;'}}>London Heathrow to Chennai</span> 
                            </p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12 airlines" style={{marginTop:'20px;'}}>
                    <img src={require("../../images/singaporeairlines.jpg")} className="img-fluid" />
                    <div className="city-overlay1">
                        <div className="airlines-cnt">
                            <h3>Singapore Airlines</h3>
                            <p className="offer-card-desc"> 
                                <span className="price">  price from $670</span> <br />
                                <span style={{fontSize:'13px;'}}>London to New Delhi</span> 
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row flight-offer-dtls  hidden-sm hidden-xs">
                    <div className="col-md-2 col-sm-2 col-xs-12" style={{marginTop:'20px;'}}>
                    <img src={require("../../images/IB.svg")} className="img-fluid" />
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-12" style={{marginTop:'20px;'}}>
                    <img src={require("../../images/AY.svg")} className="img-fluid"/>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-12" style={{marginTop:'20px;'}}>
                    <img src={require("../../images/TG.svg")} className="img-fluid" />
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-12" style={{marginTop:'20px;'}}>
                    <img src={require("../../images/AC.svg")} className="img-fluid" />
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-12" style={{marginTop:'20px;'}}>
                    <img src={require("../../images/EY.svg")} className="img-fluid"/>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-12" style={{marginTop:'20px;'}}>
                    <img src={require("../../images/QR.svg")} className="img-fluid" />
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="col d-sm-none visible-sm visible-xs"  style={{marginTop:'20px;'}}>
                    <div className="owl-carousel owl-theme" id="owl-carousel2">
                    <div className="item">
                        <img src={require("../../images/IB.svg")} className="img-fluid" />
                    </div>
                    <div className="item">
                        <img src={require("../../images/AY.svg")} className="img-fluid" />
                    </div>
                    <div className="item">
                        <img src={require("../../images/TG.svg")} className="img-fluid" />
                    </div>
                    <div className="item">
                        <img src={require("../../images/AC.svg")} className="img-fluid" />
                    </div>
                    <div className="item">
                        <img src={require("../../images/EY.svg")} className="img-fluid" />
                    </div>
                    <div className="item">
                        <img src={require("../../images/QR.svg")} className="img-fluid" />
                    </div>
                    </div>
                </div>
                <div className="row airline-list">
                    <div className="col-md-2 col-sm-4 col-xs-6" style={{marginTop:'20px;'}}>
                    <ul className="list-unstyled">
                        <li>American Airlines</li>
                        <li>Garuda Indonesia</li>
                        <li>Austrian Airlines</li>
                        <li>United Airlines</li>
                    </ul>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6" style={{marginTop:'20px;'}}>
                    <ul className="list-unstyled">
                        <li>Ethiopian Airlines</li>
                        <li>KLM</li>
                        <li>EVA Air</li>
                        <li>Lufthansa</li>
                    </ul>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6" style={{marginTop:'20px;'}}>
                    <ul className="list-unstyled">
                        <li>TAP Air Portugal</li>
                        <li>LATAM</li>
                        <li>Qantas</li>
                        <li>Cathay Pacific</li>
                    </ul>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6" style={{marginTop:'20px;'}}>
                    <ul className="list-unstyled">
                        <li>Air China</li>
                        <li>Royal Jordanian Airlines</li>
                        <li>Brussels Airlines</li>
                        <li>Norwegian Air UK</li>
                    </ul>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6" style={{marginTop:'20px;'}}>
                    <ul className="list-unstyled">
                        <li>Delta Air Lines</li>
                        <li>Malaysia Airlines</li>
                        <li>FlyBe</li>
                        <li>Turkish Airlines</li>
                    </ul>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6" style={{marginTop:'20px;'}}>
                    <ul className="list-unstyled">
                        <li>Egyptair</li>
                        <li>West Jet</li>
                        <li>Oman Air</li>
                    </ul>
                    </div>
                </div>
            </div> 
            </div>
            <div className="container-fluid trending-flights">
                <div className="container">
                <h2 className="text-center">Trending countries</h2>
                    <p className="text-center">Find cheap flights for your next trip</p>
                    <div className="row flight-offer-dtls">
                    
                    <div className="col-md-4 col-sm-4 col-xs-12 trending-citiesdis" >
                        <img src={require("../../images/northamr.jpg")} className="img-fluid" />
                        <div className="city-overlay">
                            <div className="popularcity-loc">
                                <span><i className="fa fa-map-marker"></i> North America</span>
                            </div>
                            <h3><span>Cheap flights to</span> <br />USA</h3>
                            <p className="offer-card-desc"> 
                                <span className="price"> from $558</span> <br />
                                <span>per person</span> 
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12 trending-citiesdis" >
                        <img src={require("../../images/india1.jpg")} className="img-fluid" />
                        <div className="city-overlay">
                            <div className="popularcity-loc">
                                <span><i className="fa fa-map-marker"></i>  Asia</span>
                            </div>
                            <h3><span>Cheap flights to</span> <br />India</h3>
                            <p className="offer-card-desc"> 
                                <span className="price"> from $346</span> <br />
                                <span>per person</span> 
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12 trending-citiesdis" >
                        <img src={require("../../images/thailand1.jpg")} className="img-fluid" />
                        <div className="city-overlay">
                            <div className="popularcity-loc">
                                <span><i className="fa fa-map-marker"></i>  Asia</span>
                            </div>
                            <h3><span>Cheap flights to</span> <br />Thailand</h3>
                            <p className="offer-card-desc"> 
                                <span className="price"> from $379</span> <br />
                                <span>per person</span> 
                            </p>
                        </div>
                    </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="row hidden-sm hidden-xs" >
                    <div className="col-md-2 col-sm-2 col-xs-12 offer-city">
                        <div className="popularcity-content">
                            <img src={require("../../images/india.jpg")} className="img-fluid" />
                            <div className="offer-overlay"></div>
                            <div className="country-name">
                                <span><i className="fa fa-map-marker"></i>  India</span>
                            </div>
                            <h3>Cheap flights to Delhi</h3>
                            <p className="offer-card-desc"> 
                                <span className="price"> from $345</span> <br />
                                <span>per person</span> 
                            </p>
                            <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-12 offer-city">
                        <div className="popularcity-content">
                            <img src={require("../../images/bangkok_1.jpg")} className="img-fluid" />
                            <div className="offer-overlay"></div>
                            <div className="country-name">
                                <span><i className="fa fa-map-marker"></i>  Bangkok</span>
                            </div>
                            <h3>Cheap flights to Bangkok</h3>
                            <p className="offer-card-desc"> 
                                <span className="price"> from $678</span> <br />
                                <span>per person</span> 
                            </p>
                            <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-12 offer-city">
                        <div className="popularcity-content">
                            <img src={require("../../images/Manila.jpg")} className="img-fluid" />
                            <div className="offer-overlay"></div>
                            <div className="country-name">
                                <span><i className="fa fa-map-marker"></i>   Manila</span>
                            </div>
                            <h3>Cheap flights to Manila</h3>
                            <p className="offer-card-desc"> 
                                <span className="price"> from $898</span> <br />
                                <span>per person</span> 
                            </p>
                            <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-12 offer-city">
                        <div className="popularcity-content">
                            <img src={require("../../images/Islamabad.jpg")} className="img-fluid" />
                            <div className="offer-overlay"></div>
                            <div className="country-name">
                                <span><i className="fa fa-map-marker"></i>  Islamabad</span>
                            </div>
                            <h3>Cheap flights to Islamabad</h3>
                            <p className="offer-card-desc"> 
                                <span className="price"> from $564</span> <br />
                                <span>per person</span> 
                            </p>
                            <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-12 offer-city">
                        <div className="popularcity-content">
                            <img src={require("../../images/hongkong.jpg")} className="img-fluid" />
                            <div className="offer-overlay"></div>
                            <div className="country-name">
                                <span><i className="fa fa-map-marker"></i>  Hong Kong</span>
                            </div>
                            <h3>Cheap flights to Hong Kong</h3>
                            <p className="offer-card-desc"> 
                                <span className="price"> from $787</span> <br />
                                <span>per person</span> 
                            </p>
                            <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-12 offer-city">
                        <div className="popularcity-content">
                            <img src={require("../../images/New South Wales.jpg")} className="img-fluid" />
                            <div className="offer-overlay"></div>
                            <div className="country-name">
                                <span><i className="fa fa-map-marker"></i>   New South Wales </span>
                            </div>
                            <h3>Cheap flights to Islamabad</h3>
                            <p className="offer-card-desc"> 
                                <span className="price"> from $546</span> <br />
                                <span>per person</span> 
                            </p>
                            <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col d-md-none visible-sm visible-xs" >
                        <div className="owl-carousel owl-theme" id="owl-carousel3">
                            <div className="item">
                                <div className="col-xs-12 offer-city">
                                <div className="popularcity-content">
                                    <img src={require("../../images/india.jpg")} className="img-fluid" />
                                    <div className="offer-overlay"></div>
                                    <div className="country-name">
                                        <span><i className="fa fa-map-marker"></i>  India</span>
                                    </div>
                                    <h3>Cheap flights to Delhi</h3>
                                    <p className="offer-card-desc"> 
                                        <span className="price"> from $898</span> <br />
                                        <span>per person</span> 
                                    </p>
                                    <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="col-xs-12 offer-city">
                                <div className="popularcity-content">
                                    <img src={require("../../images/bangkok_1.jpg")} className="img-fluid" />
                                    <div className="offer-overlay"></div>
                                    <div className="country-name">
                                        <span><i className="fa fa-map-marker"></i>  Bangkok</span>
                                    </div>
                                    <h3>Cheap flights to Bangkok</h3>
                                    <p className="offer-card-desc"> 
                                        <span className="price"> from $432</span> <br />
                                        <span>per person</span> 
                                    </p>
                                    <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="offer-city">
                                <div className="popularcity-content">
                                    <img src={require("../../images/Manila.jpg")} className="img-fluid" />
                                    <div className="offer-overlay"></div>
                                    <div className="country-name">
                                        <span><i className="fa fa-map-marker"></i>   Manila</span>
                                    </div>
                                    <h3>Cheap flights to Manila</h3>
                                    <p className="offer-card-desc"> 
                                        <span className="price"> from $345</span> <br />
                                        <span>per person</span> 
                                    </p>
                                    <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="offer-city">
                                <div className="popularcity-content">
                                    <img src={require("../../images/Islamabad.jpg")} className="img-fluid" />
                                    <div className="offer-overlay"></div>
                                    <div className="country-name">
                                        <span><i className="fa fa-map-marker"></i>  Islamabad</span>
                                    </div>
                                    <h3>Cheap flights to Islamabad</h3>
                                    <p className="offer-card-desc"> 
                                        <span className="price"> from $632</span> <br />
                                        <span>per person</span> 
                                    </p>
                                    <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="offer-city">
                                <div className="popularcity-content">
                                    <img src={require("../../images/hongkong.jpg")} className="img-fluid" />
                                    <div className="offer-overlay"></div>
                                    <div className="country-name">
                                        <span><i className="fa fa-map-marker"></i>  Hong Kong</span>
                                    </div>
                                    <h3>Cheap flights to Hong Kong</h3>
                                    <p className="offer-card-desc"> 
                                        <span className="price"> from $565</span> <br />
                                        <span>per person</span> 
                                    </p>
                                    <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="col-xs-12 offer-city">
                                <div className="popularcity-content">
                                    <img src={require("../../images/New South Wales.jpg")} className="img-fluid" />
                                    <div className="offer-overlay"></div>
                                    <div className="country-name">
                                        <span><i className="fa fa-map-marker"></i>   New South Wales </span>
                                    </div>
                                    <h3>Cheap flights to Islamabad</h3>
                                    <p className="offer-card-desc"> 
                                        <span className="price"> from $657</span> <br />
                                        <span>per person</span> 
                                    </p>
                                    <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="row trending-placelist">
                    <div className="col-md-2 col-sm-4 col-xs-6" >
                    <ul className="list-unstyled">
                        <li>Flights to Malaysia</li>
                        <li>Flights to South Africa</li>
                        <li>Flights to China</li>
                    </ul>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6" >
                    <ul className="list-unstyled">
                        <li>Flights to Switzerland</li>
                        <li>Flights to India</li>
                        <li>Flights to Egypt</li>
                    </ul>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6" >
                    <ul className="list-unstyled">
                        <li>Flights to New Zealand</li>
                        <li>Flights to Vietnam</li>
                        <li>Flights to Saudi Arabia</li>
                    </ul>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6" >
                    <ul className="list-unstyled">
                        <li>Flights to Hong Kong</li>
                        <li>Flights to Singapore</li>
                        <li>Flights to Sri Lanka</li>
                    </ul>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6" >
                    <ul className="list-unstyled">
                        <li>Flights to Greece</li>
                        <li>Flights to Japan</li>
                        <li>Flights to Bangladesh</li>
                    </ul>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6" >
                    <ul className="list-unstyled">
                        <li>Flights to USA</li>
                        <li>Flights to London</li>
                        <li>Flights to Europe</li>
                    </ul>
                    </div>
                    </div>
                </div>
            </div>
            


                 </div>


             

            </>
        );
    }
}

export default FlightComponent;