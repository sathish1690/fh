import React, { Component } from "react"
import { getfhData } from "./fhComponent"

class FhComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNo: 0,
            fh: []
        }
    }
    render() {
        return (
            <>
     <div className="container-fluid banner-sec holiday-banner">
         <div className="banner-overlay">
            <div className="col-md-12 text-center" id="holidays">
                  <div className="container">
                     <div className="row" id="holidays-dis" >
                        <div className="col-md-10 return-cty">
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
                              <input type="text" name="book-date" className="form-control br-1" placeholder="mm/dd/yyyy" readonly="readonly" />
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
                          <a href="holiday-search.html"> <button className="btn btn-success btn-livesearch">Find holidays</button></a>
                        </div>
                     </div>
                  </div>
            </div>
         </div>
      </div>
      <div className="container-fluid latest-holiday">
         <div className="container">
            <h2 className="text-center">Latest holiday offers</h2>
            <p className="text-center">See our exclusive deals and super savings</p>
           
            <div className="col-md-12 col-sm-12 col-xs-12 hidden-sm hidden-xs" >
                <div className="row">
                <div className="col-md-2 col-sm-2 col-xs-12 offer-city">
                  <div className="offer-content">
                     <img src={require("../../images/Manila.jpg")} className="img-fluid" />
                     <div className="offer-overlay"></div>
                     <h3>4 <i className="fa fa-star"></i> Westgate Lakes, Orlando</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $378</span> <br />
                        <span>per person</span> 
                     </p>
                     <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                  </div>
               </div>
               <div className="col-md-2 col-sm-2 col-xs-12 offer-city">
                  <div className="offer-content">
                     <img src={require("../../images/india.jpg")} className="img-fluid" />
                     <div className="offer-overlay"></div>
                    <h3>3 <i className="fa fa-star"></i> Westgate Lakes, Orlando</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $788</span> <br />
                        <span>per person</span> 
                     </p>
                     <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                  </div>
               </div>
               <div className="col-md-2 col-sm-2 col-xs-12 offer-city">
                  <div className="offer-content">
                     <img src={require("../../images/bangkok_1.jpg")} className="img-fluid" />
                     <div className="offer-overlay"></div>
						<h3>5 <i className="fa fa-star"></i> Westgate Lakes, Orlando</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $458</span> <br />
                        <span>per person</span> 
                     </p>
                     <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                  </div>
               </div>
               <div className="col-md-2 col-sm-2 col-xs-12 offer-city">
                  <div className="offer-content">
                     <img src={require("../../images/Manila.jpg")} className="img-fluid" />
                     <div className="offer-overlay"></div>
                     <h3>3 <i className="fa fa-star"></i> Westgate Lakes, Orlando</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $378</span> <br />
                        <span>per person</span> 
                     </p>
                     <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                  </div>
               </div>
               <div className="col-md-2 col-sm-2 col-xs-12 offer-city">
                  <div className="offer-content">
                     <img src={require("../../images/Islamabad.jpg")} className="img-fluid" />
                     <div className="offer-overlay"></div>
						<h3>5 <i className="fa fa-star"></i> Westgate Lakes, Orlando</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $670</span> <br />
                        <span>per person</span> 
                     </p>
                     <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                  </div>
               </div>
			    <div className="col-md-2 col-sm-2 col-xs-12 offer-city">
                  <div className="offer-content">
                     <img src={require("../../images/Manila.jpg")} className="img-fluid" />
                     <div className="offer-overlay"></div>
						<h3>3 <i className="fa fa-star"></i> Westgate Lakes, Orlando</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $378</span> <br />
                        <span>per person</span> 
                     </p>
                     <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                  </div>
               </div>
               </div>
            </div>
            <div className="clearfix"></div>
            <div className="row">
               <div className="col-xs-12 d-md-none visible-sm visible-xs" >
                  <div className="owl-carousel owl-theme" id="owl-carousel">
                     <div className="item">
                        <div className="col-xs-12 offer-city">
                           <div className="offer-content">
                              <img src={require("../../images/india.jpg")} className="img-fluid" />
                              <div className="offer-overlay"></div>
                              <h3>4 <i className="fa fa-star"></i> Westgate Lakes, Orlando</h3>
                              <p className="offer-card-desc"> 
                                 <span className="price"> from $778</span> <br />
                                 <span>per person</span> 
                              </p>
                              <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                           </div>
                        </div>
                     </div>
                     <div className="item">
                        <div className="col-xs-12 offer-city">
                           <div className="offer-content">
                              <img src={require("../../images/bangkok_1.jpg")} className="img-fluid" />
                              <div className="offer-overlay"></div>
                            
                             <h3>3 <i className="fa fa-star"></i> Westgate Lakes, Orlando</h3>
                              <p className="offer-card-desc"> 
                                 <span className="price"> from $458</span> <br />
                                 <span>per person</span> 
                              </p>
                              <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                           </div>
                        </div>
                     </div>
                     <div className="item">
                        <div className="offer-city">
                           <div className="offer-content">
                              <img src={require("../../images/Manila.jpg")} className="img-fluid" />
                              <div className="offer-overlay"></div>
                              
                              <h3>5 <i className="fa fa-star"></i> Westgate Lakes, Orlando</h3>
                              <p className="offer-card-desc"> 
                                 <span className="price"> from $378</span> <br />
                                 <span>per person</span> 
                              </p>
                              <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                           </div>
                        </div>
                     </div>
                     <div className="item">
                        <div className="col-xs-12 offer-city">
                           <div className="offer-content">
                              <img src={require("../../images/Islamabad.jpg")} className="img-fluid" />
                              <div className="offer-overlay"></div>
                              <h3>3 <i className="fa fa-star"></i> Westgate Lakes, Orlando</h3>
                              <p className="offer-card-desc"> 
                                 <span className="price"> from $778</span> <br />
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
      <div className="container-fluid holiday-hotlist">
         <div className="container">
            <div className="col-md-12 col-sm-12 col-xs-12 flight-offer-dtls">
               <h2 className="text-center">Holiday hotlist</h2>
               <p className="text-center">Be inspired by our hottest holiday offers</p>
            <div className="row">
                     <div className="col-md-4 item">
					   <img src={require("../../images/holidayhotlist/1.jpg")} className="img-fluid" />
                     </div>
                     <div className="col-md-4 item">
					   <img src={require("../../images/holidayhotlist/2.jpg")} className="img-fluid" />
                     </div>
                     <div className="col-md-4 item">
					   <img src={require("../../images/holidayhotlist/3.jpg")} className="img-fluid" />
                     </div>
            </div>
		</div>
        </div>
      </div>
      <div className="container-fluid holiday-favourate">
         <div className="container">
         <div className="col-md-12 col-sm-12 col-xs-12 flight-offer-dtls">
            <h2 className="text-center">Looking for inspiration?</h2>
            <p className="text-center">Take a look at these holiday favourites</p>
              <div className="row">
               <div className="col-md-4 col-sm-4 col-xs-12 trending-citiesdis" >
                  <img src={require("../../images/northamr.jpg")} className="img-fluid" />
                  <div className="city-overlay">
                     <h3>USA</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $558</span> <br />
                        <span>per person</span> 
                     </p>
                  </div>
               </div>
               <div className="col-md-4 col-sm-4 col-xs-12 trending-citiesdis" >
                  <img src={require("../../images/india1.jpg")} className="img-fluid" />
                  <div className="city-overlay">
                     
                     <h3>India</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $346</span> <br />
                        <span>per person</span> 
                     </p>
                  </div>
               </div>
               <div className="col-md-4 col-sm-4 col-xs-12 trending-citiesdis" >
                  <img src={require("../../images/thailand1.jpg")} className="img-fluid" />
                  <div className="city-overlay">
                    
                     <h3>Thailand</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $379</span> <br />
                        <span>per person</span> 
                     </p>
                  </div>
               </div>
             </div>
            </div>
            <div className="clearfix"></div>
            <div className="col-md-12 col-sm-12 col-xs-12 d-xs-none" >
               <div className="row">
               <div className="col-md-2 col-sm-2 col-xs-12 offer-city">
                  <div className="popularcity-content">
                     <img src={require("../../images/india.jpg")} className="img-fluid" />
                     <div className="offer-overlay"></div>
                     
                     <h3>Delhi</h3>
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
                    
                     <h3>Bangkok</h3>
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
                     
                     <h3>Manila</h3>
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
                     
                     <h3>Islamabad</h3>
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
                     
                     <h3>Hong Kong</h3>
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
                     
                     <h3>Islamabad</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $546</span> <br />
                        <span>per person</span> 
                     </p>
                     <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                  </div>
               </div>
               </div>
            </div>
		  <div className="row">
               <div className="col-xs-12 d-md-none visible-sm visible-xs" >
                  <div className="owl-carousel owl-theme" id="owl-carousel3">
                     <div className="item">
                        <div className="col-xs-12 offer-city">
                           <div className="popularcity-content">
                              <img src={require("../../images/india.jpg")} className="img-fluid" />
                              <div className="offer-overlay"></div>
                              
                              <h3>Delhi</h3>
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
                              
                              <h3>Bangkok</h3>
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
                             
                              <h3>Manila</h3>
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
                              
                              <h3>Islamabad</h3>
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
                              
                              <h3>Hong Kong</h3>
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
                              <h3>Islamabad</h3>
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
             </>
        );
    }
}

export default FhComponent;