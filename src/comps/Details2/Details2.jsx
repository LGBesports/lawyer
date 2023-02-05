import React from 'react'
import exp1 from '../../img/exp1.svg'
import exp2 from '../../img/exp2.svg'
import exp3 from '../../img/exp3.svg'
import exp4 from '../../img/exp4.svg'
import exp5 from '../../img/exp5.svg'
import exp6 from '../../img/exp6.svg'

function Details2() {
    return (
        <div className="details2-wrapper">
            <div className="details2__item"><img src={exp1} alt="" />Фитнес - центр</div>
            <div className="details2__item"><img src={exp2} alt="" />Спа - салон</div>
            <div className="details2__item"><img src={exp3} alt="" />Казино</div>
            <div className="details2__item"><img src={exp4} alt="" />Интернет</div>
            <div className="details2__item"><img src={exp5} alt="" />Бассейн</div>
            <div className="details2__item"><img src={exp6} alt="" />Кабельное ТВ</div>
        </div>
    )
}

export default Details2