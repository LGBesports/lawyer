import React from 'react'
import './Home.scss'
import { ReactComponent as Arrow1 } from '../../img/arrow1.svg'
import { ReactComponent as Arrow2 } from '../../img/arrow2.svg'
import { ReactComponent as Arrow3 } from '../../img/arrow3.svg'
import { ReactComponent as Golink } from '../../img/go-link.svg'
import { ReactComponent as Mouse } from '../../img/mouse.svg'
import Advantages from '../../comps/Advantages/Advantages'
import LastProjects from '../../comps/LastProjects/LastProjects'
import Hot from '../../comps/Hot/Hot'
import Personal from '../../comps/Personal/Personal'


function Home() {
    return (
        <main className="home">
            <div className="container">

            </div>
            <div className="home__wrapper">
                <div className="circle">
                    <Arrow1 className='arrow1' />
                    <Arrow2 className='arrow2' />
                    <Arrow3 className='arrow3' />
                    <h1 className="circle__title">Полный цикл поддержи <br />ваших <b>инвестиций</b></h1>
                    <Mouse className='mouse' />
                    <div className="circle__wrapper">
                        <div className="circle__item trans0">
                            <div className="circle__item-inside">
                                Подбор объекта <br /> инвестиций
                                <button><Golink /></button>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="circle__item trans1">
                    <div className="circle__item-inside trans1">
                        Управление <br /> недвижимостью
                        <button><Golink /></button>
                    </div>
                </div>
                <div className="circle__item trans2">
                    
                    <div className="circle__item-inside trans1">
                        Юридическое сопровождение <br />
                        сделки. Визы. ВНЖ
                        <button><Golink /></button>
                    </div>
                </div>
            </div>

            <Advantages />
            <LastProjects />
            <Hot />
            <Personal />
        </main>
    )
}

export default Home