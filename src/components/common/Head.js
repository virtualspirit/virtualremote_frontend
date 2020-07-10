import React from 'react';
import vremoteLogo from '../../assets/Logo/Default.svg';
import { useSelector, useDispatch } from "react-redux";
import { navigateTo } from '../../store/actions/route'
import { getState } from '../../store/selectors/route';

const Head = () => {
    const dispatch = useDispatch();
    const { location } = useSelector(getState);
    const [showMobileNav, setMobileNav] = React.useState(false);
    const headerLabel = [{ label: "Home", path: "/" },
    { label: "CTO", path: "" }, { label: "Devoper", path: "" },
    { label: "Designer", path: "/join-us" }, { label: "Blogs", path: "/blogs" }, { label: "Start A Project", path: "/start-a-project" }
    ];
    const headerClickHandler = ({ path }) => {
        if (!path) return;
        dispatch(navigateTo({ path }));
    }
    const headerButton = {
        backgroundColor: "#574CFA",
        borderRadius: "6px",
        boxShadow: "0 2px 4px 0 rgba(0, 61, 92, 0.1)",
        color: "#fff"
    }
    const mobileNav = {
        nav: "mobile-nav d-lg-none",
        button: "fa fa-times",
        container: "container mobile-nav-active"
    }

    return (
        <header id="header" className="fixed-top">
            <div className={showMobileNav ? mobileNav.container : "container"}>
                <div className="logo float-left">
                    <a className="scrollto pointer"
                        onClick={() => headerClickHandler({ path: "/" })}>
                        <img src={vremoteLogo} alt="logo" className="img-fluid" />
                    </a>
                </div>
                <nav className={showMobileNav ? mobileNav.nav : "main-nav float-right d-none d-lg-block"}>
                    <ul>
                        {headerLabel.map((label, k) => <li key={k}
                            className={`${label.path === location.pathname && "active"} ${label.label === "Devoper" && "drop-down"}`}
                            onClick={() => headerClickHandler(label)} >
                            <a className="pointer" {...(label.label === 'Start A Project' && { style: headerButton })}>{label.label}</a>
                        </li>)}
                    </ul>
                </nav>
                <button type="button" className="mobile-nav-toggle d-lg-none"
                    onClick={() => { setMobileNav(prev => !prev) }}>
                    <i className={showMobileNav ? mobileNav.button : "fa fa-bars"}></i>
                </button>
                <div className="mobile-nav-overly" style={{ display: showMobileNav ? "block" : "none" }}
                    onClick={() => { setMobileNav(false) }}></div>
            </div>
        </header>
    )
}

export default Head
