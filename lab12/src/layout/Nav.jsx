import React from 'react';
import { Link } from 'react-router-dom'; /*возникла ошибка при запуске, жалоба на этот блок, исправила командами: npm i react-router-dom, npm i @types/react-router-dom*/
import navs from './Nav.module.css';

import img1 from '../images/logo.svg';
import img2 from '../images/calculation.svg';
import img3 from '../images/measering.svg';

const Nav = () => {
    return (
        <nav className={navs.al_it}>
            <div className={navs.container}>
                <img src={img1} alt='okna'/>
            </div>
            <div className={navs.links}>
                <li><Link to="/Services">Services</Link></li>
                <li><Link to="/Products">Products</Link></li>
                <li><Link to="/About">About Us</Link></li>
                <li><Link to="/Portfolio">Portfolio</Link></li>
                <li><Link to="/FAQ">FAQ</Link></li>
                <li><Link to="/Contacts">Contacts</Link></li>
            </div>
            <div className={navs.btn}>
                <Link to="/Make" className={`${navs.button} ${navs.btn1}`}>
                <img src={img3} alt="calendar" />Make request</Link>
                <Link to="/Calculation" className={`${navs.button} ${navs.btn2}`}>
                <img src={img2} alt="calculation" />Calculation</Link>
            </div>
        </nav>
    );
};

export default Nav;