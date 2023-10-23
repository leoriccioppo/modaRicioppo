import React from 'react';
import { CartWidget } from '../cartWidget/CartWidget.jsx';
import { Link } from 'react-router-dom';
import { PiLinkBreakFill } from 'react-icons/pi';


const NavBar = () =>{
    return (
        <nav className="nav-menu">
            <ul>
                <li><Link to="/WomensClothing">Woman</Link></li>
                <li><Link to="/MensClothing">Men</Link></li> 
                <li><Link to="/Jewelery">Jewelery</Link></li>
                <li><Link to="/Eletronics">Electronics</Link></li>
                <CartWidget />
            </ul>              
        </nav>
    )
}

export { NavBar };