import React from "react";
import {Link} from "react-router-dom";

function Header(props){
    return(
        <div id="header" className={props.color}>
            <div className="header__port">
              <Link to="/portfolio">portfolio</Link>
            </div>
            <div className="header__logo">
                <Link to="/">Webstoryboy</Link>
            </div>
            <div className="header__menu">
                <ul>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Reference">Reference</Link></li>
                    <li><Link to="/Youtube">Youtube</Link></li>
                    <li><Link to="/Script">Script</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;