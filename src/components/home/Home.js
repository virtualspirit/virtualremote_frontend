import React from 'react';
import { Box, Grid, ResponsiveContext } from "grommet";
import Head from '../common/Head';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';

const Home = () => {
    const size = React.useContext(ResponsiveContext);

    return (
        <Grid fill
            columns={["flex"]}
            rows={size !== 'small' ? ["10%", "60%", "45%", "35%", "120%", "135%", "90%", "80%"] : ["9%", "87%", "25%", "80%", "220%", "185%", "50%", "70%"]}
            areas={[
                ["head"],
                ["section1"],
                ["section2"],
                ["section3"],
                ["section4"],
                ["section5"],
                ["section6"],
                ["footer"]
            ]}
        >
            <Box gridArea="head">
                <Head />
            </Box>

            <Box fill background="light-2" gridArea="section1" style={{ position: 'relative' }}>
                <Section1 />
            </Box>

            <Box fill background="light-2" gridArea="section2">
                <Section2 />
            </Box>

            <Box fill background="light-2" gridArea="section3">
                <Section3 />
            </Box>

            <Box fill background="light-2" gridArea="section4">
                <Section4 />
            </Box>

            <Box fill background="light-2" gridArea="section5">
                <Section5 />
            </Box>

            <Box fill background="light-2" gridArea="section6">
                <Section6 />
            </Box>

            <Box fill background="#141325" gridArea="footer">
                Footer
             </Box>
        </Grid>
    )
}

export default Home
