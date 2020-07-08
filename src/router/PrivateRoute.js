import React from 'react';
import { Route } from 'react-router';

const PrivateRoute = ({ component: Component, tag: componentName, ...rest }) => {
    console.log("PrivateRoute-componentName", componentName);

    return (
        <Route
            {...rest}
            render={props => {
                return <Component {...props} />
            }}
        />
    )
}

export default PrivateRoute;