import React from 'react';
import { Box, Grommet, ResponsiveContext } from 'grommet';
import { Route, Switch } from 'react-router';
import routes from "./routes";
import PrivateRoute from "./PrivateRoute";
import '../styles'

const AppRouter = () => {
    const theme = {
        global: {
            focus: {
                border: {
                    color: '#00000000'
                }
            },
            colors: {
                brand: '#574CFA'
            },
            // breakpoints: {
            //     xsmall: {
            //         value: 375
            //     },
            //     small: {
            //         value: 900,
            //     },
            //     large: {
            //         value: 1024,
            //     },
            //     xlarge: {
            //         value: 1366,
            //     }
            // }
        },
    };

    return (
        <Grommet plain full theme={theme}>
            <ResponsiveContext.Consumer>
                {_ => (
                    <Box fill>
                        <Switch>
                            {routes.map(({ ...object }, k) => (
                                <PrivateRoute key={k} exact {...object} />
                            ))}
                            {/* <Route path="*" component={PageNotFound} /> */}
                        </Switch>
                    </Box>
                )}
            </ResponsiveContext.Consumer>
        </Grommet>
    )
}

export default AppRouter
