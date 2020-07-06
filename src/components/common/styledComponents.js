import styled from 'styled-components';
import { Anchor, Box, Image, Stack, Text } from 'grommet';

export const Line = styled(Box)`
    background-color: #574CFA;
    width: 20px;
    height: 3px;
`;

export const StyledAnchor = styled(Anchor)`
    &.active {
        text-decoration: underline;
    }
`;

export const Divider = styled(Box)`
    background-color: #574CFA;
    width: 40px;
    height: 4px;
`;

export const ShadowBox = styled(Box)`
    background-color: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 10px;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.07);
`;

export const IconContainer = styled(Image)`
    width: ${props => props.width || "45px"};
    height: ${props => props.height || "50px"};
`;

export const SmallText = styled(Text)`
    font-size: 10px;
    line-height: 16px;
    max-width: 300px;
`;

export const StackTopPositioned = styled(Stack)`
    .StyledStack__StyledStackLayer-ajspsk-1:nth-child(2) {
        top: ${props => props.adjustChildTopPosition || props.top};
        left: ${props => props.size === "small" ? `2%` : `25%`};
        right: ${props => props.size === "small" ? `2%` : `25%`};
        transform: ${props => props.size === "small" ? `none` : `none`};
        z-index: 5;
    }
`;

export const StackBottomPositioned = styled(Stack)`
    .StyledStack__StyledStackLayer-ajspsk-1:nth-child(2) {
        bottom: ${props => props.adjustChildBottomPosition || props.bottom};
    }
`;
