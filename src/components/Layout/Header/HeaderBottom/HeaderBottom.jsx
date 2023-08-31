import React, {useContext, useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {AiOutlineApple} from 'react-icons/ai'
import {FiSearch} from 'react-icons/fi'
import {FaRegHeart} from 'react-icons/fa'
import {BiShoppingBag} from 'react-icons/bi'
import {BsPerson, BsFillPersonFill} from 'react-icons/bs'
import {CustomContext} from "../../../../config/context/context";
import {useLocation} from 'react-router-dom'


const HeaderBottom = () => {

    const {user, logOutUser, search, setSearch} = useContext(CustomContext)

    const location = useLocation()

    const navigate = useNavigate()

    useEffect(() => {
        if (location.pathname !== '/catalog'){
            setSearch('')
        }
    }, [location.pathname])

    return (
        <div className="header__bottom">
            <div className="container">
                <div className="header__bottom-nav">

                    <div className="header__bottom-start">
                        <Link to={'/'} className="header__bottom-link">
                            <AiOutlineApple size={35} className="header__bottom-img"/>
                            ER
                        </Link>
                        <div className="header__bottom-field">

                            <FiSearch className="header__bottom-search"/>
                            <input
                                value={search}
                                type="search"
                                className="header__bottom-input"
                                placeholder="поиск"
                                onChange={(e) => {
                                    if (location.pathname !== '/catalog'){
                                        navigate('/catalog')
                                    }
                                    setSearch(e.target.value)
                                }}
                            />

                        </div>
                    </div>
                    <div className="header__bottom-icons">

                        <Link to={'/favorites'}>
                            <FaRegHeart className="header__bottom-icon"/>
                        </Link>
                        <Link to={user.email?.length ? '/cart' : '/login'}>
                            <BiShoppingBag className="header__bottom-icon2"/>
                        </Link>
                        {
                            location.pathname === '/room' ? <span className="header__bottom-span" onClick={logOutUser}><BsFillPersonFill size={35}/></span> : <Link to={user.email?.length ? '/room' : '/login'}>
                                <BsPerson className="header__bottom-icon3"/>
                            </Link>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeaderBottom;