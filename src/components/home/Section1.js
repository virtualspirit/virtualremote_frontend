import React from 'react';
import { Box, Heading, Paragraph, Image, ResponsiveContext } from 'grommet';
import bg2 from '../../assets/bg/bg2.png';
import workFromHomeImg from '../../assets/Ilustration/working-from-home.png';
import Button from '../common/Button';
import { FormNextLink } from 'grommet-icons';

const Section1 = () => {
    const size = React.useContext(ResponsiveContext);

    return (
        <Box fill >
            <Box overflow="hidden" fill basis="auto">
                <Image src={bg2} fit="contain" />
            </Box>
            <Box
                pad={{ horizontal: size === "small" ? "medium" : "xlarge", vertical: size === "small" ? "xsmall" : "medium" }}
                style={{ position: 'absolute' }}
                direction={size === "small" ? "column" : "row"}
                gap={size === "small" ? "small" : "xsmall"}>
                <Box  width={"xlarge"} alignSelf={size === "small" ? "center" : "start"}>
                    <Heading level="2" margin={{ bottom: "none" }}>Empower talent to do work</Heading>
                    <Heading level="2" margin={{ bottom: "none", top: "none" }}>that matters from anywhere</Heading>
                    <Paragraph size="small">Get matched to top talent in minutes through our global network of skilled freelancers and professional agencies.</Paragraph>
                    <Button name="JOIN AS A TALENT"
                        direction="row"
                        gap="small"
                        width="small"
                        onClick={() => { console.log("clicked") }}>
                        <FormNextLink />
                    </Button>
                </Box>
                <Box  height="medium"  alignSelf="end"
                    margin={{ left: size === "small" ? "xxsmall" : "small", vertical: size === "small" ? "xsmall" : "medium" }}>
                    <Image src={workFromHomeImg} fit="contain" />
                </Box>
            </Box>
        </Box>
    )
}

export default Section1
