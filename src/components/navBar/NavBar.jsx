import React from 'react';
import { CartWidget } from '../cartWidget/CartWidget.jsx';


const NavBar = () =>{
    return (
        <nav className="nav-menu">
            <ul>
                <li><a href="/">Woman</a></li>
                <li><a href="/">Men</a></li> 
                <li><a href="/">Jewelery</a></li>
                <li><a href="/">Electronics</a></li>
                <CartWidget />
            </ul>              
        </nav>
    )
}

export { NavBar };