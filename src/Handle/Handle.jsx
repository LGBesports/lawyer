import React from 'react'
import { useState } from 'react';


function Handle(props) {
    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    };

    return (

        <div className="categories scroll">
            <div className={isActive ? 'opened2' : 'closed'}>
                <div onClick={handleClick} className="topwrap">
                    <div className="title">{props.title}</div>
                    <button className={isActive ? 'opened-button' : 'closed-button'} ></button>
                </div>
                <div className="scrollwrap">
                    <div className="checkbox-wrapper scrollbar">
                        <div className="checkbox__item mb">
                            <input type="checkbox" name="cat1.1" id="cat1.1" />
                            <label htmlFor="cat1.1">Новинки недвижимости</label>
                        </div>
                        <div className="checkbox__item mb">
                            <input type="checkbox" name="cat1.2" id="cat1.2" />
                            <label htmlFor="cat1.2">Специальные предложения</label>
                        </div>
                        <div className="checkbox__item mb">
                            <input type="checkbox" name="cat1.3" id="cat1.3" />
                            <label htmlFor="cat1.3">Новостройки</label>
                        </div>
                        <div className="checkbox__item mb">
                            <input type="checkbox" name="cat1.4" id="cat1.4" />
                            <label htmlFor="cat1.4">Новостройки</label>
                        </div>
                        <div className="checkbox__item mb">
                            <input type="checkbox" name="cat1.5" id="cat1.5" />
                            <label htmlFor="cat1.5">Новостройки</label>
                        </div>
                        <div className="checkbox__item mb">
                            <input type="checkbox" name="cat1.6" id="cat1.6" />
                            <label htmlFor="cat1.6">Новостройки</label>
                        </div>
                        <div className="checkbox__item mb">
                            <input type="checkbox" name="cat1.7" id="cat1.7" />
                            <label htmlFor="cat1.7">Новостройки</label>
                        </div>

                        


                    </div>
                </div>

            </div>

        </div>

    )

}

export default Handle