import React from 'react'
import { useState } from 'react';
import './Price.scss'
import Select from 'react-select';

import Range from '../Range/Range';

function Price(props) {
    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    };

    const options = [
        { value: "USD", label: 'Валюта, USD' },
        { value: '2', label: 'Валюта, EUR' }
    ];
    const [selectedOption, setSelectedOption] = useState("USD");
    const handleTypeSelect = e => {
        setSelectedOption(e.value);
    };
    return (
        <div className="categories scroll">
            <div className={isActive ? 'opened3' : 'closed'}>
                <div onClick={handleClick} className="topwrap">
                    <div className="title">{props.title}</div>
                    <button className={isActive ? 'opened-button' : 'closed-button'} ></button>
                </div>
                <div className="selector">
                    <Select
                        defaultValue={selectedOption}
                        onChange={handleTypeSelect}
                        options={options}
                        value={options.filter(function(option) {
                            return option.value === selectedOption;
                          })}
                          label="Single select"
                    />

                </div>
                <div className="ranger">
                    <div className="ranger__item from"><Range className="range" /></div>

                </div>
            </div>

        </div>
    )
}

export default Price