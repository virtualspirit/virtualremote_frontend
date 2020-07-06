import React from 'react';
import { Avatar, Box, Heading, Paragraph, Stack, ResponsiveContext } from 'grommet';
import { FormNextLink } from 'grommet-icons';
import { ShadowBox } from './styledComponents';
import Button from './Button';
import idea from '../../assets/Graphic/Idea.svg';
import social1 from '../../assets/Share/social1.svg';
import social2 from '../../assets/Share/social2.svg';
import social3 from '../../assets/Share/social3.svg';
import IconCall from '../../assets/Label/IconCall.svg';
import IconEmail from '../../assets/Label/IconEmail.svg';

const Footer = () => {
    const size = React.useContext(ResponsiveContext);
    const socialIcons = [social1, social2, social3];

    return (
        <Box>
            <Box pad={{ horizontal: size === "small" ? "medium" : "large" }}>
                <Stack style={{ top: "-6rem" }}>
                    <Box pad={size === "small" ? "xlarge" : "large"}></Box>
                    <ShadowBox direction={size === "small" ? "column" : "row"}
                        justify="between" pad="medium" align="center"
                        background="linear-gradient(90deg, #574CFA 0%, #50B5CB 100%)" >
                        <Box direction="row" gap="small">
                            <Avatar size="xlarge" round={false} src={idea} />
                            <Box align="center" alignSelf="center" >
                                <Paragraph margin={{ bottom: "none" }} alignSelf="start" size="small">{`EXPAND YOUR BUSINESS WITH US`}</Paragraph>
                                <Heading size="small" margin={{ bottom: "none", top: "xsmall" }} level="3"  >{`Work with the best companies`}</Heading>
                            </Box>
                        </Box>
                        <Box align="end">
                            <Button name="JOIN AS A TALENT" color="#0A0C0E"
                                style={{ backgroundColor: "#FFFFFF", borderRadius: "6px", boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1)" }}
                                justify="center"
                                direction="row"
                                gap="small"
                                width="small"
                                onClick={() => { console.log("clicked") }} >
                                <FormNextLink color="#0A0C0E" />
                            </Button>
                        </Box>
                    </ShadowBox>
                </Stack>

                <Box direction={size === "small" ? "column" : "row"}
                    align={size === "small" ? "center" : "center"}
                    gap={size === "small" ? "medium" : "xsmall"}
                    justify="between">
                    <Heading margin={{ bottom: "none" }} textAlign={size === "small" ? "center" : "start"}
                        color="#fff" level="3">Highly experienced and professional freelancers and agencies
                    </Heading>
                    <Box align={size === "small" ? "start" : "end"} direction="row" gap="small">
                        {socialIcons.map((icon, i) => <Avatar key={i} size="small" src={icon} />)}
                    </Box>
                </Box>
                <Box direction={size === "small" ? "column" : "row"}
                    gap={size === "small" ? "none" : "xlarge"}>
                    <Box direction="row" justify={size === "small" ? "center" : "start"}>
                        <Box>
                            <Heading textAlign={size === "small" ? "center" : "start"} margin={{ bottom: "none" }} color="#fff" level="6">Contact</Heading>
                            <Box direction="row" gap="xsmall" >
                                <Avatar alignSelf="end" size="xsmall" src={IconCall} />
                                <Paragraph margin={{ bottom: "none" }} alignSelf="start" size="small">{`0197570530`}</Paragraph>
                            </Box>
                            <Box direction="row" gap="xsmall">
                                <Avatar alignSelf="end" size="xsmall" src={IconEmail} />
                                <Paragraph margin={{ bottom: "none" }} alignSelf="start" size="small">{`hello@vremote.dev`}</Paragraph>
                            </Box>
                        </Box>
                    </Box>
                    <Box direction="row" justify={size === "small" ? "center" : "start"}>
                        <Box >
                            <Heading textAlign={size === "small" ? "center" : "start"} margin={{ bottom: "none" }} color="#fff" level="6">Hire</Heading>
                            <Paragraph margin={{ bottom: "none" }} alignSelf={size === "small" ? "center" : "start"} size="small">{`Chief Technology Officer`}</Paragraph>
                            <Paragraph margin={{ bottom: "none" }} alignSelf={size === "small" ? "center" : "start"} size="small">{`Ruby on Rails`}</Paragraph>
                            <Paragraph margin={{ bottom: "none" }} alignSelf={size === "small" ? "center" : "start"} size="small">{`React Native`}</Paragraph>
                            <Paragraph margin={{ bottom: "none" }} alignSelf={size === "small" ? "center" : "start"} size="small">{`React`}</Paragraph>
                            <Paragraph margin={{ bottom: "none" }} alignSelf={size === "small" ? "center" : "start"} size="small">{`Wordpress`}</Paragraph>
                            <Paragraph margin={{ bottom: "none" }} alignSelf={size === "small" ? "center" : "start"} size="small">{`Designer`}</Paragraph>
                            <Paragraph margin={{ bottom: "none" }} alignSelf={size === "small" ? "center" : "start"} size="small">{`Frontend Developer`}</Paragraph>
                        </Box>
                    </Box>
                    <Box direction="row" justify={size === "small" ? "center" : "start"}>
                        <Box>
                            <Heading textAlign={size === "small" ? "center" : "start"} margin={{ bottom: "none" }} color="#fff" level="6">Start</Heading>
                            <Paragraph margin={{ bottom: "none" }} alignSelf={size === "small" ? "center" : "start"} size="small">{`Start A Project`}</Paragraph>
                            <Paragraph margin={{ bottom: "none" }} alignSelf={size === "small" ? "center" : "start"} size="small">{`Apply As Developer`}</Paragraph>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box pad={size === "small" ? "small" : "xsmall"}></Box>
            <Box />
            <Box style={{ boxShadow: "inset 0 1px 0 0 #FFFFFF", opacity: "0.1400000005960464" }}
                direction={size === "small" ? "column" : "row"} justify="center" gap="small">
                <Box direction={size === "small" ? "column" : "row"} justify="center"
                    pad={{ horizontal: "small" }} {...(size !== "small" && { gap: "xsmall" })}>
                    <Paragraph margin={{ bottom: "none" }} size="small">{`Copyright © 2019, VirtualRemote`}</Paragraph>
                    <Paragraph margin={{ bottom: "none" }} size="small">{`by VirtualSpirit Technology Sdn. Bhd. All Rights Reserved`}</Paragraph>
                </Box>
                <Box direction="row" justify="start" gap="small" pad={{ horizontal: "small" }}>
                    <Paragraph margin={{ bottom: "none" }} size="small">{`Terms & Conditions`}</Paragraph>
                    <Paragraph margin={{ bottom: "none" }} size="small">{`Privacy Policy`}</Paragraph>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer
