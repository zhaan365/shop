
import React, {useContext, useState} from "react";
import {CustomContext} from "../../config/context/context";
import {Link, useNavigate} from "react-router-dom"
import {HiOutlineArrowNarrowRight} from "react-icons/hi"


const Cart = () => {


    const navigate = useNavigate()


    const {user, addCartsCountMinus, addCartsCountPlus} = useContext(CustomContext)


    return (
        <section className="cart">
            <div className="container">

                {
                    user.carts?.length ? <div>
                        <div className="checkout__link">
                            <Link to={'/'} className="checkout__link-text">
                                Главная
                            </Link>

                            <span><HiOutlineArrowNarrowRight/></span>

                            <p className="checkout__link-text2">
                                Корзинка
                            </p>
                        </div>
                        <div className="cart__top">
                            <p className="cart__top-title">
                                Корзинка товаров
                            </p>
                            <p className="cart__top-text">
                                Количество покупных товаров:
                                <span>
                            {
                                user.carts?.reduce((acc, rec) => acc + rec.count, 0)
                            }
                        </span>
                            </p>
                        </div>
                        <div className="cart__row">
                            {
                                user.carts?.map((item) => (
                                    <div className="cart__card">
                                        <div className="cart__card-nav">
                                            <Link to={`/product/${item.id}`} className="cart__card-link">
                                                <img className="cart__card-img" src={`/${item.image}`} alt=""/>
                                            </Link>
                                            <h3 className="cart__card-title">
                                                {item.title}
                                            </h3>
                                            <h3 className="cart__card-prices">
                                                Общая сумма:
                                            </h3>
                                            <p className="cart__card-price">
                                                {
                                                    item.price * item.count
                                                }
                                                c.
                                            </p>
                                        </div>
                                        <div className="cart__card-size">
                                            Количество:
                                            <div className="cart__card-btns">
                                                <button style={{background: '#282828'}} onClick={() => addCartsCountMinus(item.id)} className="cart__card-btn2">-</button>
                                                <span>{
                                                    item.count
                                                }</span>
                                                <button style={{background: '#282828'}} onClick={() => addCartsCountPlus(item.id)} className="cart__card-btn3">+</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="cart__bottom">
                            <div>
                                <p className="cart__bottom-count">
                                    <span>Итого:</span> {user.carts?.reduce((acc, rec) => acc + rec.price * rec.count, 0)} c.
                                </p>

                                <div className="cart__bottom-line"></div>
                            </div>

                            <button className="cart__bottom-btn" onClick={() => navigate('/checkout')}>
                                Заказать
                            </button>
                        </div>
                    </div> : <div className="cart__titles"><h2 className="cart__title">Ваша корзина пуста !</h2></div>
                }

            </div>
        </section>
    );




};

export default Cart;