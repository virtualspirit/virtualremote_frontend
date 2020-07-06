import React from 'react';
import { Box, Grid, ResponsiveContext } from "grommet";
import Head from '../common/Head';
import QuestionBox from './QuestionBox';
import Footer from '../common/Footer';

const Pricing = () => {
    const size = React.useContext(ResponsiveContext);
    const [rowSize, setRowSize] = React.useState({
        normal: { head: "10%", middle: "40%", empty: "109%", footer: "84%" },
        small: { head: "9%", middle: "40%", empty: "90%", footer: "133%" }
    })

    return (
        <Grid fill
            columns={["flex"]}
            rows={Object.values(rowSize[size === 'small' ? size : 'normal'])}
            areas={
                [
                    ["head"],
                    ["middle"],
                    ["empty"],
                    ["footer"]
                ]}
        >
            <Box gridArea="head">
                <Head />
            </Box>

            <Box fill gridArea="middle" >
                <QuestionBox {...{ rowSize, setRowSize }} />
            </Box>

            <Box fill background="light-2" gridArea="empty">
            </Box>

            <Box fill background="#141325" gridArea="footer">
                <Footer />
            </Box>
        </Grid >
    )
}

export default Pricing
