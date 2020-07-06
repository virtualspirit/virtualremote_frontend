import React from 'react';
import { Box, Heading, Paragraph, Stack } from 'grommet';
import bg2 from '../../assets/bg/bg2.png';

const QuestionBoxTitleContainer = ({ topText, title, desc, children, additionalProps }) => {

    return (
        <Stack fill>
            <Box fill background={{
                "position": "inherit",
                "repeat": "round",
                "size": "contain",
                "image": `url(${bg2})`
            }}>
                <Box fill align="center" justify="center" alignSelf="center" {...additionalProps}>
                    {topText && <Paragraph size="small" textAlign="center" color="brand">{topText}</Paragraph>}
                    {title && <Heading textAlign="center" margin={{ bottom: "xxsmall", top: "xxsmall" }} level="3" >{title}</Heading>}
                    {desc && <Paragraph textAlign="center" margin={{ top: "none" }} size="small">{desc}</Paragraph>}
                    {children}
                </Box>
            </Box>
        </Stack>
    )
}

export default QuestionBoxTitleContainer