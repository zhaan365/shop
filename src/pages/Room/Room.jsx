import React, {useContext, useState} from 'react';
import {HiOutlineMail} from 'react-icons/hi'
import {BiPhone} from 'react-icons/bi'
import {FiUser, FiUsers} from 'react-icons/fi'
import {Link} from "react-router-dom";
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import {CustomContext} from "../../config/context/context";
import ava from '../../assets/ava.jpg'
import img from "../../assets/products/samsung1.png";



const Room = () => {

    const {user} = useContext(CustomContext)

    return (
        <section className="room">
            <div className="container">

                <div className="checkout__link">
                    <Link to={'/'} className="checkout__link-text">
                        Главная
                    </Link>

                    <span><HiOutlineArrowNarrowRight/></span>

                    <p className="checkout__link-text2">
                        Личный кабинет
                    </p>
                </div>

                <div className="room__row">
                    <form className="room__form">

                        <div className="room__form-ava">
                            <img src={ava} alt="" className="room__form-img"/>
                            <div className="room__form-field2">
                                <input type="text" defaultValue={user.name} placeholder="Имя" className="room__form-input2"/>
                                <FiUser size={25}/>
                            </div>
                        </div>

                        <div className="room__form-row">

                            <div className="room__form-label">
                                Фамилия
                                <div className="room__form-field">
                                    <input type="text" defaultValue={user.surname} placeholder="Фамилия" className="room__form-input"/>
                                    <FiUsers size={25}/>
                                </div>
                            </div>
                            <div className="room__form-label">
                                E-mail
                                <div className="room__form-field">
                                    <input type="email" defaultValue={user.email} placeholder="E-mail" className="room__form-input"/>
                                    <HiOutlineMail size={25}/>
                                </div>
                            </div>
                            <div className="room__form-label">
                                Номер телефона
                                <div className="room__form-field">
                                    <input type="tel" defaultValue={user.phone} placeholder="Номер телефона" className="room__form-input"/>
                                    <BiPhone size={25}/>
                                </div>
                            </div>
                            {/*<p className="room__form-point">*/}
                            {/*    Кол-во баллов у вас: {user.point}*/}
                            {/*</p>*/}

                        </div>
                        {/*<button className="room__form-btn">*/}
                        {/*    Изменить*/}
                        {/*</button>*/}
                    </form>


                    <div className="room__cart">
                        <div className="checkout__form-left">
                            {
                                user.carts?.map((item) => (
                                    <div key={item.id} className="checkout__card">
                                        <img src={`/${item.image}`} alt="" className="checkout__card-img"/>
                                        <div className="checkout__card-info">
                                            <h2 className="checkout__card-title">
                                                {item.title}
                                            </h2>
                                            <p className="checkout__card-price">
                                                Общая цена:
                                                <span>
                                                        {
                                                            item.price * item.count
                                                        }
                                                    </span>
                                                c.
                                            </p>
                                            <h3 className="checkout__card-subtitle">
                                                Количество:
                                                <span>{
                                                    item.count
                                                }</span>
                                            </h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    </div>
                </div>

        </section>
    );
};

export default Room;