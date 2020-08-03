import React, { Component } from "react"
import { NavLink } from "react-router-dom";
class PageNotFoundComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container my-5">
                <section id="error-page-not-found">
                    <div className="row">
                        <div className="col-12">
                            <img
                                src={"/404_imge.svg"}
                                className="img-fluid mx-auto d-block"
                            />
                        </div>
                        <div className="col-12 mt-5">
                            <h6 className="text-center">SORRY, THE PAGE NOT FOUND</h6>
                        </div>
                        <div className="col-12">
                            <p className="text-center">
                                The page you are looking might have been removed, had its name
                                changed or its temporarily unavailable
              </p>
                        </div>
                        <NavLink
                            to="/"
                            className="col-12 text-center mb-md-5 mt-md-3 my-5"
                        >
                            <button className="btn btn-lg">GO HOME</button>
                        </NavLink>
                    </div>
                </section>
            </div>);
    }
}

export default PageNotFoundComponent;