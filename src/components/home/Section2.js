import React from 'react';
import { Box, Heading, Paragraph, ResponsiveContext } from 'grommet';
import { Divider } from '../common/styledComponents';

const Section2 = () => {
    const size = React.useContext(ResponsiveContext);

    return (
        <Box fill>
            <Box margin={{ horizontal: size === "small" ? "medium" : "xlarge", top: size === "small" ? "small" : "xlarge" }}
                align="center" justify="end">
                <Heading margin={{ bottom: "none" }} level="3" textAlign="center">We helps you effortlessly hired by the world-class companies and startups</Heading>
                <Divider />
                <Paragraph size="small" textAlign="center">Millions of small businesses use Freelancer to turn their ideas into reality.</Paragraph>
            </Box>
        </Box>
    )
}

export default Section2
