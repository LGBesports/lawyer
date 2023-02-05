import React from 'react'
import './Filter.scss'
import Project2 from '../Project2/Project2'
import SliderCard from '../SliderCard/SliderCard'
import Handle from '../../Handle/Handle'
import Price from '../Price/Price'
import SelectType from '../SelectType/SelectType'
import { ReactComponent as Filterimg } from '../../img/filter.svg'
import { ReactComponent as Sort } from '../../img/sort.svg'
import { useState } from 'react';
import { ReactComponent as Map } from '../../img/map.svg'

function Filter() {
    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    };
    const [choice, setChoice] = useState("apple");

    const fruits = ["сначала дороже", "сначала дешевле", "сначала новые"];
    const options = fruits.map((fruit) => {
        return <option value={fruit}>{fruit}</option>;
    });
    console.log(choice);
    const handleFruit = (event) => {
        setChoice(event.target.value);
    };
    return (
        <div className="filter-wrapper">
            <div className="hidden"></div>
            <div className="container">
                <div className="filter__top">
                    <div className="left">
                        <div className="filter__param">
                            <button onClick={handleClick}><Filterimg />Параметры подбора</button>
                        </div>
                        <div className="filter__sort"><div><Sort />Сортировать:<select onChange={handleFruit}>{options}</select></div></div>
                    </div>
                    
                    <div className='right'><button><Map />Посмотреть на карте</button></div>
                </div>
                <div className="filter__body">
                    <div id={isActive ? 'opened' : ''} className="filter">
                        <div className="radio">
                            <div className="radio-item">
                                <input id='buy' name='type' type="radio" />
                                <label htmlFor="buy">покупка</label>
                            </div>
                            <div className="radio-item">
                                <input id='rent' name='type' type="radio" />
                                <label htmlFor="rent">аренда</label>
                            </div>


                        </div>
                        <div className="categories kat">
                            <div className="title">Категории</div>
                            <div className="checkbox-wrapper">
                                <div className="checkbox__item">
                                    <input type="checkbox" name="cat" id="cat1" />
                                    <label htmlFor="cat1">Новинки недвижимости</label>
                                </div>
                                <div className="checkbox__item">
                                    <input type="checkbox" name="cat" id="cat2" />
                                    <label htmlFor="cat2">Специальные предложения</label>
                                </div>
                                <div className="checkbox__item">
                                    <input type="checkbox" name="cat" id="cat3" />
                                    <label htmlFor="cat3">Новостройки</label>
                                </div>


                            </div>
                        </div>
                        <Handle title="Тип недвижимости" />
                        <Handle title="Район" />
                        <Price title="Цена" />
                        <SelectType title="Количество спален" />
                        <SelectType title="Статус сдачи" />
                        <SelectType title="Жилой комплекс" />
                        <SelectType title="Застройщик" />
                        <SelectType title="Удобства" />
                        <button className='kill'>сбросить фильтры</button>
                    </div>
                    <div className="filter__list">
                        
                        <div className="lastThree infilter">
                            <Project2 Image={require("../../img/card1.jpg")} floor="3" name='Burj al Arab' builder='CORE Group' loc="Al Dhafra Rd - Madinat Za'id" description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' />
                            <Project2 Image={require("../../img/card2.jpg")} floor="6" name='Spacious apartment in Dubai Marina, UAE, 5 bedrooms' builder='CORE Group' description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' />
                            <Project2 Image={require("../../img/card3.jpg")} floor="5" name='Burj al Arab' builder='CORE Group' description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' />
                            <Project2 Image={require("../../img/card3.jpg")} floor="5" name='Burj al Arab' builder='CORE Group' description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' />
                            <SliderCard />
                            <Project2 Image={require("../../img/card3.jpg")} floor="5" name='Burj al Arab' builder='CORE Group' description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' />
                            <Project2 Image={require("../../img/card3.jpg")} floor="5" name='Burj al Arab' builder='CORE Group' description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' />
                            <Project2 Image={require("../../img/card3.jpg")} floor="5" name='Burj al Arab' builder='CORE Group' description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' />
                            <Project2 Image={require("../../img/card3.jpg")} floor="5" name='Burj al Arab' builder='CORE Group' description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' />
                            <Project2 Image={require("../../img/card3.jpg")} floor="5" name='Burj al Arab' builder='CORE Group' description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' />
                            <Project2 Image={require("../../img/card3.jpg")} floor="5" name='Burj al Arab' builder='CORE Group' description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' />
                            <Project2 Image={require("../../img/card3.jpg")} floor="5" name='Burj al Arab' builder='CORE Group' description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' />
                            <Project2 Image={require("../../img/card3.jpg")} floor="5" name='Burj al Arab' builder='CORE Group' description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' />
                            <Project2 Image={require("../../img/card3.jpg")} floor="5" name='Burj al Arab' builder='CORE Group' description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' />
                            <Project2 Image={require("../../img/card3.jpg")} floor="5" name='Burj al Arab' builder='CORE Group' description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' />                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Filter