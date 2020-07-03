import React from 'react';
import { Box, Heading, Paragraph, Image, ResponsiveContext } from 'grommet';
import Circle from '../common/Circle';
import { Divider } from '../common/styledComponents';
import howItWorksImg1 from '../../assets/Ilustration/vremote-4.png';
import howItWorksImg2 from '../../assets/Ilustration/vremote-2.png';
import howItWorksImg3 from '../../assets/Ilustration/vremote-3.png';

const Section5 = () => {
    const size = React.useContext(ResponsiveContext);
    const contents = [
        { image: howItWorksImg1, title: "We Interview The Developers", desc: "Developers interview with senior engineers at leading companies, using Silicon Valley-caliber technical and behavioral assessments." },
        { image: howItWorksImg2, title: "You Meet Top Candidates", desc: "Chat with us to get matched with pre-vetted candidates. Wheather hiring one or many, we help you find the right talent right now." },
        { image: howItWorksImg3, title: "Hire without the Headache", desc: "You choose who to hire, and we handle rest. VRemote manages payroll, benefits, and compliance for all remote hires." }
    ]

    return (
        <Box>
            <Box align="center" justify="center" gap="medium"
                margin={{ horizontal: size === "small" ? "medium" : "xlarge", ...(size === "small" && { bottom: size === "small" ? "xxsmall" : "large" }) }}>
                <Box align="center">
                    <Heading margin={{ bottom: "none" }} level="3" textAlign="center">Here's How VRemote Works</Heading>
                    <Divider />
                </Box>
                <Box margin={{top: "medium"}}>
                    {contents.map(({ image, title, desc }, k) => (
                        <Box gap={size === "small" ? "medium" : "small"} key={k} pad={{ vertical: size === "small" ? "medium" : "small" }}
                            direction={size === "small" ? "column" : `${k % 2 === 0 ? "row" : "row-reverse"}`}>
                            <Box width="medium" height="small">
                                <Image src={image} fit="contain" />
                            </Box>
                            <Box>
                                <Circle value={k + 1} align={k % 2 === 0 ? "start" : "end"} alignSelf={k % 2 === 0 ? "start" : "end"} />
                                <Heading margin={{ bottom: "none", ...(size === "small" && { top: "none" }) }}
                                    textAlign={k % 2 === 0 ? "start" : "end"} level="5">
                                    {title}
                                </Heading>
                                <Paragraph size="small" textAlign={k % 2 === 0 ? "start" : "end"} >
                                    {desc}
                                </Paragraph>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default Section5
