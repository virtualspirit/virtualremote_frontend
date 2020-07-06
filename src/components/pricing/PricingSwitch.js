import React from 'react';
import { Box, Paragraph, CheckBox } from "grommet";

const PricingSwitch = ({ switchValue, switchChangeHandler }) => {
    return (
        <Box align="center" direction="row" gap="small">
            <Paragraph size="small" >Bill Monthly</Paragraph>
            <CheckBox checked={switchValue} onChange={switchChangeHandler} toggle gap="small" />
            <Paragraph size="small" >Bill Yearly</Paragraph>
            <Box pad={{ bottom: "medium" }}>
                <Paragraph size="small" color="brand" style={{
                    backgroundColor: "#FFFFFF", border: "1px solid #574CFA", borderRadius: "4px",
                    boxShadow: " 0 4px 6px 0 rgba(0, 61, 92, 0.14)"
                }}>{`16% discount`}</Paragraph>
            </Box>
        </Box>
    )
}

export default PricingSwitch
