import React from 'react';
import { Box, Text } from 'grommet';

const Button = ({ name, children, ...rest }) => {
    return (
        <Box round="xsmall" align="center" pad={{ vertical: "xsmall", horizontal: "small" }} background="brand" elevation="small" {...rest} >
            <Text size={"small"}>{name}</Text>
            {children}
        </Box>
    )
}

export default Button
