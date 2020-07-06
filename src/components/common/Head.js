import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Box, Header, Text, Nav, DropButton, Image, ResponsiveContext } from 'grommet';
import Button from '../common/Button';
import { StyledAnchor } from '../common/styledComponents';
import { Menu as MenuIcon } from 'grommet-icons';
import vremoteLogo from '../../assets/Logo/Default.svg';
import { navigateTo } from '../../store/actions/route'
import { getState } from '../../store/selectors/route';

const Head = () => {
    const size = React.useContext(ResponsiveContext);
    const dispatch = useDispatch();
    const { location } = useSelector(getState);
    const headerLabel = [{ label: "Home", path: "/" },
    { label: "CTO", path: "" }, { label: "Devoper", path: "/pricing" },
    { label: "Designer", path: "/join-us" }, { label: "Blog", path: "" }
    ];
    const headerClickHandler = ({ path }) => {
        if (!path) return;
        dispatch(navigateTo({ path }));
    }
    const drop = (
        <DropButton
            dropAlign={{ top: 'bottom', right: 'right' }}
            dropContent={
                <Box pad={{ vertical: "medium", horizontal: "xsmall" }} gap="small" width="small" align="start" background="light-2">
                    {headerLabel.map((label, k) => <Box key={k} margin={{ left: "small" }} gap={"small"}>
                        <StyledAnchor label={label.label}
                            className={label.path === location.pathname && "active"}
                            onClick={() => headerClickHandler(label)} />
                    </Box>)}
                </Box>
            }>
            <Box background="brand" pad={{ horizontal: "medium", vertical: "small" }} round="small"
                margin={{ top: "small", bottom: "0", right: "small" }}>
                <MenuIcon color="white" />
            </Box>
        </DropButton>
    );
    const Inline = (
        <Nav direction="row" margin={{ right: "large" }} align="center">
            {headerLabel.map((label, k) => <StyledAnchor key={k} label={label.label}
                className={label.path === location.pathname && "active"}
                onClick={() => headerClickHandler(label)} />)}
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

