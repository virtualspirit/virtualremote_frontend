import React from 'react';
import { Route, Switch } from 'react-router';
import routes from "./routes";
import PrivateRoute from "./PrivateRoute";
import '../styles'

const AppRouter = () => {

    return (
        <Switch>
            {routes.map(({ ...object }, k) => (
                <PrivateRoute key={k} exact {...object} />
            ))}
            {/* <Route path="*" component={PageNotFound} /> */}
        </Switch>
    )
}

export default AppRouter
