import React from 'react';
import { ReactComponent as Logo } from "../../assets/hor-logo-small.svg";

import './Logo.scss';

const LogoContainer = () => {
    return (
        <div className='logo-container'>
            <Logo />
        </div>
    );
}

export default LogoContainer;