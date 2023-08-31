import React, {useContext, useEffect, useRef, useState} from 'react';
import {Link, useLocation} from 'react-router-dom'
import {TfiEmail} from 'react-icons/tfi'
import {useForm} from "react-hook-form";
import {FiUser, FiUsers} from 'react-icons/fi'
import {BiPhone} from 'react-icons/bi'
import {RiLoginBoxLine} from 'react-icons/ri'
import {BsFillEyeFill, BsFillEyeSlashFill} from 'react-icons/bs'
import InputMask from 'react-input-mask'
import api from "../../config/api/api";
import {CustomContext} from "../../config/context/context";


const Form = () => {

    const [passwordView, setPasswordView] = useState(false)

    const {registerUser, loginUser} = useContext(CustomContext)

    const password = useRef()

    const location = useLocation()


    const {
        register,
        handleSubmit,
        formState:{
            errors
        },
        reset,
        watch
    } = useForm({
        mode: "onBlur"
    })

    password.current = watch("password")


    const submitForm = (data) => {
        let {confirmPwd, ...user} = data

        if (location.pathname === '/login'){
            loginUser(user)
        } else {
            registerUser(user)
        }

    }

    return (
        <div className="form">

            <div className="form__left">

                <p className="form__logo" ref={password}><RiLoginBoxLine/></p>

                <form noValidate className="form__content" onSubmit={handleSubmit(submitForm)}>
                    <div className="form__content-nav">

                        <h2 className="form__content-title">
                            {
                                location.pathname === '/login' ? 'Sign in' : 'Sign up'
                            }
                        </h2>
                        <p className="form__content-text">
                            {
                                location.pathname === '/login' ? 'Если у вас нет учетной записи, зарегистрируйтесь' : 'Если у вас уже есть учетная запись зарегистрируйтесь'
                            }
                            <br/>
                            Вы можете
                            {
                                location.pathname === '/login' ? <Link className="form__content-link" to={'/register'}> зарегистрироваться здесь !</Link> : <Link className="form__content-link" to={'/login'}> войти здесь !</Link>
                            }

                        </p>

                        <label className="form__label">
                            <span className="form__label-text">Email</span>
                            <div className="form__label-field">
                            <span className="form__label-icon">
                                <TfiEmail/>
                            </span>
                                <input {...register('email', {
                                    required: {
                                        message: 'Email обязательно к заполнению',
                                        value: true
                                    },
                                    minLength: {
                                        message: 'Минимум 10 символов',
                                        value: 10
                                    },
                                    pattern: {
                                        message: 'Напишите правильно свой Email',
                                        value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                                    }
                                })} placeholder="Введите ваш адрес электронной почты" className="form__label-input" type="email"/>
                            </div>
                            <p className="form__label-error">
                                {errors.email && errors.email?.message}
                            </p>
                        </label>
                        {
                            location.pathname === '/register' && <label className="form__label">
                                <span className="form__label-text">Name</span>
                                <div className="form__label-field">
                            <span className="form__label-icon">
                                <FiUser/>
                            </span>
                                    <input {...register('name', {
                                        required: {
                                            message: 'Имя обязательно к заполнению',
                                            value: true
                                        },
                                        minLength: {
                                            message: 'Минимум 3 символов',
                                            value: 3
                                        },
                                        pattern: {
                                            message: 'Напишите правильно своё имя',
                                            value: /^[а-яА-ЯёЁa-zA-Z]+$/
                                        }
                                    })} placeholder="Введите ваше имя" className="form__label-input" type="text"/>
                                </div>
                                <p className="form__label-error">
                                    {errors.name && errors.name?.message}
                                </p>
                            </label>
                        }
                        {
                            location.pathname === '/register' && <label className="form__label">
                                <span className="form__label-text">Surname</span>
                                <div className="form__label-field">
                            <span className="form__label-icon">
                                <FiUsers/>
                            </span>
                                    <input {...register('surname', {
                                        required: {
                                            message: 'Фамилия обязательно к заполнению',
                                            value: true
                                        },
                                        minLength: {
                                            message: 'Минимум 5 символов',
                                            value: 3
                                        },
                                        pattern: {
                                            message: 'Напишите правильно свою фамилию',
                                            value: /^[а-яА-ЯёЁa-zA-Z]+$/
                                        }
                                    })} placeholder="Введите вашу фамилию" className="form__label-input" type="text"/>
                                </div>
                                <p className="form__label-error">
                                    {errors.surname && errors.surname?.message}
                                </p>
                            </label>
                        }
                        {
                            location.pathname === '/register' && <label className="form__label">
                                <span className="form__label-text">Phone</span>
                                <div className="form__label-field">
                            <span className="form__label-icon">
                                <BiPhone/>
                            </span>
                                    <InputMask mask={`+\\9\\96(999)99-99-99`} {...register('phone', {
                                        required: {
                                            value: true,
                                            message: 'Это поле обязательное'
                                        },
                                        pattern: {
                                            value: /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/,
                                            message: 'Напишите правильно свой номер телефона'
                                        }
                                    })} placeholder="Введите ваш номер телефона" className="form__label-input" type="tel"/>
                                </div>
                                <p className="form__label-error">
                                    {errors.phone && errors.phone?.message}
                                </p>
                            </label>
                        }
                        <label className="form__label">
                            <span className="form__label-text">Password</span>
                            <div className="form__label-field">
                            <span className="form__label-icon" onClick={() => setPasswordView(prev => !prev)}>
                                {
                                    passwordView ? <BsFillEyeSlashFill/> : <BsFillEyeFill/>
                                }
                            </span>
                                <input {...register('password', {
                                    required: {
                                        message: 'Пароль обязательно к заполнению',
                                        value: true
                                    },
                                    pattern: {
                                        value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                                        message: 'Пароль должен содержать не менее 5 символов, заглавную букву, число!'
                                    }
                                })} placeholder="Введите ваш пароль" className="form__label-input" type={passwordView ? 'text' : 'password'}/>

                            </div>
                            <p className="form__label-error">
                                {errors.password && errors.password?.message}
                            </p>
                        </label>
                        {
                            location.pathname === '/register' && <label className="form__label">
                                <span className="form__label-text">Confirm password</span>
                                <div className="form__label-field">
                                    {/*<span className="form__label-icon" onClick={() => setPasswordView(prev => !prev)}>*/}
                                    {/*    {*/}
                                    {/*        passwordView ? <BsFillEyeSlashFill/> : <BsFillEyeFill/>*/}
                                    {/*    }*/}
                                    {/*</span>*/}
                                    <input {...register('confirmPwd', {
                                        validate: value =>
                                            value === password.current || "Пароль не совпадает"
                                    })} placeholder="Введите ваш пароль ещё раз" className="form__label-input" type={passwordView ? 'text' : 'password'}/>

                                </div>
                                <p className="form__label-error">
                                    {errors.confirmPwd && errors.confirmPwd?.message}
                                </p>
                            </label>
                        }
                        <button className="form__btn" type="submit">Login</button>

                    </div>
                </form>
            </div>



            <div className="form__right">

            </div>


        </div>
    );
};

export default Form;