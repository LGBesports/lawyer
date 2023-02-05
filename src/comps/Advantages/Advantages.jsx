import React from 'react'
import './Advantages.scss'
import { ReactComponent as Card1 } from '../../img/card1.svg'
import { ReactComponent as Card2 } from '../../img/card2.svg'
import { ReactComponent as Card3 } from '../../img/card3.svg'

function Advantages() {
    return (
        <div className="container">
            <section className="advantages">
                <div className="advantages__item"><Card1 /> Профессионализм</div>
                <div className="advantages__item"><Card2 /> Оперативность</div>
                <div className="advantages__item"><Card3 /> Надежность</div>
            </section>
        </div>

    )
}

export default Advantages