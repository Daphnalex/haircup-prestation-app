import React from "react";

const Header = (props) => {
    return(
        <nav className="navbar">
            <a className="navbar-brand" href="#">
                <img src={props.logosrc} height="30" alt=""/>
            </a>
        </nav>
    )
};

export default Header;