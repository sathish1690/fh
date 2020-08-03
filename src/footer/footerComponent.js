import React, { Component } from "react"

class FooterComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( <section className="footer">
        <div className="container">
           <p>The flight-inclusive holidays on this website which depart from the UK are financially protected by the ATOL scheme. 
           This website is intended primarily to residents of the UK and all bookings are subject to our terms and conditions found here. 
           But ATOL protection does not apply to all holiday and travel services listed (e.g car hire or accommodation only bookings).
           Please ask us to confirm what protection may apply to your booking. If you do not receive an ATOL certificate then the booking will not be ATOL protected. 
           If you do receive an ATOL Certificate but all the parts of your trip are not listed on it, those parts will not be protected. 
           Please see our booking conditions for information or for more information about financial protection and the ATOL certificate 
           go to: www.caa.co.uk/ATOLCertificate. 
           Please note: A fee applies to telephonic bookings.
           </p>
           <div className="row">
            <div className="col-md-6 col-sm-6"> 
                <span className="copyright">© Copyright 2020 All rights reserved</span>
            </div>
      <div className="col-sm-6 col-md-6 social-icons text-right ">
          <span className="followus"> Follow Us </span>
                   <a href=""><i class="fa fa-facebook-square"></i></a>
                   <a href=""><i class="fa fa-twitter-square"></i></a>
                   <a href=""><i class="fa fa-youtube-square"></i></a>
                   <a href=""><i class="fa fa-linkedin"></i></a></div>
    </div>
    </div>
           
     </section>);
    }
}

export default FooterComponent;