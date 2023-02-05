import React from 'react'
import './Item.scss'
import { Routes, Route } from "react-router-dom";
import Nav from '../../comps/Nav/Nav';
import Footer from '../../comps/Footer/Footer';
import Header2 from '../../comps/Header2/Header2';
import ItemInfo from '../../comps/ItemInfo/ItemInfo';
import Same from '../../comps/Same/Same';

function Item() {
    return (

        <main className="main-list">
            <Header2 />
            <Routes>
                <Route
                    path='/'
                    element={
                        <Nav  />
                    }
                />
            </Routes>
            <ItemInfo />
            <Same  />
            <Footer />
        </main>


    )
}

export default Item