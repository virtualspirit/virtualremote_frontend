import React from 'react';
import { Box, Heading, ResponsiveContext } from 'grommet';
import { Divider } from '../common/styledComponents';

const Section2 = () => {
    const size = React.useContext(ResponsiveContext);

    return (
        <Box margin={{ horizontal: size === "small" ? "medium" : "xlarge", top: size === "small" ? "small" : "medium" }}
            align="center" justify="center">
            <Heading margin={{ bottom: "none" }} level="3" textAlign="center">Hire the world-class freelancers and agencies effortlessly.</Heading>
            <Divider />
        </Box>
    )
}

export default Section2
