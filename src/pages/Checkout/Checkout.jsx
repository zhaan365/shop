import {Link} from 'react-router-dom'
import {HiOutlineMail} from 'react-icons/hi'
import {BiPhone} from 'react-icons/bi'
import {FiUser, FiUsers} from 'react-icons/fi'
import React, {useContext, useState} from "react";
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import {BiHomeAlt} from "react-icons/bi"
import {CustomContext} from "../../config/context/context";
import img from "../../assets/products/samsung1.png";
import {useForm} from "react-hook-form";
import {useNavigate} from 'react-router-dom'



const Checkout = () => {

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm()

    const {user, addOrder} = useContext(CustomContext)

    const [popup, setPopup] = useState(false)
    const [count, setCount] = useState(2)

    const navigate = useNavigate()

    const submitForm = (data) => {
        let order = {
            ...data,
            status: 'pending',
            order: user.carts,
            totalPrice: user.carts?.reduce((acc, rec) => acc + rec.price * rec.count, 0)
        }
        addOrder(order, setPopup, redirect)
    }

    const redirect = () => {
        setInterval(() => {
            setCount(prev => {
                if (prev < 2){
                    navigate('/')
                    return 1
                }
                return prev - 1
            })
        }, 1000)
    }

    return (
        <section className="checkout">
            <div className="container">

               <div className="checkout__nav">

                   <div className="checkout__nav-naves">
                       <div className="checkout__link">
                           <Link to={'/'} className="checkout__link-text">
                               Главная
                           </Link>

                           <span><HiOutlineArrowNarrowRight/></span>

                           <p className="checkout__link-text2">
                               Оформление заказа
                           </p>
                       </div>
                       <h2 className="checkout__title">
                           Оформление заказа
                       </h2>

                       <div className="checkout__block">
                           <h4 className="checkout__block-title checkout__left-title1">
                               Общее количество покупных товаров:
                               <span>
                                    {
                                        user.carts?.reduce((acc, rec) => acc + rec.count, 0)
                                    }
                                </span>
                           </h4>
                           <h4 className="checkout__block-title checkout__left-title2">
                               Итого:
                               <span>{user.carts?.reduce((acc, rec) => acc + rec.price * rec.count, 0)} c.</span>
                           </h4>
                       </div>
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
                   <form action="" className="checkout__form checkout__form-right" onSubmit={handleSubmit(submitForm)}>

                       {/*<div className="checkout__form-top">*/}

                       {/*    <h3 className="checkout__form-title">*/}
                       {/*        Данные покупателя*/}
                       {/*    </h3>*/}

                       {/*    <div className="checkout__form-field">*/}
                       {/*        <input {...register('name')} type="text" value={user.name} className="checkout__form-input" placeholder="Имя"/>*/}
                       {/*        <FiUser className="checkout__form-icon" size={25}/>*/}
                       {/*    </div>*/}
                       {/*    <div className="checkout__form-field">*/}
                       {/*        <input {...register('surname')} type="text" value={user.surname} className="checkout__form-input" placeholder="Фамилия"/>*/}
                       {/*        <FiUsers className="checkout__form-icon" size={25}/>*/}
                       {/*    </div>*/}
                       {/*    <div className="checkout__form-field">*/}
                       {/*        <input {...register('email')} type="email" value={user.email} className="checkout__form-input" placeholder="E-mail"/>*/}
                       {/*        <HiOutlineMail className="checkout__form-icon" size={25}/>*/}
                       {/*    </div>*/}
                       {/*    <div className="checkout__form-field">*/}
                       {/*        <input {...register('phone')} type="tel" value={user.phone} className="checkout__form-input" placeholder="Телефон"/>*/}
                       {/*        <BiPhone className="checkout__form-icon" size={25}/>*/}
                       {/*    </div>*/}

                       {/*</div>*/}
                       <div className="checkout__form-bottom">

                           <h3 className="checkout__form-title">
                               Адрес получателя
                           </h3>

                           <div className="checkout__form-field">
                               <input {...register('country')} type="text" className="checkout__form-input" placeholder="Страна"/>
                               <BiHomeAlt className="checkout__form-icon" size={25}/>
                           </div>
                           <div className="checkout__form-field">
                               <input {...register('city')} type="text" className="checkout__form-input" placeholder="Город"/>
                               <BiHomeAlt className="checkout__form-icon" size={25}/>
                           </div>
                           <div className="checkout__form-field">
                               <input {...register('street')} type="text" className="checkout__form-input" placeholder="Улица"/>
                               <BiHomeAlt className="checkout__form-icon" size={25}/>
                           </div>
                           <div className="checkout__form-field">
                               <input {...register('home')} type="text" className="checkout__form-input" placeholder="Дом"/>
                               <BiHomeAlt className="checkout__form-icon" size={25}/>
                           </div>
                           <div className="checkout__form-field">
                               <input {...register('flat')} type="text" className="checkout__form-input" placeholder="Квартира"/>
                               <BiHomeAlt className="checkout__form-icon" size={25}/>
                           </div>
                       </div>
                       <div className="checkout__box">
                           <h2 className="checkout__box-title">
                               Оплату можете сделать переводом
                           </h2>
                           <div className="checkout__box-line"></div>
                           <div className="checkout__box-text">
                               <span>Номер карты:</span>
                               4598-5794-6589-2134
                           </div>
                       </div>
                       <button className="checkout__form-btn">
                           Разместить заказ
                       </button>

                   </form>

               </div>

            </div>
            {
                popup ? <div className="checkout__popup">
                    <h2 className="checkout__popup-title">
                        Ваш заказ выполнен !
                    </h2>
                    {/*<p className="checkout__popup-text">*/}
                    {/*    Через {count} сек вас перекинет на главную страницу*/}
                    {/*</p>*/}
                    {/*<button className="checkout__popup-btn" onClick={() => navigate('/')}>*/}
                    {/*    Перейти на главную страницу*/}
                    {/*</button>*/}
                </div> : ''
            }
        </section>
    );
};

export default Checkout;