import React, { Component } from "react"
import { getcarData } from "./carComponent"


class CarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNo: 0,
            car: []
            
        }
    }

    render() {
        return (
            <>
          <div className="container-fluid banner-sec">
         <div className="banner-overlay">
            
            
            <div className="col-md-12 text-center" id="holidays">
                  <div className="container">
				   
                     <div className="row" id="holidays-dis">
                        <div className="col-md-10 return-cty">
						  <div className="row">
                           <div className="form-group col-md-3">
                              <span className="label-input"><label>Pick-up location</label></span>
                              <input type="text" className="form-control" id="departure" placeholder="" />
                              <i className="material-icons">directions_car</i>
                           </div>
                           <div className="form-group col-md-3">
                              <span className="label-input"><label>Drop-off location</label></span>
                              <input type="text" className="form-control" id="destination" placeholder="" />
                              <i className="material-icons">directions_car</i>
                           </div>
                           <div className="form-group col-md-3">
                             <input type="text" name="book-date" className="form-control br-1" placeholder="mm/dd/yyyy" readonly="readonly" />
                              <i className="material-icons">date_range</i>
                           </div>
                           <div className="form-group col-md-3">
						       <span className="label-input"><label>Driver's age</label></span>
                              <input type="dropdown" className="form-control" id="destination" placeholder="" />
                              <i className="material-icons">people</i>
                           </div>
						   </div>
                        </div>
                        <div className="form-group col-md-2">
                           <a href="car-search.html"><button className="btn btn-success btn-livesearch">Find cars</button></a>
                        </div>
                     </div>
                  </div>
            </div>
         </div>
      </div>
      
      <div className="container-fluid popular-cities">
         <div className="container">
            <div className="col-md-12 col-sm-12 col-xs-12 flight-offer-dtls">
               <h2 className="text-center">Cheap car hire in popular destinations</h2>
               <p className="text-center">Compare car hire prices for your holiday</p>
			   <div className="row">
               <div className="col-md-4 col-sm-4 col-xs-12 popular-citiesdis" >
                  <img src={require("../../images/dubai.jpg")} className="img-fluid" />
                  <div className="city-overlay">
                    
                     <h3>Dubai</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $558</span> <br />
                        <span>per day</span> 
                     </p>
                  </div>
               </div>
               <div className="col-md-4 col-sm-4 col-xs-12 popular-citiesdis" >
                  <img src={require("../../images/maldives.jpg")} className="img-fluid" />
                  <div className="city-overlay">
                     
                     <h3>Maldives</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $456</span> <br />
                        <span>per day</span> 
                     </p>
                  </div>
               </div>
               <div className="col-md-4 col-sm-4 col-xs-12 popular-citiesdis" >
                  <img src={require("../../images/srilanka.jpg")} className="img-fluid" />
                  <div className="city-overlay">
                     
                     <h3>Sri lanka</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $569</span> <br />
                        <span>per day</span> 
                     </p>
                  </div>
               </div>
            </div>
			</div>
            <div className="clearfix"></div>
			<div className="col-md-12 col-sm-12 col-xs-12 flight-offer-dtls">
			 <div class="row">
            <div className="col-md-4 col-sm-4 col-xs-12 trending-citiesdis" >
                  <img src={require("../../images/northamr.jpg")} className="img-fluid" />
                  <div className="city-overlay">
                     
                     <h3>USA</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $558</span> <br />
                        <span>per day</span> 
                     </p>
                  </div>
               </div>
               <div className="col-md-4 col-sm-4 col-xs-12 trending-citiesdis" >
                  <img src={require("../../images/india1.jpg")} className="img-fluid" />
                  <div className="city-overlay">
                    
                     <h3>India</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $346</span> <br />
                        <span>per day</span> 
                     </p>
                  </div>
               </div>
               <div className="col-md-4 col-sm-4 col-xs-12 trending-citiesdis" >
                  <img src={require("../../images/thailand1.jpg")} className="img-fluid" />
                  <div className="city-overlay">
                     
                     <h3>Thailand</h3>
                     <p className="offer-card-desc"> 
                        <span className="price"> from $379</span> <br />
                        <span>per day</span> 
                     </p>
                  </div>
               </div>
         </div>	
		 </div>
		  <div className="col-md-12 col-sm-12 col-xs-12 airline-list">
		    <div class="row">
			<div className="col-md-2 col-sm-4 col-xs-6" >
			   <ul className="list-unstyled">
				 <li>American Airlines</li>
				  <li>Garuda Indonesia</li>
				 <li>Austrian Airlines</li>
				<li>United Airlines</li>
			   </ul>
			</div>
			<div className="col-md-2 col-sm-4 col-xs-6" >
			   <ul className="list-unstyled">
				 <li>Ethiopian Airlines</li>
				  <li>KLM</li>
				 <li>EVA Air</li>
				<li>Lufthansa</li>
			   </ul>
			</div>
			<div className="col-md-2 col-sm-4 col-xs-6" >
			   <ul className="list-unstyled">
				 <li>TAP Air Portugal</li>
				  <li>LATAM</li>
				 <li>Qantas</li>
				<li>Cathay Pacific</li>
			   </ul>
			</div>
			<div className="col-md-2 col-sm-4 col-xs-6" >
			   <ul className="list-unstyled">
				<li>Air China</li>
				  <li>Royal Jordanian Airlines</li>
				 <li>Brussels Airlines</li>
				<li>Norwegian Air UK</li>
			   </ul>
			</div>
			<div className="col-md-2 col-sm-4 col-xs-6" >
			   <ul className="list-unstyled">
				<li>Delta Air Lines</li>
				<li>Malaysia Airlines</li>
				 <li>FlyBe</li>
				<li>Turkish Airlines</li>
			   </ul>
			</div>
			<div className="col-md-2 col-sm-4 col-xs-6" >
			   <ul className="list-unstyled">
				<li>Egyptair</li>
				<li>West Jet</li>
				 <li>Oman Air</li>
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

export default CarComponent;