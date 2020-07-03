import React from 'react';
import { Box, Header, Text, Nav, DropButton, Image, ResponsiveContext } from 'grommet';
import Button from '../common/Button';
import { StyledAnchor } from '../common/styledComponents';
import { Menu as MenuIcon } from 'grommet-icons';
import vremoteLogo from '../../assets/Logo/Default.svg';

const Head = () => {
    const size = React.useContext(ResponsiveContext);
    const headerLabel = ["Home", "CTO", "Devoper", "Designer", "Blog"];
    const drop = (
        <DropButton
            dropAlign={{ top: 'bottom', right: 'right' }}
            dropContent={
                <Box pad={{ vertical: "medium", horizontal: "xsmall" }} width="small" align="start" background="light-2">
                    {headerLabel.map((label, k) => <Box key={k} gap={"small"}>{label}</Box>)}
                </Box>
            }>
            <Box background="brand" pad={{ horizontal: "medium", vertical: "small" }} round="small"
                margin={{ top: "small", bottom: "0", right: "small" }}>
                <MenuIcon color="white" />
            </Box>
        </DropButton>
        // <Menu
        //     label="Click me"
        //     items={headerLabel.map(label => ({ label, onClick: () => { } }))}
        // />
    );
    const Inline = (
        <Nav direction="row" margin={{ right: "large" }} align="center">
            {headerLabel.map((label, k) => <StyledAnchor key={k} href="#" label={label} />)}
            <Button name="Start A Poject" onClick={() => { console.log("clicked") }} />
        </Nav >
    );


    return (
        <Header background="#FFFFFF" pad="small" elevation="small">
            <Box direction="row" align="center" gap="small" margin={{ left: "xlarge" }}>
                <Image src={vremoteLogo} />
            </Box>
            {size === "small" ? drop : Inline}
        </Header>
    )
}

export default Head

