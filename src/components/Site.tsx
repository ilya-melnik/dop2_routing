import React from 'react';
import styles from './Site.module.css'
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {PageOne} from "./pages/PageOne";
import {PageThree} from "./pages/PageThree";
import {PageTwo} from "./pages/PageTwo";
import {Error404} from "./pages/Error404";
import {dataState} from "../dataState/dataState";
import {Page} from "./pages/Page";


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                   <div><NavLink className={({isActive})=>isActive ? styles.active: styles.navLink} to={'page/0'}>Page1</NavLink></div>
                   <div> <NavLink className={({isActive})=>isActive ? styles.active: styles.navLink} to={'page/1'}>Page2</NavLink></div>
                   <div> <NavLink className={({isActive})=>isActive ? styles.active: styles.navLink} to={'page/2'}>Page3</NavLink></div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page1'}/>} />
                        <Route path={'page/:id'} element={<Page pages={dataState.pages} />} />

                    </Routes>

                </div>
            </div>
        </div>
    );
};

