import React, { useEffect } from 'react';
import { Box, Heading, Paragraph, Image, ResponsiveContext } from 'grommet';
import { Divider } from '../common/styledComponents';
import clogo1 from '../../assets/ClientsLogo/1.jpg';
import clogo2 from '../../assets/ClientsLogo/2.jpg';
import clogo3 from '../../assets/ClientsLogo/3.jpg';
import clogo4 from '../../assets/ClientsLogo/4.jpg';
import clogo5 from '../../assets/ClientsLogo/5.jpg';
import clogo6 from '../../assets/ClientsLogo/6.jpg';
import clogo7 from '../../assets/ClientsLogo/7.jpg';
import clogo8 from '../../assets/ClientsLogo/8.jpg';
import clogo9 from '../../assets/ClientsLogo/9.jpg';
import clogo10 from '../../assets/ClientsLogo/10.jpg';
// import clogo11 from '../../assets/ClientsLogo/11.jpg';
import clogo12 from '../../assets/ClientsLogo/12.jpg';
import clogo13 from '../../assets/ClientsLogo/13.jpg';
import clogo14 from '../../assets/ClientsLogo/14.jpg';
import clogo15 from '../../assets/ClientsLogo/15.jpg';

const Section6 = () => {
    const size = React.useContext(ResponsiveContext);
    const clientLogos = [clogo1, clogo2, clogo3, clogo5, clogo6, clogo7, clogo8, clogo4, clogo9, clogo10, clogo12, clogo13, clogo14, clogo15];
    const devideIconsBy = size === "small" ? 3 : 5;

    return (
        <Box>
            <Box align="center" justify="center" gap="small"
                margin={{ horizontal: size === "small" ? "medium" : "xlarge", bottom: size === "small" ? "small" : "xlarge" }}>
                <Box align="center" pad="small">
                    <Heading margin={{ bottom: "none" }} level="3" textAlign="center">Trusted by hundreds of hot startups and great companies.</Heading>
                    <Divider />
                </Box>
                {Array(Math.ceil(clientLogos.length / devideIconsBy)).fill().map((_, i) => (
                    <Box direction="row" align="center" gap="small" key={i}>
                        {clientLogos.map((logo, key) => (key >= devideIconsBy * (i + 1) - devideIconsBy && key <= devideIconsBy * (i + 1) - 1) && (
                            <Box key={key} width="xsmall" height="xxsmall">
                                <Image src={logo} fit="contain" />
                            </Box>
                        ))}
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default Section6
