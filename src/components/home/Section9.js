import React from 'react';
import { Avatar, Box, Heading, Text, Image, Paragraph, ResponsiveContext } from 'grommet';
import { FormNextLink } from 'grommet-icons';
import Button from '../common/Button';
import { Divider, ShadowBox, SmallText } from '../common/styledComponents';
import learnGrow1 from '../../assets/LearnAndGrow/1.png';
import learnGrow2 from '../../assets/LearnAndGrow/2.png';
import learnGrow3 from '../../assets/LearnAndGrow/3.png';

const Section9 = () => {
    const size = React.useContext(ResponsiveContext);
    const learnings = [
        {
            image: learnGrow1, title: "DESIGN", heading: "The World Is Our Interface - the Evolution of UI Design",
            desc: "Today computers are omnipresent. You can’t escape them. We are living in an exciting age of design and evolving user interfaces..",
            footL: "1 week ago", footR: "CONTINUE READING", titleWidth: "xsmall"
        },
        {
            image: learnGrow2, title: "WEB DEVELOPMENT", heading: "Lighter and Faster - A Guide to the Svelte Framework",
            desc: "Web applications are becoming more popular day by day. They’re a growing world which people choose for its simplicity, speed, and cross-platform availability…",
            footL: "2 days ago", footR: "CONTINUE READING", titleWidth: "small"
        },
        {
            image: learnGrow3, title: "USER EXPERIENCE", heading: "Getting Acquainted – A Guide to User Onboarding Flows",
            desc: "With all the effort and money that goes into crafting digital products, two eye-popping stats are especially concerning: three in four apps are opened only...",
            footL: "4 days ago", footR: "CONTINUE READING", titleWidth: "small"
        }
    ];

    return (
        <Box>
            <Box align="center" justify="center" gap="small"
                margin={{ horizontal: size === "small" ? "medium" : "xlarge", bottom: size === "small" ? "small" : "xlarge" }}>
                <Box align="center" pad="small">
                    <Heading margin={{ bottom: "none" }} level="3" textAlign="center">Learn and grow</Heading>
                    <Divider />
                </Box>
                <Box direction={size === "small" ? "column" : "row"} gap="medium" align="center" justify="center">
                    {learnings.map(({ image, title, titleWidth, heading, desc, footL, footR }, i) => (
                        <ShadowBox width="medium" key={i}>
                            <Box {...(size !== "small" && { width: "medium", height: "small" })}>
                                <Image fill fit="cover" src={image} />
                            </Box>
                            <Box pad="xsmall">
                                <Box border={{ color: "brand" }} width={titleWidth}>
                                    <SmallText color="brand" alignSelf="center">{title}</SmallText>
                                </Box>
                            </Box>
                            <Box pad="xsmall">
                                <Box {...(size !== "small" && { width: "medium" })}>
                                    <Heading margin={{ bottom: "none", top: "small" }} level="6">{heading}</Heading>
                                    <Paragraph margin={{ top: "small" }} size="small">{desc}</Paragraph>
                                </Box>
                            </Box>
                            <Box pad="xsmall">
                                <Box direction="row" justify="between">
                                    <SmallText color="#94989E" >{footL}</SmallText>
                                    <Box direction="row" justify="between">
                                        <SmallText weight="bold" color="brand" alignSelf="center">{footR}</SmallText>
                                        <FormNextLink color="brand" />
                                    </Box>
                                </Box>
                            </Box>
                        </ShadowBox>
                    ))}
                </Box>
                <Box alignSelf="center" pad="small">
                    <Button name="Read More" color="brand"
                        background="#fff"
                        border={{ color: "brand" }}
                        direction="row"
                        gap="small"
                        width="small"
                        justify="center"
                        onClick={() => { console.log("clicked") }}>
                        <FormNextLink color="brand" />
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Section9
