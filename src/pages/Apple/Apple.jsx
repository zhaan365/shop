import React, {Fragment, useContext, useEffect, useState} from 'react';
import a from "../../assets/brend/a.jpg";
import a2 from "../../assets/brend/a2.jpg";
import a3 from "../../assets/brend/a3.jpg";
import tab1 from "../../assets/tabs/tab1.jpg";
import tab2 from "../../assets/tabs/tab2.jpg";
import tab3 from "../../assets/tabs/tab3.jpg";
import tab4 from "../../assets/tabs/tab4.jpg";
import SamsungCard from "../../components/SamsungCard/SamsungCard";
import {CustomContext} from "../../config/context/context";

const Apple = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    };

    const {hitSale, getHitSale3} = useContext(CustomContext)

    useEffect(() => {
        getHitSale3()
    }, [])


    return (
        <section className="samsung">
            <div className="container">
                <div className="samsung__top">

                    <h2 className="samsung__top-title">
                        Apple
                    </h2>

                    <div className="samsung__top-col">
                        <div className="samsung__top-row">
                            <img src={a} alt="" className="samsung__top-img"/>
                            <div className="samsung__top-text">
                                Телефоны <span>Apple</span>, также известные как iPhone, представляют собой линейку смартфонов, разработанных и производимых американской компанией Apple Inc. С момента выпуска первого iPhone в 2007 году эти устройства стали одними из самых популярных и влиятельных смартфонов в мире. iPhone остается популярным выбором среди пользователей, ценящих качество, производительность и интеграцию с другими устройствами Apple. Эти смартфоны играют важную роль в мире мобильных технологий и продолжают оставаться символом инноваций в отрасли.  Компания активно работает над снижением экологического воздействия своей продукции и участвует в инициативах по устойчивому развитию.
                            </div>
                        </div>
                        <div className="samsung__top-row">
                            <div className="samsung__top-text">
                                <span>iPhone</span> работают на операционной системе iOS, разработанной Apple. iOS отличается стабильностью, безопасностью и интуитивным пользовательским интерфейсом. Кроме того, он предоставляет доступ к огромному количеству приложений в App Store. Телефоны Apple славятся своим стильным и минималистичным дизайном, а также использованием высококачественных материалов, таких как стекло и алюминий. Это придает устройствам премиальный вид и ощущение. iPhone оснащены мощными процессорами, которые обеспечивают быструю и плавную работу. Это делает их подходящими как для повседневных задач, так и для требовательных приложений и игр.
                            </div>
                            <img src={a2} alt="" className="samsung__top-img"/>
                        </div>
                        <div className="samsung__top-row">
                            <img src={a3} alt="" className="samsung__top-img"/>
                            <div className="samsung__top-text">
                                Apple считается одним из лидеров в области мобильной фотографии. Современные iPhone оснащены выдающимися камерами и различными функциями съемки, такими как Smart HDR и ночной режим. Apple уделяет большое внимание защите данных пользователей и предоставляет инструменты для управления приватностью, такие как Face ID и Touch ID. Apple предоставляет регулярные обновления операционной системы iOS, что обеспечивает долгосрочную поддержку и актуальность устройств. Компания также предлагает ряд сервисов, таких как Apple Music, Apple TV+, Apple Arcade и Apple News+, что расширяет функциональность устройств.
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
                                            Большинство устройств Apple, включая iPhone,
                                            iPad и MacBook, используют литий-ионные батареи,
                                            которые обеспечивают высокую энергоемкость и отличное
                                            соотношение между весом и емкостью. Емкость батарей
                                            Apple различается в зависимости от модели устройства.
                                            Apple обычно указывает оценку времени работы устройства
                                            при активном использовании, чтобы помочь пользователям
                                            определить, как долго они могут использовать устройство
                                            без подзарядки. Apple регулярно выпускает обновления
                                            программного обеспечения, которые могут включать в себя
                                            оптимизации для батарей. Они также предоставляют
                                            инструменты для мониторинга состояния батареи на
                                            устройствах.
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
                                            Многие современные модели iPhone оборудованы системой многокамер,
                                            которая включает в себя разнообразные объективы, такие как
                                            широкоугольный, телеобъектив и макрообъектив. Это позволяет
                                            пользователям снимать различные типы фотографий и видеозаписей.
                                            Apple применяет мощные процессоры и искусственный интеллект для
                                            обработки изображений, что позволяет улучшить качество фотографий
                                            и видеозаписей. Это включает в себя распознавание сцен, оптимизацию
                                            настроек камеры и режимы съемки. Многие модели iPhone поддерживают
                                            режим ночной съемки, который позволяет снимать качественные фотографии
                                            даже в условиях низкой освещенности. Apple внедряет технологии, такие
                                            как Smart HDR и Deep Fusion, чтобы улучшить динамический диапазон и
                                            детализацию фотографий.
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
                                            Устройства Apple обычно имеют встроенную память, которая может
                                            варьироваться в зависимости от модели. Обычно это начинается с
                                            минимального объема памяти, например, 64 ГБ для iPhone, и может
                                            достигать значительных размеров, таких как 1 ТБ для MacBook.
                                            RAM важна для производительности устройства. Устройства Apple,
                                            такие как MacBook и некоторые модели iPad, предлагают разные
                                            варианты объема оперативной памяти. Больший объем RAM позволяет
                                            более эффективно обрабатывать приложения и задачи. Устройства
                                            Apple используют флэш-память для хранения данных. Она обеспечивает
                                            высокую скорость чтения и записи, что важно для быстрого доступа
                                            к приложениям и файлам.
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
                                            Apple использует различные технологии экранов в зависимости от типа
                                            устройства. Например, iPhone использует OLED и LCD экраны, а некоторые
                                            модели MacBook оснащены Retina-дисплеями. Технология Retina предлагает
                                            высокую плотность пикселей, что обеспечивает очень четкое и детализированное
                                            изображение. Retina-дисплеи присутствуют как в смартфонах, так и в ноутбуках
                                            Apple. Экраны Apple обеспечивают широкий диапазон цветов и высокую точность
                                            цветопередачи, что важно для редактирования фотографий и видео. Некоторые
                                            экраны Apple поддерживают технологию HDR, что обеспечивает более высокий
                                            контраст и яркость при просмотре подходящего контента. Многие экраны Apple
                                            покрыты защитным стеклом, таким как Ceramic Shield на iPhone, что делает их
                                            более устойчивыми к царапинам и повреждениям.
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

export default Apple;