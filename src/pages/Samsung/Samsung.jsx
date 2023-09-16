import React, {Fragment, useContext, useEffect, useState} from 'react';
import a from "../../assets/brend/a.jpg";
import a2 from "../../assets/brend/a2.jpg";
import a3 from "../../assets/brend/a3.jpg";
import tab1 from "../../assets/tabs/tab1.jpg";
import tab2 from "../../assets/tabs/tab2.jpg";
import tab3 from "../../assets/tabs/tab3.jpg";
import tab4 from "../../assets/tabs/tab4.jpg";
import s from "../../assets/brend/s.png";
import s2 from "../../assets/brend/s2.jpg";
import s3 from "../../assets/brend/s3.jpg";
import SamsungCard from "../../components/SamsungCard/SamsungCard";
import {CustomContext} from "../../config/context/context";

const Samsung = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    };

    const {hitSale, getHitSale4} = useContext(CustomContext)

    useEffect(() => {
        getHitSale4()
    }, [])

    return (
        <section className="samsung">
            <div className="container">
                <div className="samsung__top">

                    <h2 className="samsung__top-title">
                        Samsung
                    </h2>

                    <div className="samsung__top-col">
                        <div className="samsung__top-row">
                            <img src={s} alt="" className="samsung__top-img"/>
                            <div className="samsung__top-text">
                                Телефоны <span>Samsung</span> - это продукты южнокорейской компании Samsung Electronics, одного из крупнейших производителей потребительской электроники в мире. Samsung предлагает разнообразные модели смартфонов под своей линейкой Galaxy, которая охватывает разные ценовые категории и потребительские потребности. Samsung производит широкий спектр смартфонов, начиная от бюджетных моделей до премиум-класса. Это позволяет им удовлетворить потребности разных категорий пользователей. Samsung остается одним из наиболее признанных и распространенных брендов смартфонов в мире. Их продукты предлагают множество функций и вариантов выбора для пользователей с разными потребностями и бюджетами.
                            </div>
                        </div>
                        <div className="samsung__top-row">
                            <div className="samsung__top-text">
                                Многие смартфоны <span>Samsung</span> оснащены высококачественными AMOLED-дисплеями, которые обеспечивают яркие цвета и глубокие черные цвета, что делает их подходящими для просмотра мультимедийного контента и игр. Линейка Samsung Galaxy Note предлагает уникальный S Pen, который позволяет пользователям писать, рисовать и управлять устройством с большой точностью. Это особенно полезно для творческих и профессиональных задач. Смартфоны Samsung обычно имеют мощные камеры, включая модели с множеством объективов и функциями съемки, такими как ночной режим и суперзамедлененная съемка.
                            </div>
                            <img src={s2} alt="" className="samsung__top-img"/>
                        </div>
                        <div className="samsung__top-row">
                            <img src={s3} alt="" className="samsung__top-img"/>
                            <div className="samsung__top-text">
                                В большинстве случаев смартфоны <span>Samsung</span> работают на операционной системе Android, что предоставляет пользователям доступ к широкому выбору приложений из магазина Google Play. Samsung обеспечивает регулярные обновления операционной системы и безопасности, что поддерживает устройства актуальными и защищенными. Samsung постоянно работает над инновациями в мире мобильных технологий, включая внедрение новых технологий, таких как гибкие дисплеи и различные способы взаимодействия с устройством.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <section className="samsung__nav">
                <div className="container">
                    <div className="samsung__tab">
                        <div className="samsung__row">
                            <div
                                className={toggleState === 1 ? "samsung__row-title samsung__active" : "samsung__row-title"}
                                onClick={() => toggleTab(1)}
                            >Батарея</div>
                            <div
                                className={toggleState === 2 ? "samsung__row-title samsung__active" : "samsung__row-title"}
                                onClick={() => toggleTab(2)}
                            >Камера</div>
                            <div
                                className={toggleState === 3 ? "samsung__row-title samsung__active" : "samsung__row-title"}
                                onClick={() => toggleTab(3)}
                            >Память</div>
                            <div
                                className={toggleState === 4 ? "samsung__row-title samsung__active" : "samsung__row-title"}
                                onClick={() => toggleTab(4)}
                            >Экран</div>
                        </div>
                        <div className="samsung__tabs">
                            <div
                                className={toggleState === 1 ? "samsung__tabs-tab samsung__active2" : "samsung__tabs-tab"}
                            >
                                <div className="samsung__tabs-block">
                                    <div className="samsung__tabs-imgs">
                                        <img src={tab1} alt="" className="samsung__tabs-img"/>
                                    </div>
                                    <div className="samsung__tabs-info">
                                        <p className="samsung__tabs-text">
                                            Емкость батарей Samsung может варьироваться в зависимости от
                                            модели и устройства. Более высокая емкость позволяет дольше
                                            использовать устройство без подзарядки. Многие смартфоны
                                            Samsung поддерживают технологию быстрой зарядки, такую как
                                            Adaptive Fast Charging и Super Fast Charging, что позволяет
                                            быстро заряжать устройство даже за короткий промежуток времени.
                                            Некоторые модели смартфонов Samsung также поддерживают
                                            беспроводную зарядку, что обеспечивает удобство при зарядке
                                            без необходимости использования кабеля. Samsung придает большое
                                            значение безопасности и стабильности батарей, чтобы предотвратить
                                            перегрев и другие проблемы, которые могут возникнуть при использовании
                                            батарей.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={toggleState === 2 ? "samsung__tabs-tab samsung__active2" : "samsung__tabs-tab"}
                            >
                                <div className="samsung__tabs-block">
                                    <div className="samsung__tabs-imgs">
                                        <img src={tab2} alt="" className="tabs__tabs-img"/>
                                    </div>
                                    <div className="samsung__tabs-info">
                                        <p className="samsung__tabs-text">
                                            Многие смартфоны Samsung оснащены множеством камерных
                                            объективов, включая широкоугольные, телеобъективы и
                                            макрообъективы. Это позволяет пользователю снимать
                                            разнообразные типы фотографий, от широких пейзажей
                                            до портретов и макросъемки. Samsung предлагает
                                            высокоразрешающие камеры, включая модели с разрешением
                                            108 мегапикселей и более, что позволяет создавать
                                            фотографии с выдающейся детализацией. Камеры Samsung
                                            обычно включают в себя различные технологии съемки,
                                            такие как оптическая стабилизация изображения (OIS),
                                            ночная съемка, съемка в высоком разрешении, Super
                                            Steady Video (устойчивое видео) и многое другое.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={toggleState === 3 ? "samsung__tabs-tab samsung__active2" : "samsung__tabs-tab"}
                            >
                                <div className="samsung__tabs-block">
                                    <div className="samsung__tabs-imgs">
                                        <img src={tab3} alt="" className="tabs__tabs-img"/>
                                    </div>
                                    <div className="samsung__tabs-info">
                                        <p className="samsung__tabs-text">
                                            Samsung является одним из крупнейших производителей NAND-флэш-памяти
                                            в мире. Этот тип памяти используется в различных устройствах для
                                            хранения данных, включая смартфоны, флэш-накопители, SSD-накопители
                                            и другие. Samsung также производит DRAM-память, которая используется
                                            для временного хранения данных и быстрого доступа к ним. Эта память
                                            широко применяется в компьютерах и серверах для обработки данных.
                                            Samsung предлагает мобильную DRAM и NAND-память для смартфонов и планшетов.
                                            Они обеспечивают быстрое выполнение задач. Samsung также известна своими
                                            SSD-накопителями, которые обеспечивают высокую скорость чтения и записи
                                            данных, а также улучшают производительность компьютеров и ноутбуков.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={toggleState === 4 ? "samsung__tabs-tab samsung__active2" : "samsung__tabs-tab"}
                            >
                                <div className="samsung__tabs-block">
                                    <div className="samsung__tabs-imgs">
                                        <img src={tab4} alt="" className="samsung__tabs-img"/>
                                    </div>
                                    <div className="samsung__tabs-info">
                                        <p className="samsung__tabs-text">
                                            Samsung использует различные технологии экранов, включая AMOLED,
                                            QLED и LCD. Каждая из них имеет свои уникальные характеристики
                                            и преимущества. Samsung выпускает экраны с различными разрешениями,
                                            включая Full HD, 4K и даже 8K для телевизоров. Это обеспечивает
                                            четкое и высококачественное изображение. Samsung также предлагает
                                            изогнутые экраны, которые создают впечатление погружения и улучшают
                                            обзор в некоторых устройствах, таких как смартфоны и мониторы.
                                            Некоторые экраны Samsung предлагают высокие частоты обновления,
                                            такие как 120 Гц или даже 240 Гц, что обеспечивает более плавное
                                            отображение движения при играх и видеосъемке. Многие устройства
                                            Samsung оснащены сенсорными экранами,
                                            которые позволяют пользователю взаимодействовать с устройством
                                            прикосновением и жестами.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="samsung__row2">
                    {
                        hitSale.map((item) => (
                            <Fragment key={item.id}>
                                <SamsungCard item={item}/>
                            </Fragment>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Samsung;