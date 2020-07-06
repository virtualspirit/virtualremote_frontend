import React from 'react';
import { Box, Image, Heading, Paragraph } from 'grommet';
import IconSuccess from '../../assets/Alert/IconSuccess.svg'

const ThankBox = () => {

    return (
        <>
            <Box align="center">
                <Image src={IconSuccess} />
                <Heading level="4" textAlign="center">{`Thank you for applying!`}</Heading>
                <Paragraph size="small" textAlign="center">{`We will review your application and will let you know soon.`}</Paragraph>
            </Box>
        </>
    )
}

export default ThankBox
