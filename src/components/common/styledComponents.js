import styled from 'styled-components';
import { Anchor, Box, Image } from 'grommet';

export const Line = styled(Box)`
    background-color: #574CFA;
    width: 20px;
    height: 3px;
`;

export const StyledAnchor = styled(Anchor)`
    &:active {
        text-decoration: underline;
    }
`;

export const Divider = styled(Box)`
    background-color: #574CFA;
    width: 40px;
    height: 4px;
`;

export const WhyUsBox = styled(Box)`
    background-color: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 10px;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.07);
    width: 399px;
    height: 258px;
`;

export const IconContainer = styled(Image)`
    width: ${props => props.width || "45px"};
    height: ${props => props.height || "50px"};
`;
