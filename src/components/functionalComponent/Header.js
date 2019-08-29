import React from "react";

const Header = (props) => {
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={props.logosrc} height="30" alt="" onClick={()=> window.location.replace('/')}/>
            </div>
        </nav>
    )
};

export default Header;