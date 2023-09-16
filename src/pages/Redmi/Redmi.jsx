import React, {useContext, useEffect, Fragment, useState} from 'react';
import {CustomContext} from "../../config/context/context";
import SamsungCard from "../../components/SamsungCard/SamsungCard";
import tab1 from "../../assets/tabs/tab1.jpg";
import tab2 from "../../assets/tabs/tab2.jpg";
import tab3 from "../../assets/tabs/tab3.jpg";
import tab4 from "../../assets/tabs/tab4.jpg";
import x from "../../assets/brend/x.png"
import x2 from "../../assets/brend/x2.jpg"
import x3 from "../../assets/brend/x3.jpg"

const Redmi = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    };

    const {hitSale, getHitSale2} = useContext(CustomContext)

    useEffect(() => {
        getHitSale2()
    }, [])

    return (
        <section className="samsung">
            <div className="container">
                <div className="samsung__top">

                    <h2 className="samsung__top-title">
                        Xiaomi
                    </h2>

                    <div className="samsung__top-col">
                        <div className="samsung__top-row">
                            <img src={x} alt="" className="samsung__top-img"/>
                            <div className="samsung__top-text">
                                <span>Xiaomi</span> - это китайская технологическая компания, основанная в апреле 2010 года Лей Цзюнь в Пекине, Китай. Xiaomi стала одним из ведущих производителей смартфонов и других электронных устройств в мире, и она известна своими инновационными продуктами и доступными ценами. Смартфоны Xiaomi пользуются популярностью благодаря сочетанию передовых технологий, стильного дизайна и доступной цены. Они предлагают широкий выбор моделей, начиная от бюджетных до премиальных, что делает их доступными для широкой аудитории потребителей.
                            </div>
                        </div>
                        <div className="samsung__top-row">
                            <div className="samsung__top-text">
                                <span>Xiaomi</span> часто внедряет новые технологии в своих устройствах. Например, многие из их смартфонов имеют выдающиеся камеры, быстрые процессоры и усовершенствованные дизайны. MIUI - собственная операционная система Xiaomi, основанная на Android. MIUI предоставляет уникальный пользовательский интерфейс и множество дополнительных функций, позволяя настроить устройство под свои потребности. Одной из ключевых философий Xiaomi является предоставление высококачественных устройств по доступным ценам. Это сделало их продукты популярными в разных частях мира.
                            </div>
                            <img src={x2} alt="" className="samsung__top-img"/>
                        </div>
                        <div className="samsung__top-row">
                            <img src={x3} alt="" className="samsung__top-img"/>
                            <div className="samsung__top-text">
                                <span>Xiaomi</span> активно расширяет свое глобальное присутствие и предоставляет свои продукты во многих странах мира. Это позволяет им привлекать миллионы пользователей со всего мира. Xiaomi обеспечивает своих пользователей обновлениями операционной системы и обновлениями безопасности для продолжительной поддержки устройств. Xiaomi пользуются популярностью благодаря сочетанию передовых технологий, стильного дизайна и доступной цены. Xiaomi инвестирует значительные средства в исследования и разработки, что позволяет им разрабатывать собственные чипы и компоненты для своих устройств. Это помогает им управлять качеством и производительностью своих продуктов.
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
                                            Xiaomi использует литий-ионные батареи, которые являются стандартом
                                            для большинства современных мобильных устройств. Эти батареи обеспечивают
                                            высокую энергоемкость и надежность. Емкость батарей Xiaomi может
                                            значительно варьироваться в зависимости от модели смартфона. Больший
                                            объем емкости обычно означает долгую автономную работу устройства без
                                            подзарядки. Многие смартфоны Xiaomi поддерживают технологии быстрой
                                            зарядки. MIUI, операционная система, используемая в смартфонах Xiaomi,
                                            предоставляет инструменты для управления энергопотреблением, что помогает
                                            увеличить автономность работы устройства. Xiaomi постоянно внедряет
                                            инновации в области батарей, такие как более эффективные зарядные
                                            алгоритмы и улучшенные системы управления энергопотреблением.
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
                                            Многие современные смартфоны Xiaomi оснащены системами многокамер,
                                            которые включают в себя различные объективы, такие как широкоугольный,
                                            телеобъектив, макрообъектив и даже объективы для съемки в ультрашироком
                                            формате. Это позволяет пользователям снимать разнообразные типы фотографий
                                            и видеозаписей. Xiaomi предлагает смартфоны с различными разрешениями
                                            камер, включая модели с высоким разрешением, такие как 108 мегапикселей,
                                            что позволяет создавать фотографии с выдающейся детализацией. Xiaomi применяет
                                            ИИ-технологии для оптимизации сцен и параметров камеры, что позволяет улучшить
                                            качество фотографий и видеозаписей.
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
                                            Устройства Xiaomi обычно имеют встроенную память (ROM), которая может
                                            варьироваться в зависимости от модели. Обычно это начинается с минимального
                                            объема, например, 64 ГБ, и может достигать более крупных размеров, таких
                                            как 256 ГБ и более. Некоторые смартфоны Xiaomi также предоставляют слоты
                                            для карт памяти microSD, что позволяет расширять объем хранения данных,
                                            если встроенной памяти недостаточно. Xiaomi также предлагает облачное
                                            хранилище Mi Cloud, где пользователи могут хранить свои данные и резервные
                                            копии файлов. MIUI, операционная система, разработанная Xiaomi, включает
                                            в себя инструменты для управления памятью, такие как оптимизация хранилища
                                            и автоматическое удаление ненужных файлов, чтобы освободить место.
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
                                            Xiaomi использует различные технологии экранов в зависимости от модели.
                                            Это включает в себя IPS LCD, AMOLED и др. Например, многие модели Mi и
                                            Redmi оснащены IPS LCD экранами, в то время как некоторые высококлассные
                                            модели, такие как Mi 11, используют AMOLED. Смартфоны Xiaomi предлагают
                                            экраны с разными разрешениями, начиная от Full HD и до Quad HD. Некоторые
                                            модели Xiaomi поддерживают высокую частоту обновления экрана, такую как
                                            90 Гц или 120 Гц, что делает взаимодействие с устройством более плавным
                                            и отзывчивым. Экраны Xiaomi обеспечивают широкий диапазон цветов и хорошую
                                            точность цветопередачи, что важно для воспроизведения контента с высокой
                                            цветовой точностью. Многие смартфоны Xiaomi покрыты защитным стеклом,
                                            таким как Corning Gorilla Glass, что делает их более устойчивыми к
                                            царапинам и повреждениям.
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

export default Redmi;