
import React, {useContext, useState} from "react";
import {CustomContext} from "../../config/context/context";
import {useNavigate} from "react-router-dom"


const Cart = () => {


    const navigate = useNavigate()


    const {user, addCartsCountMinus, addCartsCountPlus} = useContext(CustomContext)


    return (
        <section className="cart">
            <div className="container">

                <div className="cart__top">
                    <h2 className="cart__top-title">
                        Ваша корзина
                    </h2>

                    <p className="cart__top-text">
                        {
                            user.carts?.reduce((acc, rec) => acc + rec.count, 0)
                        } предмета
                    </p>
                </div>
                <div className="cart__row">
                    {
                        user.carts?.map((item) => (
                            <div className="cart__card">

                                <img className="cart__card-img" src={`/${item.image}`} alt=""/>


                                <h3 className="cart__card-title">
                                    {item.title}
                                </h3>
                                <div className="cart__card-size">
                                    Количество:
                                    <div className="cart__card-btns">
                                        <button style={{background: 'red'}} onClick={() => addCartsCountMinus(item.id)} className="cart__card-btn2">-</button>
                                        <span>{
                                            item.count
                                        }</span>
                                        <button style={{background: 'green'}} onClick={() => addCartsCountPlus(item.id)} className="cart__card-btn2">+</button>
                                    </div>
                                </div>

                                <div className="cart__card-line"></div>
                                <p className="cart__card-price">
                                    {
                                        item.price * item.count
                                    }
                                    c.
                                </p>

                                <button className="cart__card-btn">
                                    X
                                </button>

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
                        оформить заказ
                    </button>
                </div>

            </div>
        </section>
    );




};

export default Cart;