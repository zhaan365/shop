import React from 'react';
import HeaderTop from "./HedaerTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import {useLocation} from 'react-router-dom'

const Header = () => {

    const location = useLocation()

    console.log(location)

    return (
        <header className="header">
            {
                location.pathname === '/' ? <HeaderTop/> : ''
            }
            <HeaderBottom/>
        </header>
    );
};

export default Header;