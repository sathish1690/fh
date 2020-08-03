import React, { Component } from "react"

class SidebarComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

           <div>
            <p className="filter-heading">Filter your results 
               <span className="pull-right search-clear">
               <a href="javascript:void(0)" onclick="selectAll()">Select All</a>
               <a href="javascript:void(0)" onclick="UnSelectAll()"> Clear All </a>
               <span>
            </span></span></p>
            <div id="faq" role="tablist" aria-multiselectable="true">
               <div className="card">
                  <div className="card-header" role="tab" id="questionOne1">
                     <h5 className="card-title">
                        <p><a role="button" data-toggle="collapse" data-parent="#faq" href="#answerOne1" aria-expanded="true" aria-controls="answerOne1">
                           <i className="fa fa-caret-down"></i> 
                           <span className="pull-left">Number of Stops</span>
                           </a>
                           <span className="pull-right"><a href="javascript:void(0)" onclick="uncheckAll()">Clear</a></span>
                        </p>
                     </h5>
                  </div>
                  <div id="answerOne1" className="collapse in" role="tabcard" aria-labelledby="questionOne1">
                     <div className="card-block">
                        <label className="check-container">Direct
                        <input type="checkbox" name="search-select" className="search-checkbox check1" />
                        <span className="checkmark"></span>
                        </label>
                        <label className="check-container">One Stop
                        <input type="checkbox" name="search-select" className="search-checkbox check1" />
                        <span className="checkmark"></span>
                        </label>
                        <label className="check-container">Two Stop
                        <input type="checkbox" name="search-select" className="search-checkbox check1" />
                        <span className="checkmark"></span>
                        </label>
                     </div>
                  </div>
               </div>
               <div className="card">
                  <div className="card-header" role="tab" id="questionTwo1">
                     <h5 className="card-title">
                        <p><a className="" data-toggle="collapse" data-parent="#faq" href="#answerTwo1" aria-expanded="true" aria-controls="answerTwo1">
                           <i className="fa fa-caret-down"></i> 
                           <span className="pull-left">Airlines</span>
                           </a>
                           <span className="pull-right"><a href="javascript:void(0)" onclick="uncheckAll1()">Clear</a></span>
                        </p>
                     </h5>
                  </div>
                  <div id="answerTwo1" className="collapse in" role="tabcard" aria-labelledby="questionTwo1">
                     <div className="card-block">
                        <label className="check-container">Emirates(9)
                        <input type="checkbox" name="search-select" className="search-checkbox check2" />
                        <span className="checkmark"></span>
                        </label>
                        <label className="check-container">Etihad Airways(5)
                        <input type="checkbox" name="search-select" className="search-checkbox check2" />
                        <span className="checkmark"></span>
                        </label>
                        <label className="check-container">Qatar Airways(10)
                        <input type="checkbox" name="search-select" className="search-checkbox check2" />
                        <span className="checkmark"></span>
                        </label>
                        <label className="check-container">Air India(4)
                        <input type="checkbox" name="search-select" className="search-checkbox check2" />
                        <span className="checkmark"></span>
                        </label>
                        <label className="check-container">Multi Carrier(6)
                        <input type="checkbox" name="search-select" className="search-checkbox check2" />
                        <span className="checkmark"></span>
                        </label>
                        <label className="check-container">Lufthansa(2)
                        <input type="checkbox" name="search-select" className="search-checkbox check2" />
                        <span className="checkmark"></span>
                        </label>
                        <label className="check-container">Oman Air(12)
                        <input type="checkbox" name="search-select" className="search-checkbox check2" />
                        <span className="checkmark"></span>
                        </label>
                        <label className="check-container">LTurkish Airlines(7)
                        <input type="checkbox" name="search-select" className="search-checkbox check2" />
                        <span className="checkmark"></span>
                        </label>
                     </div>
                  </div>
               </div>
               <div className="card">
                  <div className="card-header" role="tab" id="questionThree1">
                     <h5 className="card-title">
                        <p><a className="" data-toggle="collapse" data-parent="#faq" href="#answerThree1" aria-expanded="true" aria-controls="answerThree1">
                           <i className="fa fa-caret-down"></i> 
                           <span className="pull-left">Outbound Departure Time range</span>
                           </a>
                           <span className="pull-right"><a href="javascript:void(0)" onclick="uncheckAll2()">Clear</a></span>
                        </p>
                     </h5>
                  </div>
                  <div id="answerThree1" className="collapse in" role="tabcard" aria-labelledby="questionThree1">
                     <div className="card-block">
                        <label className="check-container">Early
                        <input type="checkbox" name="search-select" className="search-checkbox check3" />
                        <span className="checkmark"></span>
                        </label>
                        <label className="check-container">Morning
                        <input type="checkbox" name="search-select" className="search-checkbox check3" />
                        <span className="checkmark"></span>
                        </label>
                        <label className="check-container">Afternoon
                        <input type="checkbox" name="search-select" className="search-checkbox check3" />
                        <span className="checkmark"></span>
                        </label>
                        <label className="check-container">Evening
                        <input type="checkbox" name="search-select" className="search-checkbox check3" />
                        <span className="checkmark"></span>
                        </label>
                        <label className="check-container">Night
                        <input type="checkbox" name="search-select" className="search-checkbox check3" />
                        <span className="checkmark"></span>
                        </label>
                     </div>
                  </div>
               </div>
               <div className="card">
                  <div className="card-header" role="tab" id="questionFour1">
                     <h5 className="card-title">
                        <p><a className="" data-toggle="collapse" data-parent="#faq" href="#answerFour1" aria-expanded="true" aria-controls="answerFour1">
                           <i className="fa fa-caret-down"></i> 
                           <span className="pull-left">Trip Duration</span>
                           </a>
                           <span className="pull-right clear-sec"><a href="javascript:void(0)" onclick="uncheckAll3()">Clear</a></span>
                        </p>
                     </h5>
                  </div>
                  <div id="answerFour1" className="collapse in" role="tabcard" aria-labelledby="questionFour1">
                     <div className="card-block">
                        <label className="check-container">Really fast
                        <input type="checkbox" name="search-select" className="search-checkbox check4" />
                        <span className="checkmark"></span>
                        </label>
                        <label className="check-container">Fast
                        <input type="checkbox" name="search-select" className="search-checkbox check4" />
                        <span className="checkmark"></span>
                        </label>
                        <label className="check-container">Average
                        <input type="checkbox" name="search-select" className="search-checkbox check4" />
                        <span className="checkmark"></span>
                        </label>
                        <label className="check-container">Slow
                        <input type="checkbox" name="search-select" className="search-checkbox check4" />
                        <span className="checkmark"></span>
                        </label>
                        <label className="check-container">Really Slow
                        <input type="checkbox" name="search-select" className="search-checkbox check4" />
                        <span className="checkmark"></span>
                        </label>
                     </div>
                  </div>
               </div>
               <div className="card">
                  <div className="card-header" role="tab" id="questionFive1">
                     <h5 className="card-title">
                        <p><a className="" data-toggle="collapse" data-parent="#faq" href="#answerFive1" aria-expanded="true" aria-controls="answerFive1">
                           <i className="fa fa-caret-down"></i> 
                           <span className="pull-left">Outbound Duration</span>
                           </a>
                           <span className="pull-right clear-sec"><a href="javascript:void(0)">Clear</a></span>
                        </p>
                     </h5>
                  </div>
                  <div id="answerFive1" className="collapse in" role="tabcard" aria-labelledby="questionFive1">
                     <div className="card-block" style="margin-bottom:20px;">
                        <p className="text-center">
                           <label id="something1" readonly="" style="border:0; color:#0e508e; font-weight:bold; text-align:center;">00hrs:00mins</label>
                        </p>
                        <div id="slider-range2" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false"><div className="ui-slider-range ui-widget-header ui-corner-all" style="left: 0%; width: 0%;"></div><a className="ui-slider-handle ui-state-default ui-corner-all" href="#" style="left: 0%;"></a><a className="ui-slider-handle ui-state-default ui-corner-all" href="#" style="left: 0%;"></a></div>
                     </div>
                  </div>
               </div>
               <div className="card">
                  <div className="card-header" role="tab" id="questionSix1">
                     <h5 className="card-title">
                        <p><a className="" data-toggle="collapse" data-parent="#faq" href="#answerSix1" aria-expanded="true" aria-controls="answerSix1">
                           <i className="fa fa-caret-down"></i> 
                           <span className="pull-left">Price Per Person</span>
                           </a>
                           <span className="pull-right clear-sec"><a href="javascript:void(0)">Clear</a></span>
                        </p>
                     </h5>
                  </div>
                  <div id="answerSix1" className="collapse in" role="tabcard" aria-labelledby="questionSix1">
                     <div className="card-block" style="margin-bottom:20px;">
                        <p className="text-center">
                           <input type="text" id="amount1" readonly="" style="border:0; color:#0e508e; font-weight:bold; text-align:center;" />
                        </p>
                        <div id="slider-range3" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false"><div className="ui-slider-range ui-widget-header ui-corner-all" style="left: 0%; width: 100%;"></div><a className="ui-slider-handle ui-state-default ui-corner-all" href="#" style="left: 0%;"></a><a className="ui-slider-handle ui-state-default ui-corner-all" href="#" style="left: 100%;"></a></div>
                     </div>
                  </div>
               </div>
               <div className="card">
                  <div className="card-header" role="tab" id="questionSeven1">
                     <h5 className="card-title">
                        <p><a className="" data-toggle="collapse" data-parent="#faq" href="#answerSeven1" aria-expanded="true" aria-controls="answerSeven1">
                           <i className="fa fa-caret-down"></i> 
                           <span className="pull-left">Routehappy Score</span>
                           </a>
                           <span className="pull-right clear-sec"><a href="javascript:void(0)" onclick="uncheckAll4()">Clear</a></span>
                        </p>
                     </h5>
                  </div>
                  <div id="answerSeven1" className="collapse in" role="tabcard" aria-labelledby="questionSeven1">
                     <div className="card-block">
                        <label className="check-container">Excellent
                        <input type="checkbox" name="search-select" className="search-checkbox check5" />
                        <span className="checkmark"></span>
                        </label>
                        <label className="check-container">Very Good
                        <input type="checkbox" name="search-select" className="search-checkbox check5" />
                        <span className="checkmark"></span>
                        </label>
                        <label className="check-container">Good
                        <input type="checkbox" name="search-select" className="search-checkbox check5" />
                        <span className="checkmark"></span>
                        </label>
                        <label className="check-container">Okay
                        <input type="checkbox" name="search-select" className="search-checkbox check5" />
                        <span className="checkmark"></span>
                        </label>
                        <label className="check-container">Fair
                        <input type="checkbox" name="search-select" className="search-checkbox check5" />
                        <span className="checkmark"></span>
                        </label>
                        <label className="check-container">Poor
                        <input type="checkbox" name="search-select" className="search-checkbox check5" />
                        <span className="checkmark"></span>
                        </label>
                     </div>
                  </div>
               </div>
            </div>
         </div>
            );
    }
}

export default SidebarComponent;