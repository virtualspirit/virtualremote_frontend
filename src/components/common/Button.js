import React from 'react';
import { Box, Text } from 'grommet';

const Button = ({ size, color, name, children, ...rest }) => {
    return (
        <Box align="center" background="brand" elevation="small"
            round={size === "small" ? "small" : "xsmall"}
            pad={{ vertical: "xsmall", horizontal: "small" }}  {...rest} >
            <Text size="small" {...{color}} >{name}</Text>
            {children}
        </Box>
    )
}

export default Button
