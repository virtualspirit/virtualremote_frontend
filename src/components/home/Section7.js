import React from 'react';
import { Avatar, Box, Heading, Paragraph, Stack, ResponsiveContext } from 'grommet';
import { Divider, ShadowBox } from '../common/styledComponents';
import bg from '../../assets/bg/bg3.png';
import IconCall from '../../assets/Label/IconCall.svg';
import IconQuote from '../../assets/Label/IconQuote.svg';
import Button from '../common/Button';

const Section7 = () => {
    const size = React.useContext(ResponsiveContext);

    return (
        <Box>
            <Box background={{
                "position": "center",
                "repeat": "repeat-y",
                "size": "cover",
                "image": `url(${bg})`
            }} pad={{ horizontal: size === "small" ? "medium" : "large" }}>
                <Stack fill style={{ top: "-8rem" }} >
                    <Box align="center" justify="center"
                        margin={{ horizontal: size === "small" ? "medium" : "xlarge", bottom: size === "small" ? "small" : "xlarge" }}>
                        <Box align="center" pad={{ top: size === "small" ? "xlarge" : "large" }} />
                        <Box align="center" pad={{ top: size === "small" ? "xlarge" : "large" }} />
                        <Box align="center" pad={{ top: size === "small" ? "xlarge" : "large" }}>
                            <Box pad={{ top: "xlarge" }} />
                            <Heading margin={{ bottom: "none" }} color="#fff" level="3" textAlign="center">Hire a great freelancer today!</Heading>
                            <Divider />
                            <Paragraph size="small" color="#fff" textAlign="center">On VRemote, you will find a large number of business, technology, and design talent who can help take your business to the next level.</Paragraph>
                            <Box direction={size === "small" ? "column" : "row"}
                                gap={size === "small" ? "medium" : "small"}>
                                <Button name="SCHEDULE A CALL"
                                    justify="center"
                                    direction="row-reverse"
                                    gap="small"
                                    width="small"
                                    onClick={() => { console.log("clicked") }} >
                                    <Avatar size="xsmall" src={IconCall} />
                                </Button>
                                <Button name="JOIN AS A TALENT" background="#fff" color="brand"
                                    justify="center"
                                    direction="row"
                                    gap="small"
                                    width="small"
                                    onClick={() => { console.log("clicked") }} />
                            </Box>
                        </Box>
                    </Box>
                    <Box direction={size === "small" ? "column" : "row"} gap="small" justify="center">
                        {Array(Math.ceil(size === "small" ? 1 : 3)).fill().map((_, i) => (
                            <ShadowBox justify="start" pad="small" key={i}>
                                <Box alignSelf="start" justify="start" ><Avatar size="xsmall" src={IconQuote} /></Box>
                                <Box>
                                    <Paragraph size="small">{`“The biggest advantage and benefit of working with VRemote is the tremendous reduction in time spent sourcing quality candidates. We’re able to identify the talent in a matter of days.”`}</Paragraph>
                                    <Heading margin={{ bottom: "none", top: "xxsmall" }} level="5" >{`Philip Tsai`}</Heading>
                                    <Paragraph margin={{ top: "none" }} size="small">{`Product Manager at SASA`}</Paragraph>
                                </Box>
                            </ShadowBox>
                        ))}
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}

export default Section7
