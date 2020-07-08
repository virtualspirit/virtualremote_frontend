import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router';
import routes from "./routes";
import '../styles'

const PrivateRoute = lazy(() => import('./PrivateRoute'));
const renderLoader = () => <p>Loading...</p>;
const AppRouter = () => {
    return (
        <Switch>
            <Suspense fallback={renderLoader()}>
                {routes.map(({ ...object }, k) => (
                    <PrivateRoute key={k} exact {...object} />
                ))}
            </Suspense>
        </Switch>
    )
}

export default AppRouter
