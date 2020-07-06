import React from 'react';
import { Avatar, Box, Heading, Paragraph, ResponsiveContext } from 'grommet';
import { ShadowBox } from '../common/styledComponents';
import IconEnquiry from '../../assets/Label/IconEnquiry.svg'

const PricingBoxes = () => {
    const size = React.useContext(ResponsiveContext);

    return (
        <Box direction={size !== 'small' ? "row" : "column"} gap={size === 'small' ? 'xsmall' : 'medium'} align="center" alignSelf="center">
            <ShadowBox width={size === 'small' ? 'small' : 'medium'}>
                <Heading level={6} margin={{ bottom: "none" }} textAlign="center">Junior</Heading>
                <Paragraph level={6} textAlign="center" margin={{ vertical: "xsmall" }}>1 - 2 years</Paragraph>
                <Heading level={5} textAlign="center" color="brand" margin={{ top: "xsmall", bottom: "small" }}>$1,399</Heading>
                <Paragraph as={Box} size="small" color="brand" direction="row" alignSelf="center" gap="xsmall" pad="xsmall"
                    align="center" justify="between" margin={{ bottom: "small" }}
                    style={{
                        backgroundColor: "#FFFFFF", border: "1px solid #574CFA", borderRadius: "4px",
                        boxShadow: " 0 4px 6px 0 rgba(0, 61, 92, 0.14)"
                    }}><Avatar size="xsmall" src={IconEnquiry} round={false} />{`Make Enquiry`}
                </Paragraph>
            </ShadowBox>
            <ShadowBox width={size === 'small' ? 'small' : 'medium'}>
                <Heading level={6} margin={{ bottom: "none" }} textAlign="center" >Mid-Level</Heading>
                <Paragraph level={6} textAlign="center" margin={{ top: "xsmall" }}>2 - 4 years</Paragraph>
                <Heading level={5} textAlign="center" color="brand" margin={{ top: "xsmall", bottom: "small" }}>$2,199</Heading>
                <Paragraph as={Box} size="small" color="brand" direction="row" alignSelf="center" gap="xsmall" pad="xsmall"
                    align="center" justify="between" margin={{ bottom: "small" }}
                    style={{
                        backgroundColor: "#FFFFFF", border: "1px solid #574CFA", borderRadius: "4px",
                        boxShadow: " 0 4px 6px 0 rgba(0, 61, 92, 0.14)"
                    }}><Avatar size="xsmall" src={IconEnquiry} round={false} />{`Make Enquiry`}
                </Paragraph>
            </ShadowBox>
            <ShadowBox width={size === 'small' ? 'small' : 'medium'}>
                <Heading level={6} margin={{ bottom: "none" }} textAlign="center" >Senior</Heading>
                <Paragraph level={6} textAlign="center" margin={{ top: "xsmall" }}>4 years and above</Paragraph>
                <Heading level={5} textAlign="center" color="brand" margin={{ top: "xsmall", bottom: "small" }}>$2,999</Heading>
                <Paragraph as={Box} size="small" color="brand" direction="row" alignSelf="center" gap="xsmall" pad="xsmall"
                    align="center" justify="between" margin={{ bottom: "small" }}
                    style={{
                        backgroundColor: "#FFFFFF", border: "1px solid #574CFA", borderRadius: "4px",
                        boxShadow: " 0 4px 6px 0 rgba(0, 61, 92, 0.14)"
                    }}><Avatar size="xsmall" src={IconEnquiry} round={false} />{`Make Enquiry`}
                </Paragraph>
            </ShadowBox>
        </Box>
    )
}

export default PricingBoxes