import React from 'react';
import { Avatar, Box, Text } from 'grommet';

const Circle = ({ value, ...rest }) => {
    return (
        <Box alignSelf="center" align="center" justify="end" width="xsmall" height="xsmall" {...rest}>
            <Avatar  border={{ color: "brand", size: "small" }}>
                <Text color="brand">{value}</Text>
            </Avatar>
        </Box>
    )
}

export default Circle
