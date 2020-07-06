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
        { image: howItWorksImg1, title: "We interview candidates.", desc: "We will interview several freelancers and will select the right talent for you. So you don't need to spend time interviewing people." },
        { image: howItWorksImg2, title: "You meet simply the best candidates.", desc: "Talk with us to to find the right freelancers that will help you in the best way possible. Whether you need one or multiple remote workers, you will get the right talent." },
        { image: howItWorksImg3, title: "Hire in less time.", desc: "With VRemote, you can save a great amount of time. You simply have to tell us your goals and requirements, and we will handle the rest." }
    ]

    return (
        <Box>
            <Box align="center" justify="center" gap="medium"
                margin={{ horizontal: size === "small" ? "medium" : "xlarge", ...(size === "small" && { bottom: size === "small" ? "xxsmall" : "large" }) }}>
                <Box {...(size === "small" && {height: "xsmall"})} align="center">
                    <Heading margin={{ bottom: "none" }} level="3" textAlign="center">How VRemote works</Heading>
                    <Divider />
                </Box>
                <Box margin={{ top: "medium" }} gap="medium">
                    {contents.map(({ image, title, desc }, k) => (
                        <Box gap={size === "small" ? "medium" : "small"} key={k} pad={{ vertical: size === "small" ? "medium" : "small" }}
                            direction={size === "small" ? "column" : `${k % 2 === 0 ? "row" : "row-reverse"}`}>
                            <Box width="medium" height="small">
                                <Image src={image} fit="contain" />
                            </Box>
                            <Box>
                                <Circle width={size === "small" ? "xxsmall" : "30px"}
                                    height={size === "small" ? "xsmall" : "30px"}
                                    value={k + 1} align={k % 2 === 0 ? "start" : "end"}
                                    alignSelf={k % 2 === 0 ? "start" : "end"} />
                                <Heading margin={{ bottom: "none", ...(size === "small" && { top: "none" }) }}
                                    textAlign={k % 2 === 0 ? "start" : "end"} level="5">
                                    {title}
                                </Heading>
                                <Paragraph size="small" alignSelf={k % 2 === 0 ? "start" : "end"} textAlign={k % 2 === 0 ? "start" : "end"} >
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