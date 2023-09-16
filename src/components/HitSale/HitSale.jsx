import React, {useContext, useEffect, Fragment} from 'react';
import Card from "../Card/Card";
import {CustomContext} from "../../config/context/context";
import CardSkeleton from "../CardSkeleton/CardSkeleton";



const HitSale = () => {

    const {hitSale, getHitSale, isLoading} = useContext(CustomContext)

    useEffect(() => {
        getHitSale()
    }, [])



    return (
        <section className="hitSale">
            <div className="container">
                <div className="hitSale__box">
                    <h2 className="hitSale__title">
                        Новое поступление
                    </h2>
                </div>
                <div className="hitSale__row">
                    {
                        isLoading ? <CardSkeleton cards={12}/>
                            :
                        hitSale.map((item) => (
                            <Fragment key={item.id}>
                                <Card item={item}/>
                            </Fragment>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default HitSale;