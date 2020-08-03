import React, { Component } from "react"
import hotel from "./hotelComponent"

class HotelComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNo: 0,
            hotel: []
            
        }
    }

    render() {
        return (
            <>
                <div className="container-fluid hotel-banner">
         <div className="banner-overlay">
            <div className="col-md-12 text-center" id="holidays">
                  <div className="container">
                     <div className="row" id="holidays-dis">
                        <div className="col-md-10 return-cty">
                            <div className="row">
                           <div className="form-group col-md-4">
                              <span className="label-input"><label>Destination</label></span>
                              <input type="text" className="form-control" id="destination" placeholder="" />
                              <i className="material-icons">hotel</i>
                           </div>
                           <div className="form-group col-md-4">
                              <input type="text" name="book-date" className="form-control br-1" placeholder="mm/dd/yyyy" readonly="readonly" />
                              <i className="material-icons">date_range</i>
                           </div>
                           <div className="form-group col-md-4">
                           <span className="label-input"><label>Passenger</label></span>
                              <input type="dropdown" className="form-control" id="destination" placeholder="" />
                              <i className="material-icons">people</i>
                           </div>
                           </div>
                        </div>
                        <div className="form-group col-md-2">
                            <a href="hotel-search.html"> <button className="btn btn-success btn-livesearch">Find hotels</button></a>
                        </div>
                     </div>
                  </div>
            </div>
         </div>
      </div>
                <div className="container-fluid flight-offer">
         <div className="container">
             
            <h2 className="text-center">Latest hotel offers</h2>
            <p className="text-center">Worldwide, we've got you covered</p>
            <div className="col-md-12 col-sm-12 col-xs-12 flight-offer-dtls">
                <div className="row">
               <div className="col-md-4 col-sm-4 col-xs-12 trending-citiesdis">
                  <img src={require("../../images/northamr.jpg")} className="img-fluid" />
                  <div className="city-overlay">
                     <div className="popularcity-loc">
                        <span><i className="fa fa-map-marker"></i> North America</span>
                     </div>
                     <h3>5 <i className="fa fa-star"></i> Westgate Lakes, Orlando</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $558</span> <br />
                        <span>per person</span> 
                     </p>
                  </div>
               </div>
               <div className="col-md-4 col-sm-4 col-xs-12 trending-citiesdis">
                  <img src={require("../../images/india1.jpg")} className="img-fluid" />
                  <div className="city-overlay">
                     <div className="popularcity-loc">
                        <span><i className="fa fa-map-marker"></i>  Asia</span>
                     </div>
                     <h3>4 <i className="fa fa-star"></i> Westgate Lakes, Orlando</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $346</span> <br />
                        <span>per person</span> 
                     </p>
                  </div>
               </div>
               <div className="col-md-4 col-sm-4 col-xs-12 trending-citiesdis">
                  <img src={require("../../images/thailand1.jpg")} className="img-fluid" />
                  <div className="city-overlay">
                     <div className="popularcity-loc">
                        <span><i className="fa fa-map-marker"></i>  Asia</span>
                     </div>
                     <h3>3 <i className="fa fa-star"></i> Westgate Lakes, Orlando</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $379</span> <br />
                        <span>per person</span> 
                     </p>
                  </div>
               </div>
               </div>
            </div>
            <div className="clearfix"></div>
            <div className="col-md-12 col-sm-12 col-xs-12  d-xs-none">
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
               <div className="col-xs-12 d-md-none visible-sm visible-xs">
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
                <div className="container-fluid popular-cities">
                    <div className="container">
                        <div className="col-md-12 col-sm-12 col-xs-12 flight-offer-dtls">
                        <h2 className="text-center">Cheap hotels in popular cities</h2>
                        <p className="text-center">Find more hotels in great destinations</p>
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12 popular-citiesdis">
                                <img src={require("../../images/dubai.jpg")} className="img-fluid" />
                                <div className="city-overlay">
                                    <div className="popularcity-loc">
                                        <span><i className="fa fa-map-marker"></i>  Dubai</span>
                                    </div>
                                    <h3><span>Hotels in </span> <br />Dubai</h3>
                                    <p className="offer-card-desc"> 
                                        <span className="price"> 3 <i className="fa fa-star"></i> from $558</span> <br />
                                        <span>per person</span> 
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12 popular-citiesdis">
                                <img src={require("../../images/maldives.jpg")} className="img-fluid" />
                                <div className="city-overlay">
                                    <div className="popularcity-loc">
                                        <span><i className="fa fa-map-marker"></i>  Maldives</span>
                                    </div>
                                    <h3><span>Hotels in </span> <br />Maldives</h3>
                                    <p className="offer-card-desc"> 
                                        <span className="price"> 4 <i className="fa fa-star"></i>  from $456</span> <br />
                                        <span>per person</span> 
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12 popular-citiesdis">
                            <img src={require("../../images/srilanka.jpg")} className="img-fluid" />
                            <div className="city-overlay">
                                <div className="popularcity-loc">
                                    <span><i className="fa fa-map-marker"></i>  Sri lanka</span>
                                </div>
                                <h3><span>Hotels in </span> <br />Sri lanka</h3>
                                <p className="offer-card-desc"> 
                                    <span className="price"> 5 <i className="fa fa-star"></i>  from $569</span> <br />
                                    <span>per person</span> 
                                </p>
                            </div>
                        </div>
                         </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-md-12 col-sm-12 col-xs-12 d-xs-none">
                        <div className="row">
                            <div className="col-md-2 col-sm-2 col-xs-12 offer-city">
                                <div className="popularcity-content">
                                    <img src={require("../../images/india.jpg")} className="img-fluid" />
                                    <div className="offer-overlay"></div>
                                    <div className="country-name">
                                        <span><i className="fa fa-map-marker"></i>  India</span>
                                    </div>
                                    <h3>Hotels in  Delhi</h3>
                                    <p className="offer-card-desc"> 
                                        <span className="price">3 <i className="fa fa-star"></i>  from $345</span> <br />
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
                                    <h3>Hotels in  Bangkok</h3>
                                    <p className="offer-card-desc"> 
                                        <span className="price">4 <i className="fa fa-star"></i>  from $678</span> <br />
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
                                    <h3>Hotels in  Manila</h3>
                                    <p className="offer-card-desc"> 
                                        <span className="price">5 <i className="fa fa-star"></i>  from $898</span> <br />
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
                                    <h3>Hotels in  Islamabad</h3>
                                    <p className="offer-card-desc"> 
                                        <span className="price">5 <i className="fa fa-star"></i>  from $564</span> <br />
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
                                    <h3>Hotels in  Hong Kong</h3>
                                    <p className="offer-card-desc"> 
                                        <span className="price"> 3 <i className="fa fa-star"></i>  from $787</span> <br />
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
                                <h3>Hotels in  Islamabad</h3>
                                <p className="offer-card-desc"> 
                                    <span className="price"> 5 <i className="fa fa-star"></i>  from $546</span> <br />
                                    <span>per person</span> 
                                </p>
                                <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                            </div>
                        </div>
                          </div>
                        </div>
                        <div className="row">
                        <div className="col-xs-12 d-md-none visible-sm visible-xs">
                               <div className="demo">  


    </div>  
                        </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid ourbestairlines">
                    <div className="container">
                        <div className="col-md-12 col-sm-12 col-xs-12 flight-offer-dtls">
                        <h2 className="text-center">Cheap hotels in popular countries</h2>
                        <p className="text-center">Find more hotels in great destinations</p>
                         <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12 trending-citiesdis">
                                <img src={require("../../images/northamr.jpg")} className="img-fluid" />
                                <div className="city-overlay">
                                    <div className="popularcity-loc">
                                        <span><i className="fa fa-map-marker"></i> North America</span>
                                    </div>
                                    <h3><span>Hotels in </span> <br />USA</h3>
                                    <p className="offer-card-desc"> 
                                        <span className="price"> 3 <i className="fa fa-star"></i> from $558</span> <br />
                                        <span>per person</span> 
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12 trending-citiesdis">
                                <img src={require("../../images/india1.jpg")} className="img-fluid" />
                                <div className="city-overlay">
                                    <div className="popularcity-loc">
                                        <span><i className="fa fa-map-marker"></i>  Asia</span>
                                    </div>
                                    <h3><span>Hotels in </span> <br />India</h3>
                                    <p className="offer-card-desc"> 
                                        <span className="price"> 3 <i className="fa fa-star"></i> from $346</span> <br />
                                        <span>per person</span> 
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12 trending-citiesdis">
                            <img src={require("../../images/thailand1.jpg")} className="img-fluid" />
                            <div className="city-overlay">
                                <div className="popularcity-loc">
                                    <span><i className="fa fa-map-marker"></i>  Asia</span>
                                </div>
                                <h3><span>Hotels in </span> <br />Thailand</h3>
                                <p className="offer-card-desc"> 
                                    <span className="price"> 3 <i className="fa fa-star"></i> from $379</span> <br />
                                    <span>per person</span> 
                                </p>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-md-12 col-sm-12 col-xs-12 d-xs-none">
                            <div className="row">
                        <div className="col-md-2 col-sm-2 col-xs-12 offer-city">
                            <div className="popularcity-content">
                                <img src={require("../../images/india.jpg")} className="img-fluid" />
                                <div className="offer-overlay"></div>
                                <div className="country-name">
                                    <span><i className="fa fa-map-marker"></i>  India</span>
                                </div>
                                <h3>Hotels in  Delhi</h3>
                                <p className="offer-card-desc"> 
                                    <span className="price"> 3 <i className="fa fa-star"></i> from $345</span> <br />
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
                                <h3>Hotels in  Bangkok</h3>
                                <p className="offer-card-desc"> 
                                    <span className="price"> 3 <i className="fa fa-star"></i> from $678</span> <br />
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
                                <h3>Hotels in  Manila</h3>
                                <p className="offer-card-desc"> 
                                    <span className="price">3 <i className="fa fa-star"></i>  from $898</span> <br />
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
                                <h3>Hotels in  Islamabad</h3>
                                <p className="offer-card-desc"> 
                                    <span className="price"> 3 <i className="fa fa-star"></i> from $564</span> <br />
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
                                <h3>Hotels in  Hong Kong</h3>
                                <p className="offer-card-desc"> 
                                    <span className="price"> 3 <i className="fa fa-star"></i> from $787</span> <br />
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
                                <h3>Hotels in  Islamabad</h3>
                                <p className="offer-card-desc"> 
                                    <span className="price">3 <i className="fa fa-star"></i>  from $546</span> <br />
                                    <span>per person</span> 
                                </p>
                                <p className="text-center findflights"><a href="" className="btn btn-primary">Find Flights</a></p>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-xs-12 d-md-none visible-sm visible-xs">
                            <div className="owl-carousel owl-theme" id="owl-carousel3">
                                <div className="item">
                                    <div className="col-xs-12 offer-city">
                                    <div className="popularcity-content">
                                        <img src={require("../../images/india.jpg")} className="img-fluid" />
                                        <div className="offer-overlay"></div>
                                        <div className="country-name">
                                            <span><i className="fa fa-map-marker"></i>  India</span>
                                        </div>
                                        <h3>Hotels in  Delhi</h3>
                                        <p className="offer-card-desc"> 
                                            <span className="price"> 3 <i className="fa fa-star"></i> from $898</span> <br />
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
                                        <h3>Hotels in  Bangkok</h3>
                                        <p className="offer-card-desc"> 
                                            <span className="price"> 3 <i className="fa fa-star"></i> from $432</span> <br />
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
                                        <h3>Hotels in  Manila</h3>
                                        <p className="offer-card-desc"> 
                                            <span className="price"> 3 <i className="fa fa-star"></i> from $345</span> <br />
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
                                        <h3>Hotels in  Islamabad</h3>
                                        <p className="offer-card-desc"> 
                                            <span className="price"> 3 <i className="fa fa-star"></i> from $632</span> <br />
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
                                        <h3>Hotels in  Hong Kong</h3>
                                        <p className="offer-card-desc"> 
                                            <span className="price">3 <i className="fa fa-star"></i>  from $565</span> <br />
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
                                        <h3>Hotels in Islamabad</h3>
                                        <p className="offer-card-desc"> 
                                            <span className="price"> 3 <i className="fa fa-star"></i> from $657</span> <br />
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
                <div className="container-fluid trending-flights">
                    <div className="container">
                    <h2 className="text-center">Looking for somewhere else?</h2>
                        <p className="text-center">Choose from our wide range of destinations</p>
                        <div className="col-md-12 col-sm-12 col-xs-12 flight-offer-dtls">
                            <div className="row">
                        <div className="col-md-4">
                            <img src={require("../../images/holidayextras.jpg")} className="img-fluid" />
                        </div>
                        <div className="col-md-4">
                            <img src={require("../../images/attraction-world.jpg")} className="img-fluid" />
                        </div>
                        <div className="col-md-4">
                        <img src={require("../../images/insurance.jpg")} className="img-fluid" />
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            </>
        );
    }
}

export default HotelComponent;