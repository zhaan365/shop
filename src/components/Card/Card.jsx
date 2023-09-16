
import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import {CustomContext} from "../../config/context/context";
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'


const Card = ({item}) => {

    const {favorites, favoritesHandle, addCarts, user, addCartsCountPlus, addCartsCountMinus} = useContext(CustomContext)

    // const navigate = useNavigate()


    return (
        <div className="card">

            <div className="card__nav">
                <Link to={`/product/${item.id}`}>
                    <img src={`/${item.image}`} alt="" className="card__img"/>
                </Link>
                <div className="card__nav-info">
                    <h3 className="card__title">
                        {item.title}
                    </h3>
                    <div className="card__moneys">
                        <p className="card__money">
                            {item.price} c.
                        </p>
                        <span onClick={() => favoritesHandle(item)}>
                        {
                            favorites.some(el => el.id === item.id) ? <AiFillHeart color={'red'} size={23}/> : <AiOutlineHeart size={23}/>
                        }
                    </span>
                    </div>
                </div>
            </div>




            {/*{*/}
            {/*    user.carts?.some(el => el.id === item.id) ?*/}
            {/*        <div className="card__sizes">*/}
            {/*        <button style={{background: 'red'}} onClick={() => addCartsCountMinus(item.id)} className="card__sizes-btn">-</button>*/}
            {/*        <span>{*/}
            {/*            user.carts.find(el => el.id === item.id).count*/}
            {/*        }</span>*/}
            {/*        <button style={{background: 'green'}} onClick={() => addCartsCountPlus(item.id)} className="card__sizes-btn">+</button>*/}
            {/*    </div>*/}
            {/*        : <button type='button' className="card__btn" onClick={() => {*/}
            {/*            if ('id' in user){*/}
            {/*                addCarts(item)*/}
            {/*            } else {*/}
            {/*                navigate('/login')*/}
            {/*            }*/}
            {/*        }}>*/}
            {/*            добавить в корзину*/}
            {/*        </button>*/}
            {/*}*/}








        </div>
    );
};

export default Card;