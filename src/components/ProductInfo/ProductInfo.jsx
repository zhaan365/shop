
import React, {useContext, useState} from 'react';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import {CustomContext} from "../../config/context/context";
import {Link} from "react-router-dom"


const ProductInfo = ({product}) => {

    const {favorites, favoritesHandle, addCarts} = useContext(CustomContext)

    return (
        <div className="product__info">

            <div className="product__info-nav">
                <div className="product__info-nav1">
                    <h2 className="product__info-title">
                        {product.title}
                    </h2>
                    <h3 className="product__info-subtitle">
                        {product.subtitle}
                    </h3>
                </div>
                <p className="product__info-text">
                    {product.price} с.
                </p>
            </div>
            <div className="product__info-block">
                <h4 className="product__info-subtitle2">
                    {product.category}
                </h4>

                <div className="product__info-block2">
                    <div className="product__info-boxes">
                        <p className="product__info-comp">ширина</p>
                        <p className="product__info-comp2">{product.width}</p>
                    </div>

                    <div className="product__info-boxes">
                        <p className="product__info-comp">высота</p>
                        <p className="product__info-comp2">{product.height}</p>
                    </div>

                    <div className="product__info-boxes">
                        <p className="product__info-comp">диагональ</p>
                        <p className="product__info-comp2">{product.diagonal}</p>
                    </div>
                </div>

            </div>

            <div className="product__info-box">
                <Link to={'/cart'} onClick={() => addCarts(product)} className="product__info-btn">
                    Добавить в корзину
                </Link>
                <p className="product__info-link" onClick={() => favoritesHandle(product)}>
                    {
                        favorites.some(el => el.id === product.id) ? <AiFillHeart size={18} color={'red'}/> : <AiOutlineHeart size={18}/>
                    }
                    Добавить в желаемое
                </p>
            </div>

            <p className="product__info-text2">
                Описание :
            </p>
            <p className="product__info-text3">
                {product.description}
            </p>

        </div>
    );
};

export default ProductInfo;