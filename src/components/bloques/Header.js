import React, { useState, useContext } from "react";
import NavBar from "./NavBar";
import CartContext from "../../context/CartContext";


const Header = () => {
    const {cartelAviso, cerrarCartel ,deshacerBoton, unDo} = useContext(CartContext);
    const [navegacion, setNavegacion] = useState(false);
    window.onscroll = () => {
        if ( window.scrollY >= 190 ) setNavegacion(true);
        else setNavegacion(false);
    }
    return (
        <header className={ navegacion ? "y_axis" : "" }>
            <div style={{ 
                transform: cartelAviso.length > 0 
                ?
                'scale(1,1)' : 'scale(1,0)' }} 
                className="ventanaModal sombra"><p>{cartelAviso}. { deshacerBoton ? 
                <>
                <button className="unDo" onClick={unDo}>Deshacer?</button>
                <button className="unDocerrar" onClick={cerrarCartel}>X</button>
                </>
                :
                null}</p></div>
            <NavBar />
        </header>
    )
}
export default Header;