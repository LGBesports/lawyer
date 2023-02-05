import React from 'react'
import './Personal.scss'
import Person from '../Person/Person'

function Personal() {
    return (
        <div className="container l" >
            <section className="personal">
                <h2>Наши брокеры</h2>
                <div className="lastThree">
                    <Person name={`Сафонова \nАлександра`} mail="safonova_a@gmail.com" tel="+971 6242 23 32" job="Сертифицированный брокер
                    Языки: Рус, Eng, De" Image={require("../../img/person1.jpg")} />
                    <Person name={`Григоришина\nДарья`} mail="grygorishyn88@gmail.com" tel="+971 5542 12 11" job="Сертифицированный брокер
Языки: Рус, De, Esp" Image={require("../../img/person2.jpg")} />
                    <Person name={`Шестопалова\nЕлизавета`} mail="shestopalovaez@gmail.com" tel="+971 6242 23 32" job="Сертифицированный брокер
Языки: Рус, Eng, Укр" Image={require("../../img/person3.jpg")} />
                    <Person name={`Бочаров\nКонстантин`} mail="kostyabochka@gmail.com" tel="+971 6242 23 32" job="Сертифицированный брокер
Языки: Рус, Eng, Укр" Image={require("../../img/person4.jpg")} />

                </div>


            </section>

        </div>
    )
}

export default Personal