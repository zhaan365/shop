import {Link} from 'react-router-dom'
import {FaRegUser} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BiPhone} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'


const Checkout = () => {
    return (
        <section className="checkout">
            <div className="container">

                <h2 className="checkout__title">
                    Оформление заказа
                </h2>
                <div className="checkout__link">
                    <Link to={'/'} className="checkout__link-text">
                        Главная
                    </Link>

                    <div className="checkout__link-line"></div>

                    <p className="checkout__link-text2">
                        Оформление заказа
                    </p>
                </div>


                <form action="" className="checkout__form">

                    <div className="checkout__form-top">

                        <div className="checkout__form-block2">
                            <h3 className="checkout__form-title">
                                Ваш заказ
                            </h3>

                            <ul className="checkout__form-list">
                                <li className="checkout__form-item">
                                    <p className="checkout__form-prices">
                                        Товар
                                    </p>
                                    <p className="checkout__form-prices">
                                        Всего
                                    </p>
                                </li>

                                <li className="checkout__form-item2">
                                    <p className="checkout__form-product">
                                        Samsung s23 ultra
                                    </p>
                                    <p className="checkout__form-price">
                                        158 000 c.
                                    </p>
                                </li>

                                <li className="checkout__form-item3 checkout__form-count">
                                    <p className="checkout__form-prices">
                                        Итого
                                    </p>
                                    <p className="checkout__form-price">
                                        158 000 c.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="checkout__form-block">
                            <h3 className="checkout__form-title">
                                Данные покупателя
                            </h3>

                            <div className="checkout__form-fields">

                                <div className="checkout__form-fields2">
                                    <FaRegUser size={18}/>
                                    <input type="text" className="checkout__form-field" placeholder="Имя"/>
                                </div>

                                <div className="checkout__form-fields2">
                                    <HiOutlineMail size={18}/>
                                    <input type="email" className="checkout__form-field" placeholder="E-mail"/>
                                </div>

                                <div className="checkout__form-fields2">
                                    <BiPhone size={18}/>
                                    <input type="tel" className="checkout__form-field" placeholder="Телефон"/>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="checkout__form-bottom">

                        <div className="checkout__form-block2 checkout__form-block4">
                            <h3 className="checkout__form-title checkout__form-title4">
                                Способы оплаты
                            </h3>

                            <label className="checkout__form-box">
                                <input type="checkbox"/>
                                Оплата наличными
                            </label>

                            <button className="checkout__form-btn" type="submit">
                                Разместить заказ
                            </button>

                        </div>
                        <div className="checkout__form-block">
                            <h3 className="checkout__form-title">
                                Адрес получателя
                            </h3>

                            <div className="checkout__form-fields">

                                <div className="checkout__form-fields2">
                                    <FiUsers size={18}/>
                                    <input type="text" className="checkout__form-field" placeholder="Страна"/>
                                </div>
                                <div className="checkout__form-fields2">
                                    <FiUsers size={18}/>
                                    <input type="text" className="checkout__form-field" placeholder="Город"/>
                                </div>
                                <div className="checkout__form-fields2">
                                    <FiUsers size={18}/>
                                    <input type="text" className="checkout__form-field" placeholder="Улица"/>
                                </div>
                                <div className="checkout__form-fields2">
                                    <FiUsers size={18}/>
                                    <input type="text" className="checkout__form-field" placeholder="Дом"/>
                                </div>
                                <div className="checkout__form-fields2">
                                    <FiUsers size={18}/>
                                    <input type="text" className="checkout__form-field" placeholder="Квартира"/>
                                </div>

                            </div>
                        </div>

                    </div>


                </form>


            </div>
        </section>
    );
};

export default Checkout;