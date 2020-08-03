import React, { Component } from "react";
const lazyLoading = getComponent => {
    class AsyncComponent extends Component {
        static Component = null;
        state = { Component: AsyncComponent.Component };

        componentDidMount() {
            if (!this.state.Component) {
                getComponent().then(Component => {
                    AsyncComponent.Component = Component;
                    this.setState({ Component });
                });
            }
        }
        render() {
            const { Component } = this.state;
            if (Component) {
                return <Component {...this.props} />;
            }
            return null;
        }
    }
    return AsyncComponent;
};

export default lazyLoading;