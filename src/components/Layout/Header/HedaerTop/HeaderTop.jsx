
import React from 'react';
import {Link} from 'react-router-dom'
import {FaPhoneAlt} from 'react-icons/fa'


const HeaderTop = () => {
    return (
        <div className="header__top">
            <div className="container">
                <div className="header__top-nav">

                    <div className="header__top-menu">
                        <Link to={'/'} className="header__top-link">
                            Главная
                        </Link>
                        <Link to={'/about'} className="header__top-link">
                            О нас
                        </Link>
                        <Link to={'/contact'} className="header__top-link">
                            Контакты
                        </Link>
                        <Link to={'/catalog'} className="header__top-link">
                            Каталог
                        </Link>
                    </div>
                    <div className="header__top-tel">
                        <FaPhoneAlt className="header__top-phone"/>
                        +996(702)508688
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeaderTop;