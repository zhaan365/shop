import React, { useEffect, useState} from 'react';
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import {Link, useParams} from 'react-router-dom'
import api from "../../config/api/api";
import {HiOutlineArrowNarrowRight} from "react-icons/hi"


const Product = () => {

    const params = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        api(`products/${params.id}`).json()
            .then((res) => setProduct(res))
    }, [])

    console.log(product);

    if ('id' in product){
        return (
            <>
                <section className="product">
                    <div className="container">

                        <div className="checkout__link">
                            <Link to={'/'} className="checkout__link-text">
                                Главная
                            </Link>

                            <span><HiOutlineArrowNarrowRight/></span>

                            <p className="checkout__link-text2">
                                {product.title}
                            </p>
                        </div>
                        <div className="product__row">
                            <ProductSlider product={product}/>
                            <ProductInfo product={product}/>
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