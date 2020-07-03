import React from 'react';
import { Box, Heading, Paragraph, Image, Text, ResponsiveContext } from 'grommet';
import { Divider, IconContainer, WhyUsBox } from '../common/styledComponents';
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
        { icon: hire, title: "Hire Quickly", desc: "Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time." },
        { icon: talent, title: "Best Classified Talent", desc: "Every applicant to the VRemote network is rigorously tested and vetted. Our highely selective process leads to a 98% trial-to-hire success rate." },
        { icon: leading, title: "Leading the future of work", desc: "Our network is ready for tomorrow's business challenges by embracing advanced and specialized skills." },
        { icon: level, title: "A Level Above", desc: "Easy single freelancer in our global network embodies the highest levels of integrity, professionalism, communication." },
        { icon: management, title: "Modern Project Management", desc: "VRemote Project Consultants assemble managed teams of seasoned experts for your most urgent business needs." },
        { icon: needs, title: "Fit All Your Business Needs", desc: "Digital product managers, scrum product owners with expertise in numerous industries like banking, healthcare, ecommerce, more." },
    ]
    const applyBox = ({ key, icon, title, desc }) => (
        <WhyUsBox justify="end" pad="medium" key={key}>
            <Box alignSelf="start" justify="start" ><IconContainer src={icon} /></Box>
            <Heading margin={{ bottom: "none" }} level="5" >{title}</Heading>
            <Paragraph margin={{ top: "none" }} size="small">{desc}</Paragraph>
        </WhyUsBox>
    );

    return (
        <Box background={{
            "opacity": true,
            "position": "center",
            "repeat": "repeat-y",
            "size": "contain",
            "image": `url(${bg2})`
          }}>
            <Box align="center" justify="center" gap="small" 
                margin={{ horizontal: size === "small" ? "medium" : "xlarge", bottom: size === "small" ? "small" : "xlarge" }}>
                <Box align="center">
                    <Heading margin={{ bottom: "none" }} level="3" textAlign="center">Build Amazing Teams, On Demand</Heading>
                    <Divider />
                    <Paragraph size="small" textAlign="center">Work with remote developers as you need them, from full-time remote engineering teams to hourly contractors.</Paragraph>
                </Box>
                <Box gap="small">
                    {Array(Math.ceil(whyUsContents?.length / 3)).fill().map((_, i) => (
                        <Box gap="small" direction={size === "small" ? "column" : "row"} key={i}>
                            {whyUsContents.map(({ icon, title, desc }, key) => (key >= 3 * (i + 1) - 3 && key <= 3 * (i + 1) - 1) && applyBox({ icon, title, desc, key }))}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default Section4
