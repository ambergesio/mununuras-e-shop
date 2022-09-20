import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from "../CartWidget";

const NavBar = () => {
    return (
        <>
            <nav>
                <Link className="links" to={`/`}>tienda</Link>
                <Link className="links" to={`/contacto`}>contacto</Link>
                <Link className="links" to={`/misordenes`}>mis órdenes</Link>
            </nav>
            <CartWidget />
        </>
    );
};

export default NavBar;