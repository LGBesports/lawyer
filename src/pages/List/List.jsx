import React from 'react'
import './List.scss'
import { Routes, Route } from "react-router-dom";
import Nav from '../../comps/Nav/Nav';
import Filter from '../../comps/Filter/Filter';
import Personal from '../../comps/Personal/Personal'

function List() {
    return (

        <main className="main-list">

            <Routes>
                <Route
                    path='/'
                    element={
                        <Nav dubai="Новостройки в Дубае: 814" />
                    }
                />
                
            </Routes>
            <Filter />  
            <Personal />
        </main>


    )
}

export default List