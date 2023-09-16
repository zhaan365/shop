import React, {useState} from 'react';
import tab1 from '../../assets/tabs/tab1.jpg'
import tab2 from '../../assets/tabs/tab2.jpg'
import tab3 from '../../assets/tabs/tab3.jpg'
import tab4 from '../../assets/tabs/tab4.jpg'



const Tabs = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    };

    return (
        <section className="tabs">
            <div className="container">

                <h2 className="tabs__title">
                    О телефоне:
                </h2>

                <div className="tabs__row">
                    <div
                        className={toggleState === 1 ? "tabs__row-title tabs__active" : "tabs__row-title"}
                        onClick={() => toggleTab(1)}
                    >Батарея</div>
                    <div
                        className={toggleState === 2 ? "tabs__row-title tabs__active" : "tabs__row-title"}
                        onClick={() => toggleTab(2)}
                    >Камера</div>
                    <div
                        className={toggleState === 3 ? "tabs__row-title tabs__active" : "tabs__row-title"}
                        onClick={() => toggleTab(3)}
                    >Память</div>
                    <div
                        className={toggleState === 4 ? "tabs__row-title tabs__active" : "tabs__row-title"}
                        onClick={() => toggleTab(4)}
                    >Экран</div>
                </div>
                <div className="tabs__tabs">
                    <div
                        className={toggleState === 1 ? "tabs__tabs-tab tabs__active2" : "tabs__tabs-tab"}
                    >
                        <div className="tabs__tabs-block">
                            <div className="tabs__tabs-imgs">
                                <img src={tab1} alt="" className="tabs__tabs-img"/>
                            </div>
                            <div className="tabs__tabs-info">
                                <h2 className="tabs__tabs-title">
                                    Как правильно выбрать емкость батареи ?
                                </h2>
                                <p className="tabs__tabs-text">
                                    Если смартфон используется только для связи, проверки электронной <br/>
                                    почты и мессенджеров — хватит батареи на 2500 – 3000 мАч. Если <br/>
                                    устройство используется более активно — для общения в соцсетях, <br/>
                                    интернет серфинга, чтения книг и прослушивания музыки, потребуется <br/>
                                    более мощный аккумулятор, емкостью не менее 3500 – 4000 мАч. <br/>
                                    Любителям мобильных игр или заядлым путешественникам стоит <br/>
                                    задуматься о приобретении «долгоиграющих» моделей, оснащенных <br/>
                                    батареями повышенной емкости — от 5000 мАч и больше.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className={toggleState === 2 ? "tabs__tabs-tab tabs__active2" : "tabs__tabs-tab"}
                    >
                        <div className="tabs__tabs-block">
                            <div className="tabs__tabs-imgs">
                                <img src={tab2} alt="" className="tabs__tabs-img"/>
                            </div>
                            <div className="tabs__tabs-info">
                                <h2 className="tabs__tabs-title">
                                    Как выбрать смартфон с хорошей камерой?
                                </h2>
                                <p className="tabs__tabs-text1">
                                    Выбор телефона с хорошей камерой зависит от ваших конкретных <br/>
                                    потребностей и предпочтений и шаги, которые помогут вам принять <br/>
                                    решение:
                                </p>
                                <p className="tabs__tabs-text2">
                                    <span>1.</span> Разрешение и мегапиксели. <br/>
                                    <span>2.</span> Оптическая стабилизация изображения. <br/>
                                    <span>3.</span> Обработка изображений. <br/>
                                    <span>4.</span> Дополнительные функции. <br/>
                                    <span>5.</span> Обзоры и тесты. <br/>
                                    <span>6.</span> Бренд и экосистема. <br/>
                                    <span>7.</span> Операционная система. <br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className={toggleState === 3 ? "tabs__tabs-tab tabs__active2" : "tabs__tabs-tab"}
                    >
                        <div className="tabs__tabs-block">
                            <div className="tabs__tabs-imgs">
                                <img src={tab3} alt="" className="tabs__tabs-img"/>
                            </div>
                            <div className="tabs__tabs-info">
                                <h2 className="tabs__tabs-title">
                                    Как выбрать телефон с хорошей памятью ?
                                </h2>
                                <p className="tabs__tabs-text">
                                    Решите, какие задачи вы планируете выполнять на телефоне. Если <br/>
                                    вы собираетесь много фотографировать, снимать видео, скачивать <br/>
                                    приложения и игры, то вам понадобится больше памяти. Внутренняя <br/>
                                    память (ROM) используется для хранения приложений, медиафайлов <br/>
                                    и данных. Выберите объем памяти, который соответствует вашим <br/>
                                    потребностям. Если вы планируете хранить большое количество <br/>
                                    фотографий, видео, музыки и других медиафайлов, выберите телефон <br/>
                                    с большим объемом памяти или возможностью расширения.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className={toggleState === 4 ? "tabs__tabs-tab tabs__active2" : "tabs__tabs-tab"}
                    >
                        <div className="tabs__tabs-block">
                            <div className="tabs__tabs-imgs">
                                <img src={tab4} alt="" className="tabs__tabs-img"/>
                            </div>
                            <div className="tabs__tabs-info">
                                <h2 className="tabs__tabs-title">
                                    Как выбрать телефон с хорошим экраном ?
                                </h2>
                                <p className="tabs__tabs-text">
                                    Высокое разрешение обеспечивает более четкое и детализированное <br/>
                                    отображение контента. Оптимальным вариантом считается Full HD <br/>
                                    или даже Quad HD для более крупных экранов. Существует несколько <br/>
                                    технологий экранов, таких как OLED, AMOLED, LCD и другие. OLED и <br/>
                                    AMOLED обычно предоставляют более яркие цвета и глубокие черные <br/>
                                    цвета. Высокая частота обновления 90 Гц или 120 Гц делает анимации <br/>
                                    более плавными и позволяет лучше ощутить отзывчивость устройства. <br/>
                                    Если вам важна точность цветопередачи, обратите внимание на телефоны <br/>
                                    с хорошей цветовой точностью.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Tabs;