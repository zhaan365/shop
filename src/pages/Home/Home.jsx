import React from 'react';
import Banner2 from "./Banner2/Banner2";
import HitSale from "../../components/HitSale/HitSale";
import Swiper from "./Cards/Cards";
import Tabs from "../../components/Tabs/Tabs";


const Home = () => {
    return (
        <>
            <Banner2/>
            <Swiper/>
            <Tabs/>
            <HitSale/>
        </>
    );
};

export default Home;