import React, {useContext} from 'react';
import {AiOutlineApple} from 'react-icons/ai'
import {FaRegHeart} from 'react-icons/fa'
import {BiShoppingBag} from 'react-icons/bi'
import {BsPerson, BsFillPersonFill} from 'react-icons/bs'
import {Link, useLocation} from 'react-router-dom'
import {CustomContext} from "../../../config/context/context";

const Header = () => {

    const {user, logOutUser} = useContext(CustomContext)

    return (
        <header className="header">
            <div className="container">

                <div className="header__nav">

                    <Link to={'/'} className="header__link">
                        <AiOutlineApple size={35} className="header__link-img"/>
                        ER
                    </Link>
                    <div className="header__menu">
                        <Link to={'/'} className="header__menu-link">
                            Главная
                        </Link>
                        <Link to={'/about'} className="header__menu-link">
                            О нас
                        </Link>
                        <Link to={'/catalog'} className="header__menu-link">
                            Каталог
                        </Link>
                        <Link to={'/redmi'} className="header__menu-link">
                            Xiaomi
                        </Link>
                        <Link to={'/apple'} className="header__menu-link">
                            Apple
                        </Link>
                        <Link to={'/samsung'} className="header__menu-link">
                            Samsung
                        </Link>
                        </div>
                    <div className="header__icons">

                        <Link to={'/favorites'}>
                            <FaRegHeart className="header__icons-icon"/>
                        </Link>
                        <Link to={user.email?.length ? '/cart' : '/login'}>
                            <BiShoppingBag className="header__icons-icon2"/>
                        </Link>
                        {
                            location.pathname === '/room' ? <span className="header__icons-span" onClick={logOutUser}><BsFillPersonFill size={27}/></span> : <Link to={user.email?.length ? '/room' : '/login'}>
                                <BsPerson className="header__icons-icon3"/>
                            </Link>
                        }
                    </div>

                </div>

            </div>
        </header>
    );
};

export default Header;