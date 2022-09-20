import React from 'react';

import { NavLink } from "react-router-dom";

const MenuCategorias = ({cat}) => {

        return (
            <NavLink className="categorias_navlink fadeIn" activeClassName="categorias_navlink_bold" to={`/categoria/${cat}`}>{cat}</NavLink>
        )
    }

export default MenuCategorias;
