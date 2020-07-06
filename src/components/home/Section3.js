import React from 'react';
import { Box, Heading, Paragraph, ResponsiveContext } from 'grommet';
import Circle from '../common/Circle';

const Section3 = () => {
    const size = React.useContext(ResponsiveContext);
    const contents = [
        { title: "Talk to an expert", desc: "One of our industry experts will work with you to understand your requirements, business goals, and preferences." },
        { title: "Get introduced to the right talent", desc: "We will help you find the right candidate within a few days. 24 hours is the average time we take." },
        { title: "Hire on a trial basis", desc: "Work with your new talent on a trial basis. Pay only if you're fully satisfied." }
    ]

    return (
        <Box>
            <Box align="center" justify="center" gap="small" direction={size === "small" ? "column" : "row"}
                margin={{ horizontal: size === "small" ? "medium" : "xlarge", bottom: size === "small" ? "small" : "xlarge" }}>
                {/* <Box direction="row" alignSelf="start">
                    <Box width="small" alignSelf="center" className="line"></Box>
                    <Box className="arrow right"></Box>
                </Box> */}
                {contents.map(({ title, desc }, k) => (
                    <Box key={k}>
                        <Circle value={k + 1}/>
                        <Heading margin={{ bottom: "none" }} level="5" textAlign="center">{title}</Heading>
                        <Paragraph size="small" textAlign="center">{desc}</Paragraph>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default Section3
