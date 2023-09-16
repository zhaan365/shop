import React, {Fragment, useContext, useEffect, useState} from 'react';
import {CustomContext} from "../../config/context/context";
import Card from "../../components/Card/Card";
import {Link} from "react-router-dom";
import {HiOutlineArrowNarrowRight} from "react-icons/hi"

const Favorites = () => {

    const {favorites} = useContext(CustomContext)

    const [page, setPage] = useState(1)

    let favoritesPages = new Array(Math.ceil(favorites.length / 4)).fill(null, 0)

    useEffect(() => {
        if (page > favoritesPages.length){
            setPage(favoritesPages.length)
        }
    }, [favorites])


    if (favorites.length){
        return (
            <section className="hitSale favorites__favorites2">
                <div className="container">

                    <div className="checkout__link">
                        <Link to={'/'} className="checkout__link-text">
                            Главная
                        </Link>

                        <span><HiOutlineArrowNarrowRight/></span>

                        <p className="checkout__link-text2">
                            Избранные
                        </p>
                    </div>
                    <div className="favorites__btn">
                        <button className="hitSale__title favorites__title">
                            Избранные товары :
                        </button>
                    </div>
                    <div className="hitSale__row">
                        {
                            favorites.filter((item, idx) => idx >= page * 4 - 4 && idx < page * 4).map((item) => (
                                <Fragment key={item.id}>
                                    <Card item={item}/>
                                </Fragment>
                            ))
                        }
                    </div>
                    {
                        favoritesPages.length > 1 && <ul className="favorites__menu">
                            {
                                favoritesPages.map((item, idx) => (
                                    <li className="favorites__menu-num" onClick={() => setPage(idx + 1)} key={idx}>{idx + 1}</li>
                                ))
                            }
                        </ul>
                    }

                </div>
            </section>
        );
    } else {
        return <div className="favorites">
            <button className="favorites__subtitle">Список избранных пуст !</button>
        </div>
    }

};

export default Favorites;