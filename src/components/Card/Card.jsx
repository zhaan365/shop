
import React, {useContext} from 'react';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import {Link, useNavigate} from 'react-router-dom'
import {CustomContext} from "../../config/context/context";


const Card = ({item}) => {

    const {favorites, favoritesHandle, addCarts, user, addCartsCountPlus, addCartsCountMinus} = useContext(CustomContext)

    const navigate = useNavigate()


    return (
        <div className="card">

            <span className="card__fav" onClick={() => favoritesHandle(item)}>
                {
                    favorites.some(el => el.id === item.id) ? <AiFillHeart color={'red'}/> : <AiOutlineHeart size={18}/>
                }
            </span>
            <div className="card__nav">
                <Link to={`/product/${item.id}`}>
                    <img src={`/${item.image}`} alt="" className="card__img"/>
                </Link>
                <h3 className="card__title">
                    {item.title}
                </h3>
                <div className="card__boxes">
                    <h4 className="card__subtitle">
                        {item.subtitle}
                    </h4>
                    <h4 className="card__subtitle">
                        {item.category}
                    </h4>
                </div>
                <p className="card__money">
                    {item.price} c.
                </p>

                <div className="card__block">
                    <div className="card__box">
                        <p className="card__box-title">ширина</p>
                        <p className="card__box-text">{item.width}</p>
                    </div>

                    <div className="card__box">
                        <p className="card__box-title">высота</p>
                        <p className="card__box-text">{item.height}</p>
                    </div>

                    <div className="card__box">
                        <p className="card__box-title">диагональ</p>
                        <p className="card__box-text">{item.diagonal}</p>
                    </div>
                </div>
            </div>




            {
                user.carts?.some(el => el.id === item.id) ?
                    <div className="card__sizes">
                    <button style={{background: 'red'}} onClick={() => addCartsCountMinus(item.id)} className="card__sizes-btn">-</button>
                    <span>{
                        user.carts.find(el => el.id === item.id).count
                    }</span>
                    <button style={{background: 'green'}} onClick={() => addCartsCountPlus(item.id)} className="card__sizes-btn">+</button>
                </div>
                    : <button type='button' className="card__btn" onClick={() => {
                        if ('id' in user){
                            addCarts(item)
                        } else {
                            navigate('/login')
                        }
                    }}>
                        добавить в корзину
                    </button>
            }








        </div>
    );
};

export default Card;