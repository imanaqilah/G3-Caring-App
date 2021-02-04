import React from 'react';
import { Link } from "react-router-dom";
import {
    NavItem,
    NavLink
} from 'reactstrap';

const HelpBar = (props) => {

    return (
        <div className="top-bar">
            <div className="container">
                <div className="top-bar-text">
                    <Link className="link-state" to={`/help`}>URGENT HELP</Link>

                </div>
            </div>
        </div>
    )
}

export default HelpBar;