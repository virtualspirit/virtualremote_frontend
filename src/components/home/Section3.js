import React from 'react';
import { Box, Heading, Paragraph, ResponsiveContext } from 'grommet';
import Circle from '../common/Circle';

const Section3 = () => {
    const size = React.useContext(ResponsiveContext);
    const contents = [
        { title: "Talk to One of Our Industry Experts", desc: "An expert on our team will work with you so understand your goals, technical needs, and team dynamics." },
        { title: "Work With Hand-Selected Talent", desc: "Within days, we'll introduce you to the right talent for your project. Average time to match is under 24 hours." },
        { title: "The Right Fit, Guaranteed", desc: "Work with your new team on a trial basis (pay only if satisfied), ensuring you hire the right people for the job." }
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
                        <Circle value={k+1} />
                        <Heading margin={{ bottom: "none" }} level="5" textAlign="center">{title}</Heading>
                        <Paragraph size="small" textAlign="center">{desc}</Paragraph>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default Section3
