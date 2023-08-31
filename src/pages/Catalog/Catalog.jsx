import React, {Fragment, useContext, useEffect, useState} from 'react';
import AsideFilter from "../../components/AsideFilter/AsideFilter";
import Card from "../../components/Card/Card";
import api from "../../config/api/api";
import {CustomContext} from "../../config/context/context";
import {Link, useLocation} from 'react-router-dom'

const Catalog = () => {

    const [products, setProducts] = useState([])
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState('')
    const [slider, setSlider] = useState([50000, 220000])

    const {search, setSearch} = useContext(CustomContext)

    const location = useLocation()


    useEffect(() => {
        let queryParamsApi = `?${search.length ? `title_like=${search}&` : ''}${category.length ? `category=${category}&` : ''}${sort.length && sort !== 'rate' ? `_sort=price&_order=${sort}&` : sort.length ? `_sort=rate&_order=desc&` : ''}`

        let queryParamsFromTo = `price_gte=${slider[0]}&price_lte=${slider[1]}`

        api(`products${queryParamsApi}${queryParamsFromTo}`).json()
            .then((res) => setProducts(res))

    }, [search, sort, category, slider])



    return (
        <main>
            <section className="catalog">
                <div className="container">

                    <div className="checkout__link">
                        <Link to={'/'} className="checkout__link-text">
                            Главная
                        </Link>

                        <div className="checkout__link-line"></div>

                        <p className="checkout__link-text2">
                            Каталог
                        </p>
                    </div>

                    <div className="catalog__row">
                        <div className="hitSale__row catalog__content">
                            {
                                products.map((item) => (
                                    <Fragment key={item.id}>
                                        <Card item={item}/>
                                    </Fragment>
                                ))
                            }
                        </div>
                        <AsideFilter slider={slider} setSlider={setSlider} category={category} setCategory={setCategory} sort={sort} setSort={setSort}/>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Catalog;