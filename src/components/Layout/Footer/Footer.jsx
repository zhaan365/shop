import React from 'react';
import {Link} from 'react-router-dom'
import i from "../../../assets/contact/i.png";
import w from "../../../assets/contact/w.png";
import t from "../../../assets/contact/t.png";
import f from "../../../assets/contact/f.png";
import {AiOutlineApple} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'



const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__nav">
                    <div className="footer__row">

                        <div className="footer__card">
                            <h2 className="footer__card-title">
                                О компании:
                            </h2>
                            <div className="footer__card-line"></div>
                            <div className="footer__card-row">
                                <Link to={'*'} className="footer__card-text">О нас</Link>
                                <Link to={'*'} className="footer__card-text">Блог</Link>
                                <Link to={'*'} className="footer__card-text">Покупки</Link>
                                <Link to={'*'} className="footer__card-text">Контакты</Link>
                            </div>
                        </div>
                        <div className="footer__card">
                            <h2 className="footer__card-title">
                                Бренды:
                            </h2>
                            <div className="footer__card-line"></div>
                            <div className="footer__card-row">
                                <Link to={'*'} className="footer__card-text">Xiaomi</Link>
                                <Link to={'*'} className="footer__card-text">Samsung</Link>
                                <Link to={'*'} className="footer__card-text">Apple</Link>
                                <Link to={'*'} className="footer__card-text">Nokia</Link>
                            </div>
                        </div>
                        <div className="footer__card">
                            <h2 className="footer__card-title">
                                Бренды:
                            </h2>
                            <div className="footer__card-line"></div>
                            <div className="footer__card-row">
                                <Link to={'*'} className="footer__card-text">Xiaomi</Link>
                                <Link to={'*'} className="footer__card-text">Samsung</Link>
                                <Link to={'*'} className="footer__card-text">Apple</Link>
                                <Link to={'*'} className="footer__card-text">Nokia</Link>
                            </div>
                        </div>
                        <div className="footer__card">
                            <h2 className="footer__card-title">
                                Мой аккаунт:
                            </h2>
                            <div className="footer__card-line"></div>
                            <div className="footer__card-row">
                                <Link to={'*'} className="footer__card-text">Войти</Link>
                                <Link to={'*'} className="footer__card-text">Выйти</Link>
                                <Link to={'*'} className="footer__card-text">Кабинет</Link>
                                <Link to={'*'} className="footer__card-text">Почта</Link>
                            </div>
                        </div>
                        <div className="footer__icons">
                            <div className="footer__icons-title">
                            <span>
                                <AiOutlineApple size={50} className="footer__icons-img"/>
                            </span>
                                <span>E</span>lda<span>R</span>io
                            </div>
                            <div className="footer__icons-icons">
                                <Link to={'https://www.instagram.com/'} className="footer__icons-link"><img className="footer__icons-icon" src={i} alt=""/></Link>
                                <Link to={'https://web.whatsapp.com/'} className="footer__icons-link"><img className="footer__icons-icon" src={w} alt=""/></Link>
                                <Link to={'https://web.telegram.org/a/'} className="footer__icons-link"><img className="footer__icons-icon" src={t} alt=""/></Link>
                                <Link to={'https://ru-ru.facebook.com/'} className="footer__icons-link"><img className="footer__icons-icon" src={f} alt=""/></Link>
                            </div>
                            <div className="footer__icons-email">
                            <span>
                                <HiOutlineMail size={20}/>
                            </span>
                                zhaan365@gmail.com
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;