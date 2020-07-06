import React from 'react';
import { Box, Grid, ResponsiveContext } from "grommet";
import Head from '../common/Head';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import Section9 from './Section9';
import Footer from '../common/Footer';

const Home = () => {
    const size = React.useContext(ResponsiveContext);

    return (
        <Grid fill
            columns={["flex"]}
            rows={size !== 'small' ?
                ["10%", "75%", "25%", "35%", "120%", "130%", "80%", "60%", "30%", "120%", "84%"] :
                ["9%", "87%", "15%", "85%", "195%", "178%", "76%", "43%", "60%", "230%", "133%"]}
            areas={[
                ["head"],
                ["section1"],
                ["section2"],
                ["section3"],
                ["section4"],
                ["section5"],
                ["section6"],
                ["section7"],
                ["section8"],
                ["section9"],
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

            <Box fill background="light-2" gridArea="section7">
                <Section7 />
            </Box>

            <Box fill background="light-2" gridArea="section8">
                <Section8 />
            </Box>

            <Box fill background="light-2" gridArea="section9">
                <Section9 />
            </Box>

            <Box fill background="#141325" gridArea="footer">
                <Footer />
            </Box>
        </Grid>
    )
}

export default Home
