import React from 'react';
import { Box, Heading, Paragraph, ResponsiveContext } from 'grommet';
import { Divider, IconContainer, ShadowBox } from '../common/styledComponents';
import bg2 from '../../assets/bg/bg2.png';
import hire from '../../assets/WhyUs/1.svg';
import talent from '../../assets/WhyUs/2.svg';
import leading from '../../assets/WhyUs/3.svg';
import level from '../../assets/WhyUs/4.svg';
import management from '../../assets/WhyUs/5.svg';
import needs from '../../assets/WhyUs/6.svg';

const Section4 = () => {
    const size = React.useContext(ResponsiveContext);
    const whyUsContents = [
        { icon: hire, title: "Easy hiring process", desc: "Hire in easy steps. Get the best talent in under 48 hours hand-selected by us." },
        { icon: talent, title: "Most reliable remote workers", desc: "On this platform, you will get the best classified talent for your business requirements. Every freelancer is reliable." },
        { icon: leading, title: "Modern and advanced skills", desc: "The remote workers on Virtual Remote possess the most advanced and modern skills." },
        { icon: level, title: "Highly professional freelancers", desc: "The freelancers on VirtualRemote are highly professional with excellent communication skills. It's easy to work with them." },
        { icon: management, title: "Smart project management", desc: "With smart project management, your project will get completed in a very systematic manner." },
        { icon: needs, title: "Fulfill all of your requirements", desc: "On VRemote, you will find freelancers with different skills. So you can easily fulfill all your business needs." },
    ]
    const applyBox = ({ key, icon, title, desc }) => (
        <ShadowBox justify="start" pad="medium" key={key}>
            <Box alignSelf="start" justify="start" ><IconContainer src={icon} /></Box>
            <Box>
                <Heading margin={{ bottom: "none" }} level="5" >{title}</Heading>
                <Paragraph margin={{ top: "none" }} size="small">{desc}</Paragraph>
            </Box>
        </ShadowBox>
    );

    return (
        <Box background={{
            "position": "center",
            "repeat": "repeat-y",
            "size": "contain",
            "image": `url(${bg2})`
        }}>
            <Box align="center" justify="center"
                margin={{ horizontal: size === "small" ? "medium" : "xlarge", bottom: size === "small" ? "small" : "xlarge" }}>
                <Box height={size === "small" ? "145px" : "small"} align="center">
                    <Heading margin={{ bottom: "none" }} level="3" textAlign="center">Build great teams effortlessly</Heading>
                    <Divider />
                    <Paragraph size="small" textAlign="center">Work with remote developers as you need them, from full-time remote engineering teams to hourly contractors.</Paragraph>
                </Box>
                <Box gap={size === "small" ? "large" : "small"}>
                    {Array(Math.ceil(whyUsContents?.length / 3)).fill().map((_, i) => (
                        <Box gap={size === "small" ? "large" : "small"} direction={size === "small" ? "column" : "row"} key={i}>
                            {whyUsContents.map(({ icon, title, desc }, key) => (key >= 3 * (i + 1) - 3 && key <= 3 * (i + 1) - 1) && applyBox({ icon, title, desc, key }))}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default Section4
