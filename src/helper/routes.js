import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import lazyLoading from "./lazyLoading";


const FlightComponent = lazyLoading(() =>
    import("../views/flight/flightComponent").then(
        module => module.default
    )
);
const HotelComponent = lazyLoading(() =>
    import("../views/hotel/hotelComponent").then(
        module => module.default
    )
);

const FhComponent = lazyLoading(() =>
    import("../views/fh/fhComponent").then(
        module => module.default
    )
);


const CarComponent = lazyLoading(() =>
    import("../views/car/carComponent").then(
        module => module.default
    )
);

const My404Component = lazyLoading(() =>
    import("../views/pageNotFoundComponent").then(module => module.default)
);

 
class RoutesComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={props => {
                            return (
                                <React.Fragment>
                                    <FlightComponent {...props} />
                                </React.Fragment>
                            );
                        }}
                    />
                    <Route
                        path="/hotel"
                        exact
                        render={props => {
                            return (
                                <React.Fragment>
                                    <HotelComponent {...props} />
                                </React.Fragment>
                            );
                        }}
                    />
                     <Route
                        path="/flighthotel"
                        exact
                        render={props => {
                            return (
                                <React.Fragment>
                                    <FhComponent {...props} />
                                </React.Fragment>
                            );
                        }}
                    />

                    <Route
                        path="/car"
                        exact
                        render={props => {
                            return (
                                <React.Fragment>
                                    <CarComponent {...props} />
                                </React.Fragment>
                            );
                        }}
                    />
                    
                    <Route component={My404Component} />
                </Switch>
            </React.Fragment>
        );
    }
}
export default RoutesComponent;