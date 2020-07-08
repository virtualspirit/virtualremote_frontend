import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router';
import routes from "./routes";
import '../styles';
import Loader from '../components/common/Loader';

const PrivateRoute = lazy(() => import('./PrivateRoute'));
const AppRouter = () => {
    return (
        <Switch>
            <Suspense fallback={<Loader />}>
                {routes.map(({ ...object }, k) => (
                    <PrivateRoute key={k} exact {...object} />
                ))}
            </Suspense>
        </Switch>
    )
}

export default AppRouter
