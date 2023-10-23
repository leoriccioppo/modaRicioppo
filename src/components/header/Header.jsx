import React from 'react';
import { NavBar } from '../navBar/NavBar';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="header">
                    
            <div>       
                <img className="logo" src="../../../src/assets/images/logo.svg" alt="Logo Brand"/>  
                <Link to="/">        
                <h1>
                    <div>Name</div>
                    <div>brand</div>
                </h1>
                </Link>
            </div>
            

            
            <NavBar/>
        </header>
    );
}

export { Header };