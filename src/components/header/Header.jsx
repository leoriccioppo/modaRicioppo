import React from 'react';
import { NavBar } from '../navBar/NavBar';

const Header = () => {
    return (
        <header className="header">
            <div>
                <h1>
                    <div>Name</div>
                    <div>brand</div>
                </h1>
            </div>
            
            <NavBar/>
        </header>
    );
}

export { Header };