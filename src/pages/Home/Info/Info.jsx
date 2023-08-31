import React from 'react';
import info from '../../../assets/info/info.jpg'
import info2 from '../../../assets/info/info2.jpg'
import info3 from '../../../assets/info/info3.jpg'
import info4 from '../../../assets/info/info4.jpg'

const Info = () => {
    return (
        <section className="info">
            <div className="container">

                <div className="info__titles">
                    <h2 className="info__title">
                        Как правильно выбрать телефон под себя :
                    </h2>
                </div>

                <div className="info__row">

                    <div className="info__block">

                        <div className="info__block-right">
                            <h2 className="info__block-title">
                                Как правильно выбрать емкость батареи ?
                            </h2>

                            <p className="info__block-text">
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
                        <img className="info__block-img" src={info} alt=""/>

                    </div>
                    <div className="info__block">

                        <img className="info__block-img2" src={info2} alt=""/>
                        <div className="info__block-right">
                            <h2 className="info__block-title">
                                Как выбрать смартфон с хорошей камерой?
                            </h2>

                            <p className="info__block-text">
                                Выбор телефона с хорошей камерой зависит от ваших конкретных <br/>
                                потребностей и предпочтений и шаги, которые помогут вам принять решение: <br/>
                            </p>
                            <p className="info__block-text2">
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
                    <div className="info__block">

                        <div className="info__block-right">
                            <h2 className="info__block-title">
                                Как выбрать телефон с хорошей памятью ?
                            </h2>

                            <p className="info__block-text">

                                Решите, какие задачи вы планируете выполнять на телефоне. Если <br/>
                                вы собираетесь много фотографировать, снимать видео, скачивать <br/>
                                приложения и игры, то вам понадобится больше памяти. Внутренняя <br/>
                                память (ROM) используется для хранения приложений, медиафайлов <br/>
                                и данных. Большинство современных телефонов предлагают разные <br/>
                                варианты внутренней памяти: 64 ГБ, 128 ГБ, 256 ГБ и так далее. <br/>
                                Выберите объем памяти, который соответствует вашим потребностям. <br/>
                                Если вы планируете хранить большое количество фотографий, видео, <br/>
                                музыки и других медиафайлов, выберите телефон с большим объемом <br/>
                                памяти или возможностью расширения.
                            </p>
                        </div>
                        <img className="info__block-img3" src={info3} alt=""/>

                    </div>
                    <div className="info__block">

                        <img className="info__block-img4" src={info4} alt=""/>
                        <div className="info__block-right">
                            <h2 className="info__block-title">
                                Как выбрать телефон с хорошим экраном ?
                            </h2>

                            <p className="info__block-text">

                                Высокое разрешение обеспечивает более четкое и детализированное <br/>
                                отображение контента. Оптимальным вариантом считается Full HD <br/>
                                (1080 x 1920 пикселей) или даже Quad HD (1440 x 2560 пикселей) <br/>
                                для более крупных экранов. Существует несколько технологий <br/>
                                экранов, таких как OLED, AMOLED, LCD и другие. OLED и AMOLED <br/>
                                обычно предоставляют более яркие цвета и глубокие черные цвета. <br/>
                                Высокая частота обновления (например, 90 Гц или 120 Гц) делает <br/>
                                анимации более плавными и позволяет лучше ощутить отзывчивость <br/>
                                устройства.

                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Info;