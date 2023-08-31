import React, {Fragment, useContext, useEffect, useState} from 'react';
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import {Link, useParams} from 'react-router-dom'
import api from "../../config/api/api";
import HitSale from "../../components/HitSale/HitSale";
import Card from "../../components/Card/Card";
import {CustomContext} from "../../config/context/context";


const Product = () => {

    const {hitSale, getHitSale} = useContext(CustomContext)

    useEffect(() => {
        getHitSale()
    }, [])

    const params = useParams()

    const [product, setProduct] = useState({})

    useEffect(() => {
        api(`products/${params.id}`).json()
            .then((res) => setProduct(res))
    }, [])

    console.log(product)

    if ('id' in product){
        return (
            <>
                <section className="product">
                    <div className="container">

                        <div className="checkout__link">
                            <Link to={'/'} className="checkout__link-text">
                                Главная
                            </Link>

                            <div className="checkout__link-line"></div>

                            <p className="checkout__link-text2">
                                Продукт
                            </p>
                        </div>

                        <div className="product__row">
                            <ProductSlider product={product}/>
                            <ProductInfo product={product}/>
                        </div>

                        <div className="hitSale__row">
                            {
                                hitSale.map((item) => (
                                    <Fragment key={item.id}>
                                        <Card item={item}/>
                                    </Fragment>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </>
        );
    } else {
        return <h2>Загрузка...</h2>
    }



};

export default Product;