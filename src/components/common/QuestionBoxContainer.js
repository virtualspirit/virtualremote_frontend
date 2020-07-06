import React from 'react';
import { Box, ResponsiveContext } from 'grommet';
import { FormPreviousLink, FormNextLink } from 'grommet-icons';
import { ShadowBox } from './styledComponents';
import Button from './Button';

const QuestionBoxContainer = ({ children, qn, hideButton, backButtonHandler, nextButtonHandler }) => {
    const size = React.useContext(ResponsiveContext);

    return (
        <ShadowBox pad="small" {...(size !== "small" && { margin: { left: "small" } })}>
            {children}
            {!hideButton && <Box direction="row" gap="xsmall" margin={{ top: "small", bottom: "small" }} pad="small"
                style={{ boxShadow: "inset 0 1px 0 0 #EEF0F1" }}>
                <Button name="Back" color="#4A4F53"
                    {...{ style: { backgroundColor: "#fff", borderRadius: "2px" } }}
                    justify="center"
                    direction="row-reverse"
                    gap="xsmall"
                    width="xsmall"
                    onClick={() => backButtonHandler?.({ qn: Number(qn) })} >
                    <FormPreviousLink color="#4A4F53" />
                </Button>
                <Button name="Next"
                    justify="center"
                    direction="row"
                    gap="xsmall"
                    width="xsmall"
                    onClick={() => nextButtonHandler?.({ qn: Number(qn) })} >
                    <FormNextLink />
                </Button>
            </Box>}
        </ShadowBox>
    )
}

export default QuestionBoxContainer;
