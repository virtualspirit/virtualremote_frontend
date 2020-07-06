import React from 'react';
import { Avatar, Box, Heading, Text, Image, Stack, ResponsiveContext } from 'grommet';
import { Divider } from '../common/styledComponents';
import skill1 from '../../assets/Skills/1.svg';
import skill2 from '../../assets/Skills/2.svg';
import skill3 from '../../assets/Skills/3.svg';
import skill4 from '../../assets/Skills/4.svg';
import skill6 from '../../assets/Skills/6.svg';
import skill7 from '../../assets/Skills/7.svg';
import skill8 from '../../assets/Skills/8.svg';

const Section8 = () => {
    const size = React.useContext(ResponsiveContext);
    const skills = [{ name: "CTO", icon: skill8 }, { name: "Ruby on Rails", icon: skill1 }, { name: "React Native", icon: skill2 },
    { name: "React", icon: skill6 }, { name: "Wordpress", icon: skill3 }, { name: "Designer", icon: skill4 },
    { name: "Frontend Developer", icon: skill7 }];
    const devideIconsBy = size === "small" ? 3 : 7;

    return (
        <Box>
            <Box align="center" justify="center" gap="small"
                margin={{ bottom: size === "small" ? "small" : "large" }}>
                <Box height={size === "small" ? "103px" : "medium"} align="center" pad="small">
                    <Heading margin={{ bottom: "none" }} level="3" textAlign="center">Find work that you are passionate about</Heading>
                    <Divider />
                </Box>
                {Array(Math.ceil(skills.length / devideIconsBy)).fill().map((_, i) => (
                    <Box direction="row" align="center" gap="large" key={i}>
                        {skills.map(({ name, icon }, key) => (key >= devideIconsBy * (i + 1) - devideIconsBy && key <= devideIconsBy * (i + 1) - 1) && (
                            <Box align="center" key={key} gap="small">
                                <Avatar size="medium" src={icon} />
                                <Box align="center">
                                    <Text size="small">{name}</Text>
                                    <Text size="xsmall" color="brand">{`Learn >`}</Text>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default Section8