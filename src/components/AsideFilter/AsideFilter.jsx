import React, {useState} from 'react';
import FilterSelect from "../FilterSelect/FilterSelect";
import Checkbox from '@mui/material/Checkbox';
import RangeInput from "./RangeInput";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const AsideFilter = ({category, setCategory, sort, setSort, slider, setSlider}) => {

    const resetFilter = () => {
        setSort('')
        setCategory('')
        setSlider([50000, 220000])
    }

    return (
        <aside className="catalog__aside">


            <div className="catalog__aside-block0">
                <h2 className="catalog__aside-title">
                    Раздел
                </h2>
                <div className="catalog__aside-content1">
                    {/*<FilterSelect title='Категория' state={category} setState={setCategory} array={['Samsung', 'Redmi', 'Apple']}/>*/}
                    <FilterSelect title='Сортировать' state={sort} setState={setSort} array={['asc', 'desc', 'rate']}/>
                </div>
            </div>
            <div className="catalog__aside-content2">
                <h2 className="catalog__aside-title">
                    Цена :
                </h2>

                <div className="catalog__aside-block">
                    <RangeInput slider={slider} setSlider={setSlider}/>

                    <div className="catalog__aside-prices">
                        <div className="catalog__aside-price">
                            {slider[0]} c.
                        </div>
                        <div className="catalog__aside-line"></div>
                        <div className="catalog__aside-price">
                            {slider[1]} c.
                        </div>
                    </div>

                </div>

            </div>
            <button onClick={resetFilter} className="catalog__aside-del">Сбросить</button>

        </aside>
    );
};

export default AsideFilter;















