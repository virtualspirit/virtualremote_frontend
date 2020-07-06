import React from 'react';
import { useDispatch } from "react-redux";
import { Avatar, Box, Heading, Paragraph, Image, Stack, ResponsiveContext } from 'grommet';
import bg2 from '../../assets/bg/bg2.png';
import workFromHomeImg from '../../assets/Ilustration/working-from-home.png';
import Button from '../common/Button';
import { FormNextLink } from 'grommet-icons';
import { navigateTo } from '../../store/actions/route'

const Section1 = () => {
    const size = React.useContext(ResponsiveContext);
    const dispatch = useDispatch();

    return (
        <Box fill >
            <Box overflow="hidden" fill basis="auto">
                <Image src={bg2} fit="contain" />
            </Box>
            <Box
                pad={{ horizontal: size === "small" ? "medium" : "xlarge", vertical: size === "small" ? "xsmall" : "medium" }}
                style={{ position: 'absolute' }}
                direction={size === "small" ? "column" : "row"}
                gap={size === "small" ? "small" : "xsmall"}>
                <Box width={"xlarge"} alignSelf={size === "small" ? "center" : "start"}>
                    <Heading level="2" margin={{ bottom: "none" }}>Are you a freelancer or an </Heading>
                    <Heading level="2" margin={{ bottom: "none", top: "none" }}>agency? Find work in minutes!"</Heading>
                    <Paragraph size="small">Get hired easily by hot companies and startups from all over the world,</Paragraph>
                    <Button name="JOIN AS A TALENT"
                        direction="row"
                        gap="small"
                        width="small"
                        onClick={() => { dispatch(navigateTo({path: `/join-us`})) }}>
                        <FormNextLink />
                    </Button>
                </Box>
                <Box height="medium" alignSelf="end"
                    margin={{ left: size === "small" ? "xxsmall" : "small", vertical: size === "small" ? "xsmall" : "medium" }}>
                    <Image src={workFromHomeImg} fit="contain" />
                </Box>
            </Box>
        </Box>
    )
}

export default Section1


//  tested Stack
        // <Box fill>
        //     <Box direction={size === "small" ? "column" : "row"}
        //         background={{
        //             "position": "center",
        //             "repeat": "repeat-y",
        //             "size": "contain",
        //             "image": `url(${bg2})`
        //         }}
        //         pad={{ left: size === "small" ? "small" : "xlarge", vertical: size === "small" ? "large" : "large" }}>
        //         <Stack anchor="top-right" >
        //             <Box alignSelf={size === "small" ? "center" : "start"}>
        //                 <Heading level="2" margin={{ bottom: "none" }} textAlign={size === "small" ? "center" : "start"}>Are you a freelancer or an </Heading>
        //                 <Heading level="2" margin={{ bottom: "none", top: "none" }} textAlign={size === "small" ? "center" : "start"} >agency? Find work in minutes!"</Heading>
        //                 <Paragraph size="small" textAlign={size === "small" ? "center" : "start"}>Get hired easily by hot companies and startups from all over the world,</Paragraph>
        //                 <Button name="JOIN AS A TALENT" size={size}
        //                     alignSelf={size === "small" ? "center" : "start"}
        //                     direction="row"
        //                     gap="small"
        //                     width="small"
        //                     onClick={() => { console.log("clicked") }}>
        //                     <Box pad="xsmall"><FormNextLink /></Box>
        //                 </Button>
        //             </Box>
        //             <Box height="medium" alignSelf="end" width="medium">
        //                 <Image src={workFromHomeImg} fill fit="contain" />
        //             </Box>
        //         </Stack >
        //     </Box>
        // </Box>