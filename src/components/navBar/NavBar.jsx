import React from 'react';
import { CartWidget } from '../cartWidget';


const NavBar = () =>{
    return (
        <nav className="nav-menu">
            <ul>
                <li><a href="/">Home & Life style</a></li>
                <li><a href="/">Bags</a></li> 
                <li><a href="/">Woman</a></li>
                <li><a href="/">Men</a></li>
                <CartWidget />
            </ul>              
        </nav>
    )
}

export { NavBar };